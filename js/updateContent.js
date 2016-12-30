const buckets = document.querySelectorAll('.content-bucket');
function updateContent(e){
  const currentTab = Number(e.srcElement.dataset.tab);
  buckets.forEach(function(bucket){
    const bucketId = Number(bucket.getAttribute('id'));
    if (bucketId === currentTab) {
      bucket.classList.remove('is-hidden');
      bucket.classList.add('fade-content');
    } else {
      bucket.classList.add('is-hidden');
      bucket.classList.remove('fade-content');
    }
  });
}
tabs.forEach(tab => tab.addEventListener('mousedown', updateContent));
