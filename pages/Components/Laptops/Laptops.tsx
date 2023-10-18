import React from 'react'
import Layout from "../../../Layout/Layout";
import styles from './Laptops.module.scss'
import { Canvas } from "@react-three/fiber";
const Laptops = () => {

    return (
        <Layout title="laptops Page">
            <div className={styles.laptops}>
            <p className={`${styles.laptops__title} heading1`} >Laptops page</p>
            </div>

            <Canvas>
                <mesh>
                    <torusKnotGeometry />
                    <meshNormalMaterial />
                </mesh>
            </Canvas>
        </Layout>
    );
}

export default Laptops