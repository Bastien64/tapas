window.onload = function() {
    setTimeout(function() {
      document.getElementById("nav-section").style.opacity = 1;
    }, 2000);
  };
  
  // Sélectionnez la section2
const section2 = document.querySelector('.section2');


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            section2.classList.add('in-view');
        } else {

            section2.classList.remove('in-view');
        }
    });
});
observer.observe(section2);



// Sélectionnez la section4
const section4 = document.querySelector('.section4');

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            section4.classList.add('in-view');
        } else {
            section4.classList.remove('in-view');
        }
    });
});

// Observez la section4
observer4.observe(section4);
