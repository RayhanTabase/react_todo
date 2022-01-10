import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TodoContainer from './components/TodoContainer';
import About from './components/About';
import NotMatch from './components/NotMatch';
import Navbar from './components/Navbar';
import SinglePage from './components/SinglePages';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/about" element={<About />}>
        <Route path=":slug" element={<SinglePage />} />
      </Route>
      <Route path="/*" element={<NotMatch />} />
    </Routes>
  </Router>
);
export default App;
