var currentPageUrl = window.location.href;

// Verifique cada link em sua navegação
var links = document.querySelectorAll('nav ul li a');
links.forEach(function (link) {
  // Verifique se a URL do link corresponde à página atual
  if (currentPageUrl === link.href) {
    // Adicione a classe 'active-link' ao link selecionado
    link.classList.add('active-link');
  }
});

 // Selecione todos os links da navegação
 var links = document.querySelectorAll('.nav-link');

 // Adicione um ouvinte de evento de clique a cada link
 links.forEach(function (link) {
   link.addEventListener('click', function () {
     // Remova a classe 'active' de todos os links
     links.forEach(function (otherLink) {
       otherLink.classList.remove('active');
     });

     // Adicione a classe 'active' ao link clicado
     this.classList.add('active');
   });
 });