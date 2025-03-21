nav = document.querySelector(".navibar");
document.querySelector('.hamburger').addEventListener('click', (e) => {
	e.currentTarget.classList.toggle('is-active');
  nav.classList.toggle("expanded");
})