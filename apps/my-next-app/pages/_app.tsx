import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './styles.css';
import { MyReactLib } from '@rust-wasm-next/my-react-lib';
import { MyBuildableReactLib } from '@rust-wasm-next/my-buildable-react-lib';
import { RustComponent } from '../components/rust.component';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my-next-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <MyReactLib></MyReactLib>
        <MyBuildableReactLib></MyBuildableReactLib>
        <RustComponent></RustComponent>
      </main>
    </>
  );
}

export default CustomApp;
