import Head from 'next/head';
import Hero from './bahan/Hero';
import Slider from './bahan/Slider';
import Instagram from './bahan/instagram'
import {SliderData} from './bahan/SliderData';

export default function Home() {
  return (
    <>
      <Head>
        <title>Photograpy</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <Hero judul='Ini Halaman Home' message='Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, aperiam!'/>
      <Slider slides={SliderData} />
      <Instagram/>
    </>
  )
}
