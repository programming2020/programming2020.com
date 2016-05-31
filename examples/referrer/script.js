window.addEventListener('load', function() {
  if (!new RegExp(document.domain).test(document.referrer)) {
    document.querySelector('h1').innerHTML = 'エラー';
  }
});
