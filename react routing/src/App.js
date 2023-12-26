import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import ErrorPage from './pages/Error';
import HomePage from './pages/Home';
import ProductDetailPage from './pages/ProductDetail';
import Products from './pages/Products';
import Root from './pages/Root';

// const routerElement = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>}/>
//     <Route path="/products" element={<Products/>}/>
//   </Route>
// )
// const router = createBrowserRouter(routerElement)


// object based router
const router = createBrowserRouter([
  {path:'/', 
   element:<Root/>,
   errorElement:<ErrorPage/>,
   children:[
    {path:'', element:<HomePage/>},
    {path:'products', element:<Products/>},
    {path:'products/:productId', element:<ProductDetailPage/>}
   ]
  },
])

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
