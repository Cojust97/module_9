const btn = document.getElementById('content__button-load');
const mask = document.getElementById('mask');
btn.addEventListener('click', async () => {
  mask.style.display = 'flex'; 
  const response = await fetch('https://dog.ceo/api/breeds/image/random/20');
  const data = await response.json();
  const images = data.message;

  const gallery = document.querySelector('.content__images');
  gallery.innerHTML = '';

  images.forEach(imageUrl => {
    const img = document.createElement('img');
    img.src = imageUrl;
    img.classList.add('image');
    gallery.appendChild(img);
}); 
   mask.style.display = 'none';
});