const sections = document.querySelectorAll('.sections');
console.log(sections);

sections.forEach((item) => {

  item.addEventListener('click', (event) => {

    const active = document.querySelectorAll('.active');

    event.currentTarget.classList.add('active');
    active[0].classList.remove('active');

  });

});
