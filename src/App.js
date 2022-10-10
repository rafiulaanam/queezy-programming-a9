import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Home from './components/Home/Home';
import About from './components/About/About';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Blogs from './components/Blogs/Blogs';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
      {path:'/home', element:<Home></Home>},
      {path:'/about', element:<About></About>},
      {path:'/topics', element:<Topics></Topics>},
      {path:'/statistics', element:<Statistics></Statistics>},
      {path:'/blogs', element:<Blogs></Blogs>}
    ]},
    {path:'*', element:<h1>Error</h1>}
  ])
  return (
    <div className='App'>
    
    <RouterProvider router={router}></RouterProvider>
    
    </div>
  );
}

export default App;
