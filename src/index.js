import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BootComponent } from './boot/BootComponent/BootComponent';
import ErrorComponent from './utils/ErrorComponent/ErrorComponent';
import { ProductListComponent } from './modules/product/list/ProductListComponent';
import { ProductFormComponent } from "./modules/product/form/ProductFormComponent";
import { ProductLoaders } from './loaders/ProductLoaders';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BootComponent />,
    errorElement: <ErrorComponent />,
    children: [
      {
        path: "/productos",
        element: <ProductListComponent />,
        loader: ProductLoaders.get
      },
      {
        path: "/producto",
        element: <ProductFormComponent />,
      },
      {
        path: "/producto/:idProducto",
        element: <ProductFormComponent />,
      },
    ]
  },
  // {
  //   path: "/venta",
  //   element: <SellListComponent />,
  // },
])

const left = ReactDOM.createRoot(document.getElementById('root'));
left.render(

  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// npm i react-router-dom localforage match-sorter sort-by