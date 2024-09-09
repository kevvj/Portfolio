import Head from 'next/head';
import Image from "next/image";
import Loop from "./loop";
import Header from "./Header";
import Menu from "./Menu";
import Principal from "./PrincipalContent";
import Proyect from './Proyects';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Menu />
      <Principal />
      <Proyect />
      <Loop />
      
    </div>
  );
}
