'use client';

import { useEffect, useRef, useMemo } from 'react';
import { throttle } from 'lodash';
import * as THREE from 'three';

export default function BgGraphics() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const geometry = useMemo(() => new THREE.PlaneGeometry(30, 30, 32, 32), []);
  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0xd3d3d3, wireframe: true }), []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      plane.rotation.x += 0.002;
      plane.rotation.y += 0.002;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = throttle(() => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }, 200);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [geometry, material]);

  return <canvas ref={canvasRef} className='fixed top-0 left-0 w-full h-full -z-10'></canvas>;
}
