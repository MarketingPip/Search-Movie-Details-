 import tnp from "https://cdn.skypack.dev/torrent-name-parser@0.6.5";

import  'https://cdn.jsdelivr.net/gh/MarketingPipeline/Media-Element.js/version/1.0.2/dist/media-element.min.js'

function test() {
  let search_input = document.getElementById("search_input")
console.log(tnp(search_input.value).title);
  document.getElementById("results").innerHTML = `

  <media-element name="${tnp(search_input.value).title}"> </media-element>`
}

let btn = document.getElementById("btn");
btn.addEventListener("click", (event) => {
  test();
});
