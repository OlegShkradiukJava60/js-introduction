import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <h2>Текущее время:</h2>
      <input id="time-field"<readonly />
    </div>
  </div>
`;

const time = document.getElementById("time-field");

function updateTime() {
  const now = new Date();
  time.value = now.toLocaleTimeString();
}

updateTime();
setInterval(updateTime, 1000); 