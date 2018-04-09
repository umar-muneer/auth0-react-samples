import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { makeMainRoutes } from './routes';
import dotenv from 'dotenv';
const routes = makeMainRoutes();
dotenv.config();
ReactDOM.render(
  routes,
  document.getElementById('root')
);
