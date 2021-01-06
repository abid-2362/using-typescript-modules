// import { aString } from './a';
import * as strings from './a';

console.log(strings.aString);

import { reverse, isOdd } from './utils';

console.log(reverse('learning'), isOdd(3));

// if ( Math.random() >= 0.5 ) {
//   import('./a').then(a => console.log('The message is: ', a.aString));
// }

import * as config from './config.json';

console.log(config.userSetting);
