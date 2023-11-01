import React from "react";
import Layout from "@layout/Layout";
import styles from "./Laptops.module.scss";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import GlobalCanvas from "@components/GlobalCanvas/GlobalCanvas";

const Laptops = () => {
  // useFrame(() => {
  //   console.log("frame");
  // });

  return (
    <Layout title="laptops Page">
      <div className={styles.laptops}>
        <p className={`${styles.laptops__title} heading1`}>Laptops page</p>
      </div>

      <div className="canvas-wrapper">
        <GlobalCanvas className={`${styles.laptops__canvas} `}>
          <mesh position={[-1, 1, 0]}>
            <sphereGeometry />
            <meshBasicMaterial color="orange" />
          </mesh>
          <mesh position={[1, 0.5, 0]}>
            <boxGeometry />
            <meshBasicMaterial color="lightblue" />
          </mesh>
          <mesh rotation-x={-Math.PI * 0.5} scale={5}>
            <planeGeometry />
            <meshBasicMaterial color="green" />
          </mesh>
          <OrbitControls makeDefault />
        </GlobalCanvas>
      </div>
    </Layout>
  );
};

export default Laptops;
