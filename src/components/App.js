//importing libraries
import React from 'react'
import '../App.css';
import ReactPlayer from 'react-player'
//importing resources (temporal)
import demoReel from '../resources/DemoReel-CN-Nick-comprimido.m4v'
import DW from '../resources/dw-portrait-1080x1920_xduaIWiB.mp4'
import TQM from '../resources/TQM-Portafolio.mp4'
import MO from '../resources/MarchingOrchestra_FINAL-comprimido.m4v'
import FR from '../resources/FoodRace_ConCreditos-comprimido.m4v'
import TecnoshopDemo from '../resources/Tecnoshop-Demo-F.mp4'
import rig from '../resources/Video Cha Jake Rig Fernandoascencio Pub 8Nov2021.m4v'
import UJE from '../resources/Uje-1.m4v'
import profileImg from '../resources/Profile Img.jpg'
import NSB1 from '../resources/NSB1.PNG'
import NSB2 from '../resources/NSB2.PNG'
import NSB3 from '../resources/NSB3.PNG'
import NSB4 from '../resources/NSB4.PNG'
import CT1 from '../resources/CT1.PNG'
import CT2 from '../resources/CT2.PNG'
import CT3 from '../resources/CT3.PNG'
import CT4 from '../resources/CT4.PNG'
import CT5 from '../resources/CT5.PNG'
import CT6 from '../resources/CT6.PNG'
import CT7 from '../resources/CT7.PNG'
import CT8 from '../resources/CT8.PNG'
import CV from '../resources/Fernando_Hazel_Ascencio_Baumgarten_CV.pdf'


