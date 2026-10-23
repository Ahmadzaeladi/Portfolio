import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { HeroUIProvider } from '@heroui/react';
import App from './App';
import '@/styles/globals.css';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element "#root" was not found.');
}

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <HeroUIProvider>
      <App />
    </HeroUIProvider>
  </StrictMode>,
);
