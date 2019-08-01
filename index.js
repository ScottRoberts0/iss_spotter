const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, data) => {
  if(error){
    console.log("Error!", error);
  }
  
  for(const rise of data){
    const datetime = new Date(0);
    datetime.setUTCSeconds(rise.risetime);
    const duration = rise.duration;
    
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);

  }
  
  
 
});


//const fetch = require('./iss');
// fetch.fetchISSFlyOverTimes({ latitude: '49.27670', longitude: '-123.13000' }, ((error, data) => {
//   if (error) {
//     console.log("Error", error);
//   } else {
//     console.log("data:", data);
//   }
// }));

// fetch.fetchCoordsByIP("194.68.214.222", ((error, data) => {
//   if(error){
//     console.log("Error", error);
//   }
//   console.log("Data:", data);
// }));


// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });