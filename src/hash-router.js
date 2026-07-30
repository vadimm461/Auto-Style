const openHashRoute = (hash) => {
  if (!hash || !hash.startsWith('#/')) return;

  if (window.location.hash === hash) {
    window.location.reload();
    return;
  }

  window.location.hash = hash;
  window.setTimeout(() => window.location.reload(), 30);
};

document.addEventListener('click', (event) => {
  const link = event.target.closest('a[href^="#/"]');
  if (!link) return;

  event.preventDefault();
  openHashRoute(link.getAttribute('href'));
});

window.addEventListener('hashchange', () => window.location.reload());
