import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';
import './index.css';

const container = document.getElementById('root')!;

// If the container already has SSR-prerendered HTML, hydrate it.
// The template's placeholder "<!--app-html-->" is a comment node so
// innerHTML will equal that comment string when no prerender has run.
const raw = container.innerHTML;
const hasSSR = raw.length > 0 && raw !== '<!--app-html-->';

if (hasSSR) {
  hydrateRoot(
    container,
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  );
} else {
  createRoot(container, {
    onCaughtError: (error, errorInfo) => {
      console.error(error, errorInfo.componentStack);
    },
  }).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>,
  );
}
