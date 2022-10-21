import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { Company } from "../page/Company";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Company" element={<Company />}></Route>
      </Routes>
    </BrowserRouter>
  )
}