/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect, useCallback } from 'react';
import { OrbitControls, Text } from '@react-three/drei';
import texture from './assets/Card_Black.png';
import './App.css';

export const Card = ({ fires, setFires, handleRemove, initialPosition, initialRotation, glowColor, children }) => {
// const Fire = ({ id, position, size, speed, glowColor, onRemove }) => {
//   const ref = useRef();
//   const [opacity, setOpacity] = useState(1);
//   const randomRange = (min, max) => Math.random() * (max - min) + min;

//   useFrame(() => {
//     if (ref.current.position.x >= 0.2 || ref.current.position.y <= -0.2) {
//       ref.current.position.x += speed;
//       ref.current.position.y += randomRange(-0.01, 0.01);
//       ref.current.position.z += 0.01;
//       setOpacity((prev) => {
//         const newOpacity = prev - 0.04;
//         if (newOpacity <= 0) {
//           onRemove(id);
//         }
//         return newOpacity;
//       });
//     }
//   });

//   return (
//     <mesh ref={ref} position={position}>
//       <sphereGeometry args={size} />
//       <meshBasicMaterial color={glowColor} transparent opacity={opacity} />
//     </mesh>
//   );
// };


  const keys = useRef({});

  const addFire = useCallback(() => {
    const id = Math.random();
    setFires((oldFires) => [
      ...oldFires,
      {
        id,
        position: [0.22, Math.random() * (0.30 - 0.20) - 0.1, 0.1],
        size: [0.007, 32, 32],
        speed: 0.1,
        glowColor: 'red',
      },
    ]);

    setTimeout(() => {
      setFires((oldFires) => oldFires.filter((fire) => fire.id !== id));
    }, 6000);
  }, [setFires]);

  useEffect(() => {
    const interval = setInterval(() => {
      addFire();
    }, Math.random() * 100);

    return () => clearInterval(interval);
  }, [addFire]);

  useEffect(() => {
    const downHandler = ({ key }) => {
      keys.current[key] = true;
    };

    const upHandler = ({ key }) => {
      keys.current[key] = false;
    };

    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  const ref = useRef();
  const [targetPosition, setTargetPosition] = useState(initialPosition);
  const [targetRotation, setTargetRotation] = useState(initialRotation);

  const rotationSpeed = 0.05;
  const positionSpeed = 0.05;

  function handleClickCard() {
    setTargetRotation([-0.6, 0.4, 0.3]);
    setTargetPosition([0, .5, 5.5]);

    setTimeout(() => {
      setTargetRotation(initialRotation);
      setTargetPosition(initialPosition);
    }, 5000);
  }
  

  useFrame(() => {
    if (ref.current) {
          ref.current.rotation.x += (targetRotation[0] - ref.current.rotation.x) * rotationSpeed;
          ref.current.rotation.y += (targetRotation[1] - ref.current.rotation.y) * rotationSpeed;
          ref.current.rotation.z += (targetRotation[2] - ref.current.rotation.z) * rotationSpeed;
    
          ref.current.position.x += (targetPosition[0] - ref.current.position.x) * positionSpeed;
          ref.current.position.y += (targetPosition[1] - ref.current.position.y) * positionSpeed;
          ref.current.position.z += (targetPosition[2] - ref.current.position.z) * positionSpeed;    
        }
  })


  return (
      <group scale={0.5}>
        <mesh 
          ref={ref}
          onClick={() => handleClickCard()}>
          
            <boxGeometry args={[3,4,.4]}></boxGeometry>
            <meshStandardMaterial metalness={1} roughness={.5} transparent opacity={.9} color={glowColor} />
        
        <Text
          position={[0, 1, .4]}
          rotation={[0, 0, 0]}
          fontSize={.4}
          color="white"
          maxWidth={3}
          lineHeight={1}
          letterSpacing={0.02}
          display='flex'
          flexwrap='wrap'
          flexdirection='row'
          textAlign="center"
          font="https://fonts.gstatic.com/s/robotoslab/v15/BngMUXZYTXPIvIBgJJSb6ufN5qA.ttf"
        >
          {children}
        </Text>
        <Text
          position={[.03, 1, .39]}
          rotation={[0, 0, 0]}
          fontSize={.4}
          color="rgba(228, 41, 41, 0.5)"
          maxWidth={3}
          lineHeight={1}
          letterSpacing={0.02}
          textAlign="center"
          font="https://fonts.gstatic.com/s/robotoslab/v15/BngMUXZYTXPIvIBgJJSb6ufN5qA.ttf"
        >{children}</Text>
        </mesh>
        
        {/* <group position={[-0.3, 0, 0.3]}>
          {fires.map((fire) => (
            <Fire
              key={fire.id}
              id={fire.id}
              position={fire.position}
              size={fire.size}
              speed={fire.speed}
              glowColor={fire.glowColor}
              onRemove={handleRemove}
            />
          ))}
        </group>
        <group position={[-0.26, 0, 0.2]}>
          {fires.map((fire) => (
            <Fire
              key={fire.id}
              id={fire.id}
              position={fire.position}
              size={fire.size}
              speed={fire.speed}
              glowColor={fire.glowColor}
              onRemove={handleRemove}
            />
          ))}
        </group> */}
      </group>
  );
}



