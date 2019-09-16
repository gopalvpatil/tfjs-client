import { Component } from '@angular/core';
/* import * as speechCommands from '@tensorflow-models/speech-commands';
import * as tf from '@tensorflow/tfjs';

let recognizer: any; */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tfjs-client';

/*   public constructor() {
    this.run();
  }


  public predict() {
    const words = recognizer.wordLabels();
    recognizer.listen(({ scores }) => {
      scores = Array.from(scores).map((s, i) => ({ score: s, word: words[i] }));
      scores.sort((s1, s2) => s2.score - s1.score);
      var text = scores[0].word;
      console.debug("word recognized", text);
      document.getElementById('speechToText').innerHTML = text;
    }, { probabilityThreshold: 0.75 });
  }

  public async run() {
    recognizer = speechCommands.create('BROWSER_FFT', null, 'http://localhost:4042/assets/model/model.json', 'http://localhost:4042/assets/model/metadata.json');
    await recognizer.ensureModelLoaded();
    console.debug(recognizer.wordLabels());
    this.predict();
  } */
}
