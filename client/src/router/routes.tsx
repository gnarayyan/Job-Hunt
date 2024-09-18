import { createBrowserRouter } from 'react-router-dom';
import * as pages from '../pages';
import * as layouts from '../layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: layouts.AppLayout(),
    errorElement: pages.ErrorPage(),
    children: [
      {
        path: '/',
        element: pages.HomePage(),
      },
      {
        path: '/register',
        element: pages.RegisterPage(),
      },
      {
        path: '/login',
        element: pages.LoginPage(),
      },
      {
        path: '/dashboard',
        element: pages.DashboardLayoutPage(),
      },
    ],
  },
]);

export default router;
