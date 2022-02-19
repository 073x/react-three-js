import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';


function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.02))  
  useFrame((state, delta) => (ref.current.rotation.y += 0.02))
  useFrame((state, delta) =>  hover(Boolean(Math.floor(Math.random() * (1 - 0 + 1)) + 0)));
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 2 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'orange' : 'grey'} />
    </mesh>
  )
}



function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <pointLight position={[50, 50, 50]} />
        <Box position={[-0.8, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}

export default App;
