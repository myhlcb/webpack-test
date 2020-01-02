import _ from 'lodash';
import './style.css';
import moment from 'moment';
function component () {
  var element = document.createElement ('div');

  // lodash 是由当前 script 脚本 import 导入进来的
  element.innerHTML = moment ().format ('MMM,dd YYYY');
  element.classList.add ('hello');

  return element;
}

document.body.appendChild (component ());
