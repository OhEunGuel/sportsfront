import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Main from './pages/main';
import Community from './pages/community';
import Login from './pages/login';
import MyPage from './pages/mypage';
import Join from "./pages/join";
import Match from "./pages/match";
import Chat from "./pages/chat";
<<<<<<< HEAD
import Team from "./pages/team";
import CurrentKbo from "./components/CurrentGame /CurrentKbo";
import Current from "./pages/current";
=======
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc

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
      {
        path: 'match',
        element: <Match />,
      },
      {
        path: 'chat',
        element: <Chat />,
      },
<<<<<<< HEAD
      {
        path: 'team',
        element: <Team/>
      },
      {
        path: 'current',
        element: <Current/>,
      }
    ],

=======
    ],
>>>>>>> 5ce4d9c0281e4d993d75d064a008a1b699e976cc
  },
]);

export default Router;
