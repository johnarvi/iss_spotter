const { nextISSTimesForMyLocation } = require('./iss');

const printTimes = function(passTimes) {
  for (let passes of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(passes.risetime);
    const duration = passes.duration;
    console.log(`Next pass @ ${datetime} for ${duration}secs!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  printTimes(passTimes);
});

