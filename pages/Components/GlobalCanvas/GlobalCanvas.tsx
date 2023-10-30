import React from "react";
import { ReactNode } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Suspense } from "react";
interface GlobalCanvasProps {
  children: ReactNode;
  className?: string;
}
const GlobalCanvas: React.FC<GlobalCanvasProps> = ({ children, className }) => {
  return (
    <Canvas className={className}>
      <Suspense fallback={null}>
        <Environment preset="city" />
        {children}
      </Suspense>
    </Canvas>
  );
};

export default GlobalCanvas;
