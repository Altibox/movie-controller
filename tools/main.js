import Videocontrol from '../src';

import React from 'react';
import {render} from 'react-dom';

let movie = {
	title:'Armageddon',
	id:666,
	uri: 'http://vg.no/'
}

function onEvent(action){
	console.log(action);
}

render(
  <Videocontrol isPlaying={false} movie={movie} onEvent={onEvent} />,
  document.getElementById('app')
);
