import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import TemplateProvider from './context/TemplateContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TemplateProvider>
      <App />
    </TemplateProvider>
  </StrictMode>,
);
