import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import Dashboard from './pages/dashboard';
import Categories from './pages/categories';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/categories' element={<Categories/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
