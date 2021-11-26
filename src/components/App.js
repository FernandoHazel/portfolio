//importing libraries
import React from 'react'
import '../App.css';
import ReactPlayer from 'react-player'
//importing resources (temporal)
import demoReel from '../resources/Demo_Reel.mp4'
import TecnoshopDemo from '../resources/Tecnoshop-Demo-F.mp4'
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


function App() {
  return (
    <div className="App">
      <section className='info'>

        <img src={profileImg} className='profileImg'/>

        <h1>Fernando Ascencio Baumgarten</h1>

        <article className='info-text'>
          <h2>
          I like to create interactive experiences with which
            people can have fun and have a good time.
          I have created small videogames as a hobby
          and as school projects and I'm a full stack Jr web developer.
            I have been producer of two animated projects for networks of international
          stature such as Cartoon Network and Nick Noggin and I want to keep learning and keep creating.
          </h2>
        </article>

      </section>

      <div className="video">
        <ReactPlayer url={demoReel}
        width='70%'
        height='50%'
        loop
        controls
        />
      </div>

      <h1 className='section-title'>VIDEOGAMES</h1>
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
          During a school project I was the producer and programmer of a project
           developed with Unity about a lazy bee that instead of working decides to
            steal polem from her sisters, this stealth game is designed for a casual
             audience and full of irreverent humor.
          </h2>
        </article>
        <div className='button-container'>
          <a href='https://notsobee-zy.wixsite.com/notsobee-zy'>
            <h2 className='link-button-NSB'>official web site</h2>
          </a>
        </div>
        
      </section>
      <section>

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
          During a school project I was a producer and programmer of a project
           developed with Unity on a mouse that ventures into a mansion full
            of traps and enemies to find food for his family, one of its most
             interesting mechanics is that the more food you collect your weight
              It increases so your ability to jump, overcome obstacles and escape is
               reduced, so as a player you will be forced to think strategically so as
                not to die in this fun puzzle platform game.
          </h2>
        </article>
        <div className='button-container'>
          <a href='https://a01154951.wixsite.com/critterthieves'>
            <h2 className='link-button-CT'>official web site</h2>
          </a>
        </div>
        
        <h1 className='project-title'>Un jour de éte</h1>

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
      <h1 className='section-title'>Web Development</h1>
      <section>
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
          Tecnoshop is a technology ecommerce carried out as
           an integrating project of a full stack web development 
           certification in which the user can create an account and 
           buy and sell products. This project was done using Nodejs, 
           HTML / CSS / Javascript, Express, and MySql workbench.
          </h2>
        </article>
      </section>
      <article style={{backgroundColor: '#04a1cc'}} className='info-text'>
          <h2>
            email: fernandohazel1@gmail.com
          </h2>
          <h2>
            cel: +52 3334953311
          </h2>
        </article>
    </div>
  );
}

export default App;
