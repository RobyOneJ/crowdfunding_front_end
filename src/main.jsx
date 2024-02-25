import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateProjectPage from './pages/CreateProjectPage.jsx';
import PledgePage from './pages/PledgePage.jsx';
import CreateUserPage from './pages/CreateUserPage.jsx';
import UserPage from './pages/UserPage.jsx';
import UserForm from './components/UserForm.jsx';
import { AuthProvider } from "./components/AuthProvider.jsx";
import App from "./app";
import ProjectForm from './components/ProjectForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
      { path: "/project", element: <CreateProjectPage /> },
      { path: "/project/:id", element: <ProjectPage /> },
      { path: "/project/edit", element: <ProjectForm /> },
      { path: "/pledge/:id", element: <PledgePage /> },
      { path: "/account", element: <CreateUserPage /> },
      { path: "/account/:id", element: <UserPage /> },
      { path: "/account/edit", element: <UserForm /> }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
);


