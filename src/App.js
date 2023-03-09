
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    
    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <Header/>
      <Nav/>
      <Projects/>
      <Experience/>
      <Contact/>
      <About/>
      <Footer/>
    </div>
  );
}
export default App;