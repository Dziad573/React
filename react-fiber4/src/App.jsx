/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect, useCallback } from 'react';
import { OrbitControls, Text } from '@react-three/drei';
import { Card } from './Card';
import Spline from '@splinetool/react-spline';
import ErrorBoundary from './ErrorBoundary';
//import { gsap } from 'gsap';
//import img from './assets/Card_Black.png';
import './App.css';

// function App() {
// const Card = ({ initialPosition, initialRotation, glowColor, children }) => {
//   const ref = useRef();

//   function handleClickCard() {
//     gsap.to(ref.current.rotation, {
//       duration: 1,
//       x: -0.6,
//       y: 0.4,
//       z: 0.3,
//       onComplete: () => {
//         gsap.to(ref.current.rotation, {
//           duration: 2,
//           x: initialRotation[0],
//           y: initialRotation[1],
//           z: initialRotation[2]
//         });
//       }
//     });

//     gsap.to(ref.current.position, {
//       duration: 2,
//       x: 0,
//       y: 0.5,
//       z: 5.5,
//       onComplete: () => {
//         gsap.to(ref.current.position, {
//           duration: 2,
//           x: initialPosition[0],
//           y: initialPosition[1],
//           z: initialPosition[2]
//         });
//       }
//     });
//   }

//   return (
//     <group scale={0.5}>
//       <mesh ref={ref} onClick={handleClickCard}>
//         <boxGeometry args={[3, 4, 0.1]} />
//         <meshStandardMaterial metalness={1} roughness={0.5} transparent opacity={1} color={glowColor} />
//       </mesh>
//       <Text
//         position={[0, 1, 0.2]}
//         rotation={[0, 0, 0]}
//         fontSize={0.5}
//         color="white"
//         maxWidth={100}
//         lineHeight={1}
//         letterSpacing={0.02}
//         textAlign="center"
//         font="https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxP.ttf"
//       >
//         {children}
//       </Text>
//     </group>
//   );
// };
function App() {

  const [fires, setFires] = useState([]);

  const handleRemove = (id) => {
    setFires((oldFires) => oldFires.filter((fire) => fire.id !== id));
  };

  return (
  <>
    <div className='cosik'>
    <Canvas className='' style={{ width: '100%'}}>
      <directionalLight position={[1, 3, 1.5]} intensity={4} />
      <ambientLight intensity={0.7} />
      <Card 
        initialRotation={[0, 0, 0]}
        initialPosition={[-4, 3, 0]}
        glowColor={'red'}
        fires={fires}
        setFires={setFires}
        handleRemove={handleRemove}
      >
        Hello World!
      </Card>
      <Card 
        initialRotation={[0, 0, 0]}
        initialPosition={[4, 3, 0]}
        glowColor={'green'}
        fires={fires}
        setFires={setFires}
        handleRemove={handleRemove}
      >
        Hello World!
      </Card>
      <Card 
        initialRotation={[0, 0, 0]}
        initialPosition={[0, 3, 0]}
        display={'flex'}
        flexWrap={'wrap'}
        flexdirection={'row'}
        glowColor={'purple'}
        fires={fires}
        setFires={setFires}
        handleRemove={handleRemove}
      >
          Hello World!
          Hello World!
          Hello World!
      </Card>
      {/*<OrbitControls />*/}
    </Canvas>
    </div>

    <div className='baba'>
      <ErrorBoundary>
        <div>
          <Spline scene="https://my.spline.design/untitled2-da1e652c1577f8ec0dd4cdd11ec798c4/" />
        </div>
      </ErrorBoundary>
    </div>
  </>
  );
}

export default App;
