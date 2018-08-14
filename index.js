const DragonPandaClient = require('dragonpanda-api-client').default;

exports.run = function(key) {
  const loc = '/home/jalil.farid/Programs/NodeTestDragonPanda/data';

  let done = false;

  const ai = new DragonPandaClient({ key });

  console.log("Beginning training.")
  ai.fit(`${loc}/housing_train.csv`, 'MEDV')
      .then(model => {
          console.log("Finished Training. Predicting on test data.");
          return ai.predict(model.automodelSessionId, `${loc}/housing_test.csv`)
      })
      .then((res) => {
          console.log("Prediction completed.");
          console.log(res);
      })
      .catch((err) => {
          console.log("Error has occurred.");
          console.log(err);
      })
      .finally(() => { done = true })


  while (!done) {
      //none
  }
}
