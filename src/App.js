import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <div >
      <Header></Header>
      <Banner></Banner>
      <About></About>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
