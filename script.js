document.querySelector('p').style.color = 'red';

console.log(crossOriginIsolated);

//Web R import
import { WebR } from "https://webr.r-wasm.org/latest/webr.mjs";
const webR = new WebR();
await webR.init();

