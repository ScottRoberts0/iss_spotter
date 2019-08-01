const { nextISSTimesForMyLocation } = require('./iss_promised');

const print = function (d) {
  const data = JSON.parse(d).response;

  for (const rise of data) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(rise.risetime);
    const duration = rise.duration;

    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}

nextISSTimesForMyLocation()
  .then((data) => {
    print(data);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  })


