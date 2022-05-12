
// keys are the "current" theme and their respective values are "next" theme
const themeMap = {
  dark: "light",
  light: "dark",
};

const themeToggleBtns = document.querySelectorAll('.themeToggleBtn')

// triggers if condition is false/null
if (!localStorage.getItem('theme')) {
  const tmp = Object.keys(themeMap)[0];
  localStorage.setItem('theme', tmp);
}

const theme = localStorage.getItem('theme')

// const bodyClass = document.body.classList;
const bodyTag = document.body;
bodyTag.setAttribute("data-theme",theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyTag.setAttribute("data-theme",next);
  localStorage.setItem('theme', next);
}

// add "toggleTheme" function to every theme-toggle button
themeToggleBtns.forEach(element => {
  element.addEventListener('click', toggleTheme)
});
