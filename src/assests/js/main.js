import '../css/style.css'

document.addEventListener('DOMContentLoaded', () => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.querySelector('.background-container').classList.add('safari-bg-fixed');
    }
  });