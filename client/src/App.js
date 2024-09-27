import Navbar from './components/NavBar/Navbar.jsx';
import CafePage from './pages/CafePage.jsx';
import HomePage from './pages/Homepage.jsx';
import EmployeePage from './pages/EmployeePage.jsx';
import {
  RouterProvider,
  Router,
  RootRoute,
  Route,
  Outlet,
} from '@tanstack/react-router';

// Define the root route
const rootRoute = new RootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet />
    </>
  )
});

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const cafesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/cafes',
  component: CafePage,
});

const employersRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/employers',
  component: EmployeePage,
});

const router = new Router({
  routeTree: rootRoute.addChildren([homeRoute, cafesRoute, employersRoute]),
});

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
