import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main';
import Community from './pages/community';
import Login from './pages/login';
import MyPage from './pages/mypage';
import Join from "./pages/join";

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
      {
        path: 'community',
        element: <Community />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'join',
        element: <Join />,
      },
      {
        path: 'my-page',
        element: <MyPage />,
      },
    ],
  },
]);

export default Router;
