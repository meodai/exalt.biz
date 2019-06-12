import Typed from 'typed.js';

const typed = new Typed('[data-quote]', {
  stringsElement: '#quotes',
  typeSpeed: 40,
  backSpeed: 10,
  startDelay: 300,
  backDelay: 3500,
  shuffle: true,
  loop: true,
  loopCount: 1000
});