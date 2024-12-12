import './style.css';
import vimLogo from '/vim.png';
import { API } from './api';

async function getResults(index) {
  const inputEl: HTMLInputElement = document.querySelector(
    `#input_card_${index}`
  );
  if (inputEl) {
    const response = await API.enhanceMessage(inputEl.value);
    const resultEl: HTMLInputElement = document.querySelector(
      `#result_${index}`
    );
    if (resultEl) {
      resultEl.innerHTML = response;
    }
  }
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <div class="sections">
      <div class="card">
        <input id="input_card_1" type="text"></input>
        <button type="button" id="button_card_1">Get Result From Worker</button>
        <div id="result_1">
          <div>Show worker result in here!</div>
        </div>
      </div>
      ${
        true
          ? `
      <div class="card">
        <input id="input_card_2" type="text"></input>
        <button type="button" id="button_card_2">Get Result From Worker</button>
        <div id="result_2">
          <div>Show worker result in here!</div>
        </div>
      </div>
    `
          : ''
      }
    </div>
  </div>
`;

const buttonEl: HTMLButtonElement = document.querySelector('#button_card_1');
const buttonEl2: HTMLButtonElement = document.querySelector('#button_card_2');
if (buttonEl && buttonEl2) {
  buttonEl.onclick = () => getResults(1);
  buttonEl2.onclick = () => getResults(2);
}
