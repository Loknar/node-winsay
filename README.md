node-winsay
===========
TTS module (text to speech) for node.js on windows using Edge.js

Note: changing the voice hasn't been implemented yet (v0.0.4), hopefully someday I or someone else will find out how easy it is and implement it.

## Credits
Uses [Edge.js](https://github.com/tjanczuk/edge) to hook into System.Speech.Synthesis with a short C# code snippet. The winsay module is inspired by [say.js](https://github.com/Marak/say.js) which currently supports Mac OS X and Linux but not Windows (at this time of writing v0.6.0).

## Installation

Install using `npm`,

``` bash
$ npm install winsay
```

## Usage
winsay.speak(voice, text, [callback])

or

winsay.speakSync(voice, text)

## Usage Example
``` javascript
var winsay = require('winsay');

// no callback, fire and forget
winsay.speak("GLaDOS", "Hello, and welcome to the Aperture Science Enrichment Center");

// use default voice in System Preferences
winsay.speak(null, "Hello!");

// output some text to the console after the callback has completed
winsay.speak("Good News', 'You've won the internet!", function () {
     console.log("text to speech complete");
});
console.log("This text is printed before you win the internet.");

// syncronous speak function also available
winsay.speakSync("Red", "A wild Pikachu appears.");
console.log("This text is printed after you encounter the wild Pikachu.");

```

## fun facts
```winsay.speak()``` calls are asynchronous, yay ^_^

## License
(MIT License)
