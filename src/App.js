import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Blogs from './components/Blogs/Blogs';
import Quiz from './components/Quiz/Quiz';
import Home from './components/Home/Home';

function App() {
  const router = createBrowserRouter([
    {path:'/', element:<Main></Main>,children:[
      {path:'/',element:<Home></Home>},
            {path:'/topics', loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'), element:<Topics></Topics>},
      {path:'/statistics', element:<Statistics></Statistics>},
      {path:'/blogs', element:<Blogs></Blogs>},
      {path:'/quiz/:quizId', loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`) ,element:<Quiz></Quiz>}
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
