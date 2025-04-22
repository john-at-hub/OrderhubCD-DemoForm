import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.tsx'
import DatePickerTestPage from './pages/DatePickerTestPage.tsx';
import { GeneratedForm } from './pages/FormPage.tsx';
import DisplayData from './pages/DisplayData.tsx';



createRoot(document.getElementById('root')!).render(
  
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/datepicker" element={<DatePickerTestPage />} />
        <Route path="/form-test" element={<GeneratedForm />} />
        <Route path="/admin" element={<DisplayData />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
