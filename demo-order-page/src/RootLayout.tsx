// src/RootLayout.tsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import App from "./App";
import DatePickerTestPage from "./pages/DatePickerTestPage";
import { GeneratedForm } from "./pages/FormPage";
import DisplayData from "./pages/DisplayData";

export default function RootLayout() {
  const [submissions, setSubmissions] = useState<any[]>([]);

  const handleFormSubmit = (data: any) => {
    setSubmissions(prev => [...prev, data]);
  };

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/datepicker" element={<DatePickerTestPage />} />
      <Route path="/form-test" element={<GeneratedForm onSubmit={handleFormSubmit} />} />
      <Route path="/admin" element={<DisplayData submissions={submissions} />} />
    </Routes>
  );
}
