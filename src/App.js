import logo from './logo.svg';
import './App.css';
import Joke from './Components/Joke';
import User from './Components/User';
import Posts from './Components/Posts';
import Counter from './Components/Counter';
import News from './Components/News';
import Courses from './Components/Courses';
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addcourses from './Components/Addcourses';

function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Header/>}/>
      <Route path='/add' exact element={<Addcourses/>}/>
      <Route path='/count' exact element={<Counter/>}/>
      <Route path='/news' exact element={<News/>}/>
      <Route path='/course' exact element={<Courses/>}/>
      <Route path='/post' exact element={<Posts/>}/>
      <Route path='/user' exact element={<User/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
