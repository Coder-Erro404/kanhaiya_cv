const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');

menuButton.addEventListener('click', () => {
  navbar.classList.toggle('show');
});

document.onscroll = () => {
  navbar.classList.remove('show');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};

document.onload = () => {
  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
  } else {
    document.querySelector('.header').classList.remove('active');
  }
};


function F__ID(){
  $.getScript('https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js',function(){
      particlesJS("background_0", {
          "particles": {
              "number": {
                  "value": 100,
                  "density": {
                      "enable": true,
                      "value_area": 800
                  }
              },
              "color": {
                  "value": "#ffffff"
              },
              "shape": {
                  "type": "circle",
                  "stroke": {
                      "width": 0,
                      "color": "#000000"
                  },
                  "polygon": {
                      "nb_sides": 5
                  },
                  "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                  }
              },
              "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                  }
              },
              "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                      "enable": false,
                      "speed": 40,
                      "size_min": 0.1,
                      "sync": false
                  }
              },
              "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
              },
              "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                      "enable": false,
                      "rotateX": 600,
                      "rotateY": 1200
                  }
              }
          },
          "interactivity": {
              "detect_on": "canvas",
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "grab"
                  },
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  },
                  "resize": true
              },
              "modes": {
                  "grab": {
                      "distance": 140,
                      "line_linked": {
                          "opacity": 1
                      }
                  },
                  "bubble": {
                      "distance": 400,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                  },
                  "repulse": {
                      "distance": 200,
                      "duration": 0.4
                  },
                  "push": {
                      "particles_nb": 4
                  },
                  "remove": {
                      "particles_nb": 2
                  }
              }
          },
          "retina_detect": true
      });
  });
  //------------------------------------
}
F__ID();