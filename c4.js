window.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('.column').forEach(function(column) {
    column.addEventListener('click', function(el) {
      alert('click');
    });
  });
});
