import './App.css';
import Layout from "./components/Layout";
import Products from "./components/Products";

import About from "../src/components/About";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>Link
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<About />} />
        </Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;