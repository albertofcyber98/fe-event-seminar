import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signin from './pages/signin';
import Dashboard from './pages/dashboard';
import Categories from './pages/categories';
import CategoriesCreate from './pages/categories/create';
import CategoriesEdit from './pages/categories/edit';

function App() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/categories' element={<Categories/>} />
        <Route path='/categories/create' element={<CategoriesCreate/>} />
        <Route path='/categories/edit/:id' element={<CategoriesEdit/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
