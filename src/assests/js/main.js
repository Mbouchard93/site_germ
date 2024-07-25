import '../css/style.css'

document.addEventListener('DOMContentLoaded', () => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.body.classList.add('safari-bg-fixed');
    }
  });