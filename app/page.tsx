import styles from "./page.module.css";
import Link from "next/link";
import Slider from "@/components/Slider";
export default function Home() {
  return (
    <main className={styles.main}>
      <Slider></Slider>
      <h1>Heloo World ! </h1>
      <Link href="./users">All users</Link>

      {/* <Link href="/about">about us</Link> */}
    </main>
  );
}
