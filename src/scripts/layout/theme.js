import "../../styles/theme.scss";
import "../../styles/theme.scss.liquid";

document.querySelector('#app > nav > div.block').addEventListener('click', (e) => {
  document.querySelector('div[name="nav-items"]').classList.toggle('hidden')
})