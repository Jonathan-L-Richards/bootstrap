document.querySelector('p').style.color = 'red';

console.log(crossOriginIsolated);

//Web R import
import { WebR } from "https://webr.r-wasm.org/latest/webr.mjs";
const webR = new WebR();
await webR.init();
console.log("WebR is ready!")

//Loading R code from file
const response = await fetch("./bootstrap.R");
if (!response.ok) {
  throw new Error("Could not load bootstrap.R");
}
const rCode = await response.text();
await webR.FS.writeFile(
  "bootstrap.R",
  new TextEncoder().encode(rCode)
);
await webR.evalRVoid(
  "source('bootstrap.R')"
);
console.log("R file loaded!");

