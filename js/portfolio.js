(function () {
  'use strict';

  var body = document.body;
  var toggle = document.getElementById('theme-toggle');
  var storageKey = 'mana-portfolio-theme';

  function updateThemeButton() {
    if (!toggle) return;
    var light = body.classList.contains('light-theme');
    toggle.setAttribute('aria-label', light ? 'Activer le thème sombre' : 'Activer le thème clair');
    toggle.innerHTML = light
      ? '<i class="ion-ios-moon-outline"></i><span>Sombre</span>'
      : '<i class="ion-ios-sunny-outline"></i><span>Clair</span>';
  }

  try {
    if (localStorage.getItem(storageKey) === 'light') body.classList.add('light-theme');
  } catch (error) {}

  updateThemeButton();

  if (toggle) {
    toggle.addEventListener('click', function () {
      body.classList.toggle('light-theme');
      try {
        localStorage.setItem(storageKey, body.classList.contains('light-theme') ? 'light' : 'dark');
      } catch (error) {}
      updateThemeButton();
    });
  }
}());
