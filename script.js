document.querySelector('p').style.color = 'red';

//Web R Initialization
import('https://webr.r-wasm.org/latest/webr.mjs').then(
  async ({ WebR }) => {
    const webR = new WebR();
    await webR.init();
  }
);

console.log(crossOriginIsolated);