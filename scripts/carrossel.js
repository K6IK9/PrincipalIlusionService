let galeria = document.querySelector('.sec_galeria');
let conteudo = document.querySelector('.conteudo');
let isMouseDown = false;
let startX;
let scrollLeft;

galeria.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  startX = e.pageX - galeria.offsetLeft;
  scrollLeft = galeria.scrollLeft;
});

galeria.addEventListener('mouseleave', () => {
  isMouseDown = false;
});

galeria.addEventListener('mouseup', () => {
  isMouseDown = false;
});


galeria.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return;
  e.preventDefault();
  const x = e.pageX - galeria.offsetLeft;
  const walk = (x - startX) * 1.1;
  galeria.scrollLeft = scrollLeft - walk;
});

/*
galeria.addEventListener('mousemove', (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - galeria.offsetLeft;
    const walk = (startX - x) * 1.1; // Inverte a direção da rolagem
    galeria.scrollLeft = scrollLeft + walk; // Usa "+" em vez de "-"
  });
*/

//---------------- CARROSEL 02

let galeria02 = document.querySelector('.sec_galeria02');
let conteudo02 = document.querySelector('.conteudo02');
let isMouseDown02 = false;
let startX02;
let scrollRight02;

galeria02.addEventListener('mousedown', (e) => {
  isMouseDown02 = true;
  startX02 = e.pageX - galeria02.offsetLeft;
  scrollRight02 = galeria02.scrollWidth - galeria02.scrollLeft - galeria02.clientWidth;
});

galeria02.addEventListener('mouseleave', () => {
  isMouseDown02 = false;
});

galeria02.addEventListener('mouseup', () => {
  isMouseDown02 = false;
});

galeria02.addEventListener('mousemove', (e) => {
  if (!isMouseDown02) return;
  e.preventDefault();
  const x2 = e.pageX - galeria02.offsetLeft;
  const walk2 = (x2 - startX02) * 1.1; // Mudar a direção do movimento
  galeria02.scrollLeft = scrollRight02 + walk2; // Ajustar a posição da rolagem
});