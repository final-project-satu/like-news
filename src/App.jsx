import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndonesiaPage from './pages/indonesia';
import ErrorPage from './pages/404';
import Navbars from './components/organisms/Navbar';
import Headers from './components/organisms/Headers';
import ProgrammingPage from './pages/programming';
import CovidPage from './pages/covid';
import SavedPage from './pages/saved';
import SearchPage from './pages/search';

function App() {
  return (
    <>
      <Headers />
      <Navbars />
      <main className="px-20 md:px-20 mb-10">
        <Routes>
          <Route path="/" element={<IndonesiaPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/indonesia" element={<IndonesiaPage />} />
          <Route path="/programming" element={<ProgrammingPage />} />
          <Route path="/covid" element={<CovidPage />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
