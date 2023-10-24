import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndonesiaPage from './pages/indonesia';
import ErrorPage from './pages/404';
<<<<<<< HEAD
import Footer from './pages/Footer';
=======
import Navbars from './components/organisms/Navbar';
import Headers from './components/organisms/Headers';
import ProgrammingPage from './pages/programming';
import CovidPage from './pages/covid';
import SavedPage from './pages/saved';
import SearchPage from './pages/search';
import AllNews from './pages/allnews';
import Home from './pages/home';
import { useLocation } from 'react-router-dom';
>>>>>>> 97994d1a6af3c37e6df4c3e726e8f18d97b5ac03

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  return (
    <>
      {isHomePage && <Headers />}
      <Navbars />
      <main className="px-20 md:px-20 mb-10 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all" element={<AllNews />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/indonesia" element={<IndonesiaPage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
          <Route path="/covid" element={<CovidPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
