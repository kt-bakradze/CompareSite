import './App.scss';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Search from './SearchPage';
import CompareContent from './SecondPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='' element={<Search />}/>
        <Route exact path='/compare' element={<CompareContent />}/>
      </Routes>
    </Router>  
  );
}

export default App;
