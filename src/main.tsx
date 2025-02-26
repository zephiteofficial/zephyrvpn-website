import ReactDOM from 'react-dom/client';
import './index.css';
import App from './router';
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <HashRouter>
      <App />
    </HashRouter>
  );
} else {
  console.error('Failed to find the root element');
}