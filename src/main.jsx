import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Components/Pages/Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Components/Pages/Authentication/AuthProvider.jsx';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a QueryClient instance
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <StrictMode>
          <RouterProvider router={router}></RouterProvider>
        </StrictMode>,
      </HelmetProvider>
    </QueryClientProvider>

  </AuthProvider>

)
