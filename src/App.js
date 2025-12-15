import './resources/PlusJakarta/importFont.css';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/landing/landing.js'
import SubmitIdeas from './components/submitIdeas/submitIdeas.js';
import Docs from './components/docs/docs.js';

export default function App () {
  return (
    <>
      <Router basename="/zenengine">
        <Routes>
          <Route path="/*" element={<Landing />} />
          <Route path="/submit-ideas" element={<SubmitIdeas />} />
          <Route path="/docs/:module" element={<Docs />} />
        </Routes>
      </Router>
    </>
  )
}

