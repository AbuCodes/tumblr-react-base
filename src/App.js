import React, { useState } from 'react';
import Particles from 'react-tsparticles';
import './App.css';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('#000000');
  return (
    <div className='App'>
      <button style={{ position: 'fixed', top: '10px', left: '10px' }} onClick={() => setBackgroundColor('#ffffff')}>
        test
      </button>
      <Particles
        id='tsparticles'
        //init={this.particlesInit}
        //loaded={this.particlesLoaded}
        height='100vh'
        fullscreen={true}
        options={{
          background: {
            color: {
              //value: '#0d47a1',
              value: backgroundColor,
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              attract: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              //value: '#ffffff', normal
              value: '#f00',
              animation: {
                h: {
                  count: 0,
                  enable: true,
                  offset: 0,
                  speed: 50,
                  sync: false,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
              },
            },
            links: {
              //color: '#ffffff',
              color: 'random',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
