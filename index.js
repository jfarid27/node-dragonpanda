const DragonPandaClient = require('dragonpanda-api-client').default;

exports.run = async function(key) {
  const loc = './data';
  const ai = new DragonPandaClient({ key });

  let f = `${loc}/housing_train.csv`;
  console.log(`Beginning training with data ${f}`);
  let model = await ai.fit(f, 'MEDV');

  let t = `${loc}/housing_test.csv`;
  console.log("Finished Training. Predicting on test data.");
  console.log(`Finished training. Testing with data ${t}`);

  let res = await ai.predict(model.automodelSessionId, t);
  console.log("Prediction completed.");
  console.log(res);

  return res;
}

