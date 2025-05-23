import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
