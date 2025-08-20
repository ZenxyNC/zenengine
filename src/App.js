import './resources/PlusJakarta/importFont.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing.js'

export default function App () {
  return (
    <>
      <Router basename="/zenengine">
        <Routes>
          <Route path="/*" element={<Landing />} />
        </Routes>
      </Router>
    </>
  )
}

