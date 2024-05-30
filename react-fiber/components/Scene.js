'use client';

import { Canvas } from 'react-three-fiber';
import { Suspense } from 'react';
import Model from './Model';

export default function Scene({ children }) {
  return (
    <Canvas>
      <directionalLight position={[-5, -5, 5]} intensity={4} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}