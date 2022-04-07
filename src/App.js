
import './App.css';
import Testimonios from './components/Testimonios';
import './style/styleTestimonio.css';
import './style/styleTitulo.css';
import './style/styleFooter.css';
import Titulo from './components/Titulo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Titulo 
        titulo="Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:"
      />
      <Testimonios 
      img="shawn"
      name="Shawn Wang"
      country="Singapur"
      charge="Ingeniero de Software"
      company="Amazon"
      testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
      />
       <Testimonios 
      img="sarah" 
      name="Sarah Chima"
      country="Nigeria"
      charge="Ingeniero de Software"
      company="ChatDesk"
      testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
      />
       <Testimonios
      img="emma" 
      name="Emma Bostian"
      country="Suecia"
      charge="Ingeniero de Software"
      company="Spotify"
      testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
      />
      <Footer />
    </div>
  );
}

export default App;
