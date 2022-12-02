
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home'
import Statistics from './components/Statistics/Statistics';
import Main from './components/layout/Main'
import QuizQuestions from './components/QuizQuestions/QuizQuestions';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizQuestions></QuizQuestions>
        },
        { path: '/statistics', element: <Statistics></Statistics> },
        { path: '/blog', element: <Blog></Blog> }
      ]
    },
    {
      path: '*', element: <div className="text-center mt-10 pt-10 text-5xl"><div><br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        404, page not found</div></div>
    }


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
