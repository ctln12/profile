const sections = document.querySelectorAll('#navbar li');

sections.forEach((item) => {

  item.addEventListener('click', (event) => {

    const active = document.querySelectorAll('.active');

    event.currentTarget.classList.add('active');
    active[0].classList.remove('active');

  });

});
