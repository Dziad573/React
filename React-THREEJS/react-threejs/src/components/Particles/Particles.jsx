// import { useCallback, useState } from "react";
// import Particles from "@tsparticles/react";
// import { loadSlim } from "@tsparticles/slim";
// //import { loadFull } from "tsparticles";
// import particlesConfig from '../../utils/particlesConfig';
import React, { useEffect } from 'react';
import 'particles.js';  // Import particles.js
import styles from './Particles.module.css';

const Particles = () => {
    useEffect(() => {
    window.particlesJS('particles-js', {
        particles: {
        number: {
            value: 60,
            density: {
            enable: true,
            value_area: 1025
            }
        },
        color: {
            value: '#9c59fc'
        },
        shape: {
            type: 'circle',
            stroke: {
            width: 0,
            color: '#000000'
            },
            polygon: {
            nb_sides: 5
            },
            image: {
            src: 'img/github.svg',
            width: 100,
            height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
            }
        },
        size: {
            value: 4,
            random: true,
            anim: {
            enable: false,
            speed: 21,
            size_min: 5,
            sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#8484ff',
            opacity: 0.4,
            width: 2.6
        },
        move: {
            enable: true,
            speed: 3,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'bounce',
            bounce: false,
            attract: {
            enable: false,
            rotateX: 1341.5509907748635,
            rotateY: 1200
            }
        }
        },
        interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
            enable: true,
            mode: 'grab'
            },
            onclick: {
            enable: false,
            mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
            distance: 155,
            line_linked: {
                opacity: 0.8
            }
            },
            repulse: {
            distance: 200,
            duration: 0.4
            },
            push: {
            particles_nb: 4
            }
        }
        },
        retina_detect: true
    });
    }, []);

    return (
        <>
            <div className={styles.particlesContainer}>
                <div id="particles-js" className={styles.particles}></div>
            </div>
        </>
    );
};

export default Particles;



// const ParticlesComponent = () => {
//     const [init, setInit] = useState(false);

//     const particlesInit = useCallback(async engine => {
//         //await loadAll(engine);
//         //await loadFull(engine);
//         await loadSlim(engine);
//         //await loadBasic(engine);
//         setInit(true);
//     }, []);

//     const particlesLoaded = useCallback(container => {
//         console.log(container);
//     }, []);

//     // const options = useMemo(() => particlesConfig.particles, []);

//     if (init) {
//         return (
//             <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={particlesConfig.particles}
//     />
//         );
//     }

//     return <></>;
// }


// export default ParticlesComponent;