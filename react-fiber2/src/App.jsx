/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import './App.css';

const Sun = ({ position, size, color }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.x += delta / 2;
    ref.current.rotation.y += delta / 2;
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={size} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

const Earth = ({ initialPosition, center, radius, size, speed, directionX, directionY, glowColor }) => {
  const ref = useRef();

  useFrame((state) => {
    const elapsed = state.clock.getElapsedTime() * speed;
    ref.current.position.x = initialPosition[0] + center[0] + radius * Math.sin(elapsed * directionX);
    ref.current.position.y = initialPosition[1] + center[1] + radius * Math.sin(elapsed * directionY);
    ref.current.position.z = initialPosition[2] + center[2] + radius * Math.cos(elapsed);
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.01;

    
  });


  return (
    <>
      <mesh ref={ref}>
        <sphereGeometry args={size} />
        <meshBasicMaterial color={glowColor} />
        <mesh scale={2.2}>
          <sphereGeometry args={size} />
          <meshBasicMaterial color={glowColor} transparent opacity={0.2} />
        </mesh>
      </mesh>
    </>
  );
}

function App() {
  return (
    <Canvas>
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <ambientLight intensity={0.5} />
      <group position={[0, 0, 0]}>
        <Sun position={[0, 0, 0]} size={[0.3, 32, 32]} color={"rgb(0, 87, 201)"} />
        <Earth initialPosition={[0.2, 0, 0]} center={[0, 0, 0]} radius={0.6} size={[0.05, 32, 32]} speed={0.8} directionX={-1} directionY={-1} glowColor={"red"} />
        <Earth initialPosition={[-0.2, 0, 0]} center={[0, 0, 0]} radius={0.6} size={[0.05, 32, 32]} speed={0.8} directionX={1} directionY={-1} glowColor={"red"} />
        <Earth initialPosition={[0.2, 0, 0]} center={[0, 0, 0]} radius={0.6} size={[0.05, 32, 32]} speed={0.8} directionX={-1} directionY={1} glowColor={"blue"} />
        <Earth initialPosition={[-0.2, 0, 0]} center={[0, 0, 0]} radius={0.6} size={[0.05, 32, 32]} speed={0.8} directionX={1} directionY={1} glowColor={"blue"} />
        <Earth initialPosition={[0.4, 0.1, 0]} center={[0, 0, 0]} radius={0.5} size={[0.05, 32, 32]} speed={3} directionX={-1} directionY={-1} glowColor={"blue"} />
        <Earth initialPosition={[-0.4, 0.1, 0]} center={[0, 0, 0]} radius={0.5} size={[0.05, 32, 32]} speed={3} directionX={1} directionY={-1} glowColor={"blue"} />
        <Earth initialPosition={[0.4, 0.1, 0]} center={[0, 0, 0]} radius={0.5} size={[0.05, 32, 32]} speed={3} directionX={-1} directionY={1} glowColor={"red"} />
        <Earth initialPosition={[-0.4, 0.1, 0]} center={[0, 0, 0]} radius={0.5} size={[0.05, 32, 32]} speed={3} directionX={1} directionY={1} glowColor={"red"} />
        <Earth initialPosition={[0.1, 0, 0]} center={[0, 0, 0]} radius={0.4} size={[0.05, 32, 32]} speed={1.9} directionX={-1} directionY={-1} glowColor={"red"} />
        <Earth initialPosition={[-0.1, 0, 0]} center={[0, 0, 0]} radius={0.4} size={[0.05, 32, 32]} speed={1.9} directionX={1} directionY={-1} glowColor={"red"} />
        <Earth initialPosition={[0.1, 0, 0]} center={[0, 0, 0]} radius={0.4} size={[0.05, 32, 32]} speed={1.9} directionX={-1} directionY={1} glowColor={"blue"} />
        <Earth initialPosition={[-0.1, 0, 0]} center={[0, 0, 0]} radius={0.4} size={[0.05, 32, 32]} speed={1.9} directionX={1} directionY={1} glowColor={"blue"} />
      </group>
    </Canvas>
  );
}

export default App;
