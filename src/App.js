import './App.css';
import Header from './templates/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
