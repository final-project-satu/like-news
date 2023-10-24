import { Route, Routes } from 'react-router-dom';
import './App.css';
import IndonesiaPage from './pages/indonesia';
import ErrorPage from './pages/404';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      {/* Header */}
      {/* Navbar */}
      <main className="px-2 md:px-20 mb-10">
        <Routes>
          <Route path="/" element={<IndonesiaPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}

export default App;
