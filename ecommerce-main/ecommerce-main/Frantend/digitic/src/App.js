
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import MainRouter from './Pages/MainRouter';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRouter/>
      <Footer/>
    </div>
  );
}

export default App;
