// import { aString } from './a';
import * as strings from './a';

console.log(strings.aString);

import { reverse, isOdd } from './utils';

console.log(reverse('learning'), isOdd(3));

// if ( Math.random() >= 0.5 ) {
//   import('./a').then(a => console.log('The message is: ', a.aString));
// }


/**
 * This is not allowed, as we can see the error in the console if we load the app in browser.
 * but as per the instructor, if required, some 3rd party library can solve this problem, Here is the error from console.
 *
 * Failed to load module script: The server responded with a non-JavaScript MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
 * */
// import * as config from './config.json';
// console.log(config.userSetting);
console.log('will require some 3rd party library to import .json files as modules');
