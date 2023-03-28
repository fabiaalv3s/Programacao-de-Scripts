import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement  //aqui é feita a ligação entre type e js
);
root.render(
  <App />
);

