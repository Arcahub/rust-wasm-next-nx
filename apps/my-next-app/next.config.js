// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const path = require('path');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  webpack(config) {
    // config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';

    // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
    config.experiments = { asyncWebAssembly: true };

    config.plugins.push(
      new WasmPackPlugin({
        outDir: path.resolve(__dirname, 'pkg'),
        extraArgs: '--target bundler --mode normal',
        crateDirectory: path.resolve(__dirname, '../../libs/my-rust-lib'),
      })
    );

    return config;
  },
};

module.exports = withNx(nextConfig);