function App() {
  return (
    <div className="App">
      <section className='info'>

       <img src={profileImg} className='profileImg'/>
        
        <h1>Fernando Ascencio | videogame programmer and web developer</h1>

        <article className='info-text'>
          <h2>
          I'm a highly motivated programmer and I have been producer in some projects, I love creating interactive experiences
          in which people can have a good time. I'm an analytical thinker with the ability to apply creative problem solving skills.
          I have worked with agile methodologies such as scrum and I am familiar with the MVC model.
          I have created small video games for PC and mobile using 3D and 2D softwares like Unity, Maya, substance, potoshop and Ilustrator.
          I'm also a full stack web developer with experience in Nodejs, react and relational databases.
          I would like in the future to be able to put that knowledge together to make my games more interesting with cloud functions.
          </h2>
      </article>

        <div className='button-container'>
        <a href={CV}>
          <h2 className='link-button'>Download CV</h2>
        </a>
        </div>

        <h1 className='section-title'>VIDEOGAMES</h1>

        <h1 className='project-title'>Dino World</h1>
        <div className='videoContainer'>
          <div className="video">
          <ReactPlayer url={DW}
          width='70%'
          height='50%'
          controls
          />
          </div>
        </div>
        

        <article className='info-text'>
          <h2>
            I worked as a programmer in this caveman game made with Unity in which I implemented features like the inventory system, the UI behavior, the caveman mounting dinos feature and the AI of the game.
            In this game you are a caveman surviving in the dinosaur
            era who must obtain a variety of materials through exploration, mining, and hunting. 
          </h2>

        </article>

        <div className='button-container'>
          <a href='https://play.google.com/store/apps/details?id=com.OneSimpleGame.DinoWorld'>
            <h2 className='link-button'>Play Game</h2>
          </a>
        </div>
      </section>

      {/* <h1 className='section-title'>VIDEOGAMES</h1> */}
      <section>

        <h1 className='project-title'>Not so Bee-zy</h1>

        <div className='image-grid-NSB'>
          <div style={{backgroundColor: 'red'}}><img src={NSB1}/></div>
          <div style={{backgroundColor: 'blue'}}><img src={NSB2}/></div>
          <div style={{backgroundColor: 'yellow'}}><img src={NSB3}/></div>
          <div style={{backgroundColor: 'green'}}><img src={NSB4}/></div>
        </div>
        <article className='info-text'>
          <h2>
            I was the producer and programmer of a project made with Unity
            about a lazy bee that instead of working decides to
            steal pollen from her sisters, this stealth game is designed for a casual
            audience and is full of irreverent humor.
            I worked on the movement of the character, the UI behavior and the collect feature as well as the save system.
          </h2>
        </article>
        <div className='button-container'>
          <a href='https://notsobee-zy.itch.io/not-so-bee-zy'>
            <h2 className='link-button'>Play Game</h2>
          </a>
        </div>
        
      </section>
      

        <h1 className='project-title'>Critter Thieves</h1>

        <div className='image-grid-CT'>
          <div style={{backgroundColor: 'red'}}><img src={CT1}/></div>
          <div style={{backgroundColor: 'blue'}}><img src={CT2}/></div>
          <div style={{backgroundColor: 'yellow'}}><img src={CT3}/></div>
          <div style={{backgroundColor: 'green'}}><img src={CT4}/></div>
          <div style={{backgroundColor: 'red'}}><img src={CT5}/></div>
          <div style={{backgroundColor: 'blue'}}><img src={CT6}/></div>
          <div style={{backgroundColor: 'yellow'}}><img src={CT7}/></div>
          <div style={{backgroundColor: 'green'}}><img src={CT8}/></div>
        </div>
        <article className='info-text'>
          <h2>
          I was the producer and programmer of a project
          developed with Unity on a mouse that ventures into a mansion full
          of traps and enemies to find food for his family, one of its most
          interesting mechanics is that the more food you collect your weight
          increases so your ability to jump, overcome obstacles and escape is
          reduced. As a player you will be forced to think strategically
          in this fun puzzle platform game.
          I worked on the character movement, the UI behavior, implemented the animations, worked on the inventory system as well as the save system.
          </h2>
        </article>
        <div className='button-container'>
          <a href='https://drive.google.com/uc?export=download&id=1a44T6XhZ-70WB6ZfaqEWjfhwZ0V1OrQ_'>
            <h2 className='link-button'>Play Game</h2>
          </a>
      </div>
      
      <h1 className='section-title'>WEB DEVELOPMENT</h1>
        <h1 className='project-title'>Tecnoshop</h1>

        <div className="video">
        <ReactPlayer url={TecnoshopDemo}
        width='70%'
        height='50%'
        loop
        controls
        />
        </div>

        <article className='info-text'>
          <h2>
          Tecnoshop is an e-commerce project of a full stack web development 
          certification in which the user can create an account, 
          buy and sell products. This project was made using Nodejs, 
          HTML / CSS / Javascript, Nodejs, and MySql workbench.
        </h2>
        <br></br>
      </article>
      
      <h1 className='project-title'>TQM</h1>

        <div className="video">
        <ReactPlayer url={TQM}
        width='70%'
        height='50%'
        loop
        controls
        />
        </div>

        <article className='info-text'>
          <h2>
          TQM is a page that I developed as a freelance with Node Js for a chemical solutions company
          such as water treatment, heaters and boilers.
          </h2>
        </article>
        

        {/* comment here 
        <h1 className='project-title'>Character rig</h1>
        <section>
        <div className="video">
        <ReactPlayer url={rig}
        width='70%'
        height='50%'
        loop
        controls
        />
        </div>

        <article className='info-text'>
          <h2>
          This is a demo of a fully rigged viped, 
          both the legs and arms are animatable in both FK and IK, 
          as well as attributes were added to the feet to make it more 
          comfortable for the animator to animate a walk.
          </h2>
        </article>*/}
        
        {/* <h1 className='project-title'>Un jour de éte</h1>

        <div className="video">
        <ReactPlayer url={UJE}
        width='70%'
        height='50%'
        loop
        controls
        />
      </div>

      <article className='info-text'>
          <h2>
          For a school project on art history I decided to make this little
          Unity game based on the 19th century French impressionist movement,
            this movement was characterized by portraying people doing
             everyday things like walking through meadows and relaxing,
              that is why all the design The game revolves around this 
              premise: the settings are some of the most famous paintings of
               the movement, the visual style was created with the same 
               technique of short brush strokes, the main character is the
                girl with an umbrella by Claude Monet (who was an exponent
                 of the movement) even music was part of the movement so I
                  decided to include a piece from that time; And the most 
                  interesting thing for me is that the mechanics revolve
                   around the premise, that is, the player is not going 
                   to do anything more than take a quiet walk among those
                    meadows.
          </h2>
        </article>
      </section>
      
      </section> */}

      
      {/* <h1 className='section-title'>PRODUCTION</h1>
      <section>
        <h1 className='project-title'>Marching orchestra - Nick Noggin</h1>

        <div className="video">
        <ReactPlayer url={MO}
        width='70%'
        height='50%'
        loop
        controls
        />
        </div>

        <article className='info-text'>
          <h2>
          Marching Orchestra is a little spot for preschool children for 
          Nick Jr's online platform called Noggin, I was the producer of this project 
          and during that time I had to coordinate a team of 20 people. The spot is a bout a little girl that 
          goes singing and dancing through the street of a mexican town and spreads her joy to other kids.
          </h2>
        </article>

        <h1 className='project-title'>Food Race - Cartoon Network</h1>

        <div className="video">
        <ReactPlayer url={FR}
        width='70%'
        height='50%'
        loop
        controls
        />
        </div>

        <article className='info-text'>
          <h2>
          Food Race is a little spot for children created 
          to be screened on television on the cartoon network channel, 
          I was the producer of this project 
          and during that time I had to coordinate a team of 20 people. The spot is about a little girl that
          is bored in a supermarket waiting for her mom, for fun, she imagines a frenzy race on the conveyor belt 
          with the groceries.
          </h2>
        </article>
      </section> */}


      <h1 className='project-title'>
        This web site was created by me too!
      </h1>

      
      <article style={{backgroundColor: 'rgb(43, 41, 41)'}} className='info-text'>
          <h2>
            email: fernandohazel1@gmail.com
          </h2>
          <h2>
            gitHub: https://github.com/FernandoHazel
          </h2>
          <h2>
            cel: +52 3334953311
          </h2>
          <h2>
            Linkedin: www.linkedin.com/in/fernandohab
          </h2>
        </article>
    </div>
  );
}

export default App;
