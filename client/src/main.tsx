import { StrictMode } from 'react'
import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@/contexts/theme-context'
import { ToastProvider } from "@/contexts/toast-context";
import { AuthProvider } from "@/contexts/auth-context";

import './globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <ToastProvider>
           <AuthProvider>
            <App />
           </AuthProvider>
        </ToastProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
