
import NavBar from './assets/componentes/NavBar/NavBar' 
import './app.css'
import Footer from './assets/componentes/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
import Card from './assets/componentes/Cards/Card';
import Nosotros from './assets/componentes/Nosotros/Nosotros';

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    
    
    <NavBar />

      <section className='portada'>
        
        <h1>Instantes Eternos  
        </h1>

        <h2>Estudio Fotografico</h2>

        <img  className="imgPortada" src="./3.png" alt="Logo IE" />

        

       
      </section>
      
      <section >
  

    <Nosotros  />
  
    
     <p> Contáctanos: Estamos ubicados en el corazón de Córdoba, y estamos ansiosos por ayudarte a capturar tus momentos más preciados. ¡Contáctanos hoy y descubre cómo podemos hacer que tus recuerdos duren para siempre!</p>

      


      </section>

      <Card />
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
