import Link from 'next/link';
import Slider from '@/components/Slider';

export default function Home() {
  return (
    <main>
      <Slider></Slider>
      <Link href="./users">All users</Link>
    </main>
  );
}

{
  /* <Link href="/about">about us</Link> */
}
