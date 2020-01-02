import './style.css';
import moment from 'moment';
import Icon from '../images/icon.png';
function component () {
  var element = document.createElement ('div');

  element.innerHTML = moment ().format ('MMM,dd YYYY');
  element.classList.add ('hello');
  return element;
}

var img = new Image ();
img.src = Icon;
document.body.appendChild (img);
document.body.appendChild (component ());
