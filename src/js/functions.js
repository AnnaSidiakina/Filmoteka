export function noReloadByEnter(e) {
  if (e.keyCode === 13) {
    e.preventDefault();
  }
}

export function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}