import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { ServicesPage } from "./pages/ServicesPage";
import { HomePage } from "./pages/HomePage";
import { NoPage } from './pages/NoPage';
import { RegisterPage } from './pages/RegisterPage';
// import { Login } from './sections/Login';
import { TosPage } from './pages/TosPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/tosPage' element={<TosPage />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
