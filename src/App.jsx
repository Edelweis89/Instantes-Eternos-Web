
import NavBar from './assets/componentes/NavBar/NavBar' 
import './app.css'
import Footer from './assets/componentes/Footer/Footer'
import { BrowserRouter } from 'react-router-dom';
import Card from './assets/componentes/Cards/Card';

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
      
      <section className='hacemos'>
      <h2>Capturando Momentos, Creando Recuerdos</h2>

      <p>En Instantes Eternos, nos especializamos en capturar esos momentos únicos y especiales que merecen ser recordados para siempre. Nuestro estudio fotográfico se dedica a transformar cada instante en una obra de arte, asegurándonos de que cada fotografía cuente una historia y evoque emociones. </p>

  <h3>Nuestros Servicios Incluyen: </h3>

  <li>Fotografía de Bodas: Inmortalizamos el día más importante de tu vida con imágenes llenas de amor y alegría.</li>
  <li>Sesiones de Retrato: Capturamos la esencia de cada persona, creando retratos que reflejan su verdadera personalidad. </li>
  <li>Fotografía de Eventos: Desde cumpleaños hasta eventos corporativos, estamos allí para documentar cada detalle.</li>
  <li>Fotografía de Naturaleza: Nos apasiona capturar la belleza del mundo natural, desde paisajes impresionantes hasta la vida silvestre.</li>

    
    <p>Nuestra Filosofía: Creemos que cada fotografía debe ser una ventana a un momento eterno. Nos esforzamos por ofrecer un servicio personalizado y profesional, utilizando la última tecnología y técnicas innovadoras para garantizar que cada imagen sea perfecta. </p>
    
<p>Contáctanos: Estamos ubicados en el corazón de Córdoba, y estamos ansiosos por ayudarte a capturar tus momentos más preciados. ¡Contáctanos hoy y descubre cómo podemos hacer que tus recuerdos duren para siempre!</p>

      


      </section>

      <Card />
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
