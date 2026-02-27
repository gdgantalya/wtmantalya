import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Team from './pages/team.tsx'

import './index.scss'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage/ErrorPage.tsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
  { path: '/equipo', element: <Team />, errorElement: <ErrorPage /> },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
