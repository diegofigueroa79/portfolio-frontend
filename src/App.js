import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/home.jsx'

function App() {
  return (
    <Routes>
      <Route path='/portfolio-frontend/' element={<Home />} />
    </Routes>
  );
}

export default App;
