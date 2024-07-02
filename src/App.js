import './App.scss';

import projets from './datas/projets.json';
import Competences from './components/Competences';

import Header from './components/Header';
import Footer from './components/Footer';
import Form from './components/Form';
import Projet from './components/Projet';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import ModalProjet from './components/ModalProjet';

import arrowDown from './assets/arrowDown.webp';
import paint from './assets/background/paint.webp';
// import desk from './assets/background/desk.webp';

function App() {

  return (
    <div className="App">
      
      <main className='main'>
        <section id="accueil">
          <div className="accueil_bg">
            <h1>PICARD KEVIN</h1>
            <p>Développeur Front-end</p>
          </div>
          <img className='accueil_arrow' src={arrowDown} alt='fleche vers le bas' height='50px' width='50px'/>
        </section>

        {/* <a className='btn_toTop' href="#accueil"><img src={arrowUp} alt="bouton vers haut de page"/></a> */}
        <Header/>
        <section id="presentation">
          <h2>Présentation</h2>
          <p className='presentation_p'>Développeur web passionné par le front-end et le web design, sensibilisé à l'expérience utilisateur et à l'accessibilité, je développe des projets centrés autour de l'humain.</p>
          <p className='presentation_p'>Si vous cherchez un développeur pour réaliser un site dynamique et responsive, n'hésitez pas à me <a className='presentation_a' href='#contact'>contacter</a></p>

        </section>

        <section id='projets_intro'>
          {/* <img src={desk} alt='bureau'/> */}
          <h2 className='projets__h2'>Mes Projets</h2>
        </section>
        
        {/* parcourrir les projets et afficher un "slide" par projet */}
        <section id="projets">
          <div className="projets__container">
            <Tabs fill>
            {
              projets.map((projet)=>
                <Tab eventKey={projet.short} title={projet.short}>
                  <Projet {...projet} key={projet.title} />
                </Tab>
              )
            }
            </Tabs>
          </div>
        </section> 
        <section id="competences">
          <img className='competences__img' src={paint} alt="pots de peinture"/>
          <div className='competences__right'>
            <h2 className='competences__h2'>Competences</h2>
            <Competences/>
          </div>
        </section>  
        <section id="contact">
        <h2>Contact</h2>
        <p>Vous avez un projet ? Discutons-en !</p>
          <Form/>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
