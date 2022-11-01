import { Routes, Route } from "react-router-dom";
import { Home } from "../page/Home";
import { Company } from "../page/Company";
import { InfoFiscale } from '../page/InfoFiscale';
export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/company" element={<Company />}></Route>
      <Route path="/infofiscal" element={<InfoFiscale/>}></Route>
    </Routes>
  )
}