import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./page-component/landing";

export default function App() {

  return (
    <>
      <Router basename="/zenengine">
        <Routes>
          <Route path="/*"  element={<Landing />} />
        </Routes>
      </Router>
    </>
  )
}