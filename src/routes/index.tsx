import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}