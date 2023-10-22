import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndonesiaPage from './pages/indonesia';
import ErrorPage from './pages/404';
import Navbars from './components/organisms/Navbar';
import Headers from './components/organisms/Headers';
import ProgrammingPage from './pages/programming';

function App() {
  return (
    <>
      <Headers/>
      <Navbars/> 
      <main className="px-20 md:px-20 mb-10">
        <Routes>
          <Route path="/" element={<IndonesiaPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
