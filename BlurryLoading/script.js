const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let ivl = setInterval(blurring, 30);

function blurring() {
  load++;

  if (load > 99) clearInterval(ivl);

  loadText.innerText = `${load}%`;
  console.log(scale(load, 0, 100, 1, 0));
  loadText.style.opacity = scale(load, 100, 1);

  bg.style.filter = `blur(${scale(load, 100, 30)}px)`;
}

const scale = (num, in_max, out_max) => {
  return out_max - (num / in_max) * out_max;
};
