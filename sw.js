self.addEventListener('install', e => {
  console.log('ClearWords installed');
});

self.addEventListener('fetch', e => {
  // Let browser handle network requests
});