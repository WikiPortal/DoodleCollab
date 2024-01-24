import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { injectSpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
    <Analytics />
  </React.StrictMode>,
);
injectSpeedInsights();