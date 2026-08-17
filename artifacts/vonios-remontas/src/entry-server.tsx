/**
 * SSR entry point — used only during build-time prerendering.
 * Imported by prerender.mjs after `vite build --ssr`.
 */
import { useSyncExternalStore } from 'react';
import { renderToString } from 'react-dom/server';
import { HelmetProvider, type FilledContext } from 'react-helmet-async';
import { Router as WouterRouter, Switch, Route } from 'wouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from '@/components/ui/tooltip';
import Home from '@/pages/home';
import Projects from '@/pages/projects';
import ProjectDetail from '@/pages/project-detail';
import FAQ from '@/pages/faq';
import SeoPage, { seoPagesData } from '@/pages/seo-page';

// Import static project data to pre-seed the React Query cache so
// data-dependent pages (darbai, darbai/:slug) render with real content.
import { projects } from '../../api-server/src/data/projects';

// ── SSR-compatible location hook for Wouter ──────────────────────────────────
// wouter's built-in memoryLocation calls useSyncExternalStore without a
// getServerSnapshot, which React 19's server renderer requires (throws if absent).
// This custom hook provides all three arguments so renderToString works correctly.
function createSSRLocationHook(staticPath: string) {
  const noop = () => () => {};
  const getPath = () => staticPath;
  const getSearch = () => '';

  const hook = () => {
    const location = useSyncExternalStore(noop, getPath, getPath);
    return [location, (_to: string) => {}] as [string, (to: string) => void];
  };

  // Wouter's Router checks hook.searchHook optionally.
  hook.searchHook = () =>
    useSyncExternalStore(noop, getSearch, getSearch);

  return hook;
}

// ────────────────────────────────────────────────────────────────────────────

export interface RenderResult {
  html: string;
  helmet: FilledContext['helmet'];
}

export function render(url: string): RenderResult {
  const helmetContext: Partial<FilledContext> = {};

  // Pre-seed React Query cache with static project data so hooks return
  // data synchronously during renderToString (no network calls happen).
  // Query keys mirror what the generated api-client uses:
  //   useListProjects  → ['/api/projects']
  //   useGetProject(s) → ['/api/projects/<slug>']
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
        gcTime: Infinity,
      },
    },
  });
  queryClient.setQueryData(['/api/projects'], projects);
  for (const project of projects) {
    queryClient.setQueryData([`/api/projects/${project.slug}`], project);
  }

  const hook = createSSRLocationHook(url);

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter hook={hook}>
            <Switch>
              <Route path="/" component={Home} />
              <Route path="/darbai" component={Projects} />
              <Route path="/darbai/:slug" component={ProjectDetail} />
              <Route path="/faq" component={FAQ} />
              {Object.entries(seoPagesData).map(([slug, data]) => (
                <Route key={slug} path={`/${slug}`}>
                  {() => <SeoPage {...data} slug={slug} />}
                </Route>
              ))}
            </Switch>
          </WouterRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>,
  );

  return {
    html,
    helmet: (helmetContext as FilledContext).helmet,
  };
}
