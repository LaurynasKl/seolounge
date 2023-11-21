import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { ServicesPage } from "./pages/ServicesPage";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/services' element={<ServicesPage />} />
      {/* <Route path='*' element={<NoPage />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
