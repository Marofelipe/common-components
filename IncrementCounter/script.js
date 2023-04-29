const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerHTML = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const tmp = +counter.innerText;

    const increment = target / 500;

    if (tmp < target) {
      counter.innerText = `${Math.ceil(tmp + increment)}`;
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});
