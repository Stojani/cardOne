import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MeshProvider } from "@meshsdk/react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MeshProvider>
      <Head>
        <title>cardOne</title>
        <meta name="description" content="cardOne" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://cryptologos.cc/logos/cardano-ada-logo.png" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </MeshProvider>
  );
}
