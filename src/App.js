import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./page-component/landing";
import Modules from "./page-component/modules/modules";

export default function App() {

  return (
    <>
      <Router basename="/zenengine">
        <Routes>
          <Route path="/*"  element={<Landing />} />
          <Route path="/modules"  element={<Modules />} />
        </Routes>
      </Router>
    </>
  )
}