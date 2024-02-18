import './index.css'

import Root from "./Root";
import Home from './home/home.jsx'

import { createBrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { RouterProvider } from "react-router-dom";




const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path='/' element={<Home />}/>
  </Route>
  )
);



function App() {

  return (
    <div className='container'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
