const menu = document.querySelector('.hamburger'); 
const navigation = document.querySelector('nav');
const li = document.querySelectorAll('nav li');

menu.addEventListener('click', () => { 
  menu.classList.toggle('hamburger--active'); 
  navigation.classList.toggle('active');
  li.forEach(item => {
    item.addEventListener('click', () =>{
    menu.classList.remove('hamburger--active');
    navigation.classList.remove('active');
    })
  }); 
});

ScrollReveal({ reset: true }).reveal('.headline', {delay: 100});

