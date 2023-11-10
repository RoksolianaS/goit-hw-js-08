import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

player.on('timeupdate', throttle(timeStop, 1000));

function timeStop(timeupdate) {
    let pause = timeupdate.seconds;
    console.log(pause);
    localStorage.setItem('videoplayer-current-time', pause);
}
const currentTime = localStorage.getItem('videoplayer-current-time');
player
    .setCurrentTime(currentTime)
  .then(function (pause){})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });