node-winsay
===========

TTS module (text to speech) for node.js on windows using Edge.js

## Credits
Uses [Edge.js](https://github.com/tjanczuk/edge) to hook into the System.Speech.Synthesis framework with a short C# code snippet. This winsay module is inspired by the [say.js](https://github.com/Marak/say.js) module which currently supports Mac OS X and Linux but not Windows (at this time of writing v0.6.0).

## Installation

Install using `npm`,

``` bash
$ npm install winsay
```

## Usage Example
``` javascript
var winsay = require('winsay');

// no callback, fire and forget
winsay.speak("GLaDOS", "Hello, and, again, welcome to the Aperture Science Computer-Aided Enrichment Center");

// use default voice in System Preferences
winsay.speak(null, 'Hello!');

// output some text to the console after the callback has completed
winsay.speak('Good News', 'You've won the internet!', function () {
     console.log('text to speech complete');
});

// syncronous speak function also available
winsay.speakSync('Bad News', 'I feel slow and sluggish!', function () {
     console.log('text to speech complete');
});
console.log("this doesn't run until after the syncronous call");

```
Note: changing the voice hasn't been implemented yet (v0.0.1).


## License
(MIT License)
