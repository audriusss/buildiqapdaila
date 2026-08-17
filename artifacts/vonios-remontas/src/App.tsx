import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { HelmetProvider } from 'react-helmet-async';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

import Home from '@/pages/home';
import Projects from '@/pages/projects';
import ProjectDetail from '@/pages/project-detail';
import FAQ from '@/pages/faq';
import SeoPage, { seoPagesData } from '@/pages/seo-page';

const queryClient = new QueryClient();

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/darbai" component={Projects} />
        <Route path="/darbai/:slug" component={ProjectDetail} />
        <Route path="/faq" component={FAQ} />
        
        {/* Dynamic SEO pages generation */}
        {Object.entries(seoPagesData).map(([slug, data]) => (
          <Route key={slug} path={`/${slug}`}>
            {() => <SeoPage {...data} slug={slug} />}
          </Route>
        ))}

        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
