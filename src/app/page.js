"use client";
import "bootstrap/dist/css/bootstrap.css";

import { useEffect } from "react";
import HomePage from "./pages/Home/page";
import Head from 'next/head';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Home() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
      rel="stylesheet"
    />
  </Head>;
  return (
    <>
     
      <HomePage />
      
    </>
  );
}
