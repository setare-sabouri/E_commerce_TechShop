import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Heloo World ! </h1>
      <Link href="/about">about us</Link>
    </main>
  );
}
