/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useState, useEffect, useCallback } from 'react';
import { OrbitControls } from '@react-three/drei';
import './App.css';

const Cylinder = ({ position, rotation, size, color }) => {
  return (
    <mesh position={position} rotation={rotation} scale={0.02}>
      <cylinderGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.7} roughness={0.3} />
    </mesh>
  );
};

const Fire = ({ id, position, size, speed, glowColor, onRemove }) => {
  const ref = useRef();
  const [opacity, setOpacity] = useState(1);
  const randomRange = (min, max) => Math.random() * (max - min) + min;

  useFrame(() => {
    if (ref.current.position.x >= 0.2 || ref.current.position.y <= -0.2) {
      ref.current.position.x += speed;
      ref.current.position.y += randomRange(-0.01, 0.01);
      ref.current.position.z += 0.01;
      setOpacity((prev) => {
        const newOpacity = prev - 0.04;
        if (newOpacity <= 0) {
          onRemove(id);
        }
        return newOpacity;
      });
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={size} />
      <meshBasicMaterial color={glowColor} transparent opacity={opacity} />
    </mesh>
  );
};

const Wheel = ({ position, size }) => {
  return (
    <mesh position={position} rotation={[0, -0.3, 0]}>
      <torusGeometry args={size} />
      <meshBasicMaterial color="grey" />
    </mesh>
  );
};

const Cab = ({ position, size }) => {
  return (
    <mesh position={position} rotation={[0, -0.3, 0]}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
};

const Car = ({ fires, setFires, handleRemove }) => {
  const [posCar, setPosCar] = useState([1, 0, 1]);
  const [rotCar, setRotCar] = useState([0, -1.5, 0]);
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

  useFrame(() => {
    if (keys.current['A'] || keys.current['a'] || keys.current['ArrowLeft']) {
      setPosCar((oldPosCar) => [
        oldPosCar[0] - 0.01,
        oldPosCar[1],
        oldPosCar[2],
      ]);
      setRotCar((oldRotCar) => [
        oldRotCar[0],
        oldRotCar[1] + 0.01,
        oldRotCar[2]
      ])
    }
    if (keys.current['W'] || keys.current['w'] || keys.current['ArrowUp']) {
      setPosCar((oldPosCar) => [
        oldPosCar[0],
        oldPosCar[1],
        oldPosCar[2] - 0.01,
      ]);
    }
    if (keys.current['D'] || keys.current['d'] || keys.current['ArrowRight']) {
      setPosCar((oldPosCar) => [
        oldPosCar[0] + 0.01,
        oldPosCar[1],
        oldPosCar[2],
      ]);
      setRotCar((oldRotCar) => [
        oldRotCar[0],
        oldRotCar[1] - 0.01,
        oldRotCar[2]
      ])
    }
    if (keys.current['S'] || keys.current['s'] || keys.current['ArrowDown']) {
      setPosCar((oldPosCar) => [
        oldPosCar[0],
        oldPosCar[1],
        oldPosCar[2] + 0.01,
      ]);
    }
  });

  return (
    <group position={posCar} scale={0.5} rotation={rotCar}>
      <group position={[-0.3, 0, 0.3]}>
        <Cylinder position={[0, 0, 0]} rotation={[1.8, 0, 1.9]} size={[4, 4, 32]} color={0x888888} />
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
        <Cylinder position={[0, 0, 0]} rotation={[1.8, 0, 1.9]} size={[4, 4, 32]} color={0x888888} />
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
      <Wheel position={[-1.5, -0.1, 0.8]} size={[0.3, 0.1, 32]} />
      <Wheel position={[-3.5, -0.1, 0.2]} size={[0.3, 0.1, 32]} />
      <Wheel position={[-0.5, 0, -2.1]} size={[0.3, 0.1, 32]} />
      <Wheel position={[-2.6, 0, -2.8]} size={[0.3, 0.1, 32]} />
      <Cab position={[-2, 0.3, -1]} size={[4, 1, 3]} />
    </group>
  );
};

function App() {
  const [fires, setFires] = useState([]);

  const handleRemove = (id) => {
    setFires((oldFires) => oldFires.filter((fire) => fire.id !== id));
  };

  return (
    <Canvas style={{ width: '100%', height: '100%' }}>
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <ambientLight intensity={0.5} />
      <Car fires={fires} setFires={setFires} handleRemove={handleRemove} />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
