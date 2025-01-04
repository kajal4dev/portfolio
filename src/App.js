import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import About from './component/About';
import Skill from './component/Skill'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Skill/>
    </div>
  );
}

export default App;
