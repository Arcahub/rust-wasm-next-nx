
import dynamic from 'next/dynamic';
import React from 'react';

export const RustComponent = dynamic({
  loader: async () => {
    // Import the wasm module
    const module = await import('@rust-wasm-next/my-rust-lib');

    // const { greet } = await init_wasm();
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

export default RustComponent
