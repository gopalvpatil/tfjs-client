let recognizer;

async function run() {
    const model = await tf.loadLayersModel('indexeddb://tfjs-speech-commands-model/model-2019-09-16T02.13.26');
	const saveResult = await model.save('downloads://model');
	console.log(saveResult);
}

run();