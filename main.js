var advancedStaggeringAnimation = (function() {

  const staggerVisualizerEl = document.querySelector('.stagger-visualizer');
  const dotsWrapperEl = staggerVisualizerEl.querySelector('.dots-wrapper');
  const dotsFragment = document.createDocumentFragment();
  const grid = [20, 10];
  const cell = 55;
  
  for (let i = 0; i < grid[0]; i++) {
    for (let j = 0; j < grid[1]; j++) {
      const dotEl = document.createElement('div');
      dotEl.classList.add('dot');
      dotEl.dataset.row = i
      dotEl.dataset.col = j
      dotsFragment.appendChild(dotEl);
    }
  }
  
  dotsWrapperEl.appendChild(dotsFragment);
  
  const dots = document.getElementsByClassName('dot')

  for (let index = 0; index < dots.length; index++) {
    const element = dots[index];
    element.addEventListener('click', function(e) {
      const el = e.target
      const row = el.dataset.row
      const col = el.dataset.col
      anime({
        targets: '.stagger-visualizer .dot',
        scale: [
          {value: .5, easing: 'easeOutSine', duration: 500},
          {value: 1, easing: 'easeInOutQuad', duration: 1200}
        ],
        delay: anime.stagger(200, {grid: grid, from: 'center'})
      });
    })
  }

  const play = function () {
    anime({
      targets: '.stagger-visualizer .dot',
      scale: [
        {value: .5, easing: 'easeOutSine', duration: 800},
        {value: .3, easing: 'easeOutSine', duration: 600},
        {value: 1.2, easing: 'easeOutSine', duration: 1200},
        {value: 1, easing: 'easeInOutQuad', duration: 1200}
      ],
      backgroundColor: [
        {value: '#D0FF43', easing: 'easeOutSine', duration: 1200},
        {value: '#20DDFE', easing: 'easeOutSine', duration: 1200},
        {value: '#2C2C4C', easing: 'easeOutSine', duration: 1600},
        {value: '#FF2D50', easing: 'easeOutSine', duration: 1800},
      ],
      borderRadius: [
        {value: '50%', easing: 'easeOutSine', duration: 1200},
        {value: '80%', easing: 'easeOutSine', duration: 1800},
        {value: 0, easing: 'easeOutSine', duration: 2000},
      ],
      delay: anime.stagger(200, {grid: grid, from: 'center'}),
      complete: play
    });

    anime({
      targets: '.stagger-visualizer',
      backgroundColor: [
        {value: '#20DDFE', easing: 'easeOutSine', duration: 1200},
        {value: '#2C2C4C', easing: 'easeOutSine', duration: 1600},
        {value: '#FF2D50', easing: 'easeOutSine', duration: 1800},
        {value: '#161622', easing: 'easeOutSine', duration: 1000},
      ],
    })
  }

  play();

})();