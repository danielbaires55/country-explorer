import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "./components/ui/provider.tsx"
//import { Provider } from "@/components/ui/provider"
//import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Provider>
      <Routes>
        <Route index element={<App />} />
      </Routes>
    </Provider>
    </BrowserRouter>
  </StrictMode>,
)  