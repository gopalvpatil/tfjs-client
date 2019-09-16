let recognizer;

function predict() {
    const words = recognizer.wordLabels();
    recognizer.listen(({ scores }) => {
        scores = Array.from(scores).map((s, i) => ({ score: s, word: words[i] }));
        scores.sort((s1, s2) => s2.score - s1.score);
        var text = scores[0].word;
        console.debug("word recognized", text);
        document.getElementById('speechToText').innerHTML = text;
    }, { probabilityThreshold: 0.75 });
}

async function run() {

    recognizer = speechCommands.create('BROWSER_FFT', null, 'http://localhost:4044/assets/model/custom-model.json', 'http://localhost:4044/assets/model/custom-metadata.json');
    await recognizer.ensureModelLoaded();
    console.debug(recognizer.wordLabels());
    predict();
}

run();