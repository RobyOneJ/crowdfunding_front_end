import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import CreateProjectPage from './pages/CreateProjectPage.jsx';
import PledgePage from './pages/PledgePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import UserPage from './pages/UserPage.jsx';
import UserForm from './components/UserForm.jsx';
import { AuthProvider } from "./components/AuthProvider.jsx";
import ProjectForm from './components/ProjectForm.jsx';
import PledgeForm from './components/PledgeForm.jsx';
import App from "./app";

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
      { path: "/pledge/edit", element: <PledgeForm /> },
      { path: "/account", element: <SignupPage /> },
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


