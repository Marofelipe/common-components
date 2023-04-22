const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  const { key, keyCode, code } = event;
  insert.innerHTML = `
    <div class="key">
      ${key == " " ? "Space" : key}
      <small>envet.key</small>
    </div>
    <div class="key">
      ${keyCode}
      <small>envet.keyCode</small>
    </div>
    <div class="key">
      ${code}
      <small>envet.code</small>
    </div>
  `;
});
