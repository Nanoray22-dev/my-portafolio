import logo from './logo.svg';
import './App.css';
 import Home from './Components/Home'
 import NavBar from './Components/NavBar';
 import AboutMe from './Components/AboutMe'
 import Skills from './Components/Skills'
 import Portfolio from './Components/Portfolio';
 

function App() {
  return (
    <div  className='p-[20px]'>
  
      {/* Nav Bar  */}
      <NavBar></NavBar>
      {/* Intro  */}
      <Home></Home>
      {/* About me  */}
        <AboutMe></AboutMe>
      {/* skills   */}
       <Skills></Skills>
      {/* portfolio  */}
        <Portfolio></Portfolio>
      {/* companies/Academy  */}

      {/* contact us  */}

      {/* footer  */}
    </div>
  );
}

export default App;
