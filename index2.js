
const { nextISSTimesForMyLocation }  = require('./iss_promised');
// const { printPassTimes } = require('./index.js');

const printPassTimes = function(passTimes) {
  for (let pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass @ ${datetime} for ${duration}secs!`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });
