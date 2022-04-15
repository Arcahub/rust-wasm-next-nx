import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import dynamic from 'next/dynamic';
import React from 'react';

export const RustComponent = dynamic({
  loader: async () => {
    // Import the wasm module
    const module = await import('@rust-wasm-next/my-rust-lib');

    // Return a React component that calls the add_one method on the wasm module
    return React.memo(
      function RustComponent() {
        module.greet();
        return <div>{}</div>
      }
    )
  },
}, {
  ssr: false,
})

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to my-next-app!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
        <RustComponent></RustComponent>
      </main>
    </>
  );
}

export default CustomApp;
