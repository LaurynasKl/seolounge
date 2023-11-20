import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { DemoPage } from "./pages/Demo";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<HomePage />} />
      <Route path='/demo' element={<DemoPage />} />
      {/* <Route path='*' element={<NoPage />} /> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
