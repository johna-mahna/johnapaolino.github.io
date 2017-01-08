const tabs = document.querySelectorAll('.tab');

function updateActive(){
  triggers.forEach(tab => tab.classList.remove('is-tab-selected'));
  this.classList.add('is-tab-selected');
}

tabs.forEach(tab => tab.addEventListener('mousedown', updateActive));
