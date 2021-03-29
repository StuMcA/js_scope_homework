// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }


//   const verdict = declareMurderer();
//   console.log(verdict);
//   I think the murderer will be Miss Scarlet.

//   Episode 2
//   const murderer = 'Professor Plum';
  
//   const changeMurderer = function() {
//     murderer = 'Mrs. Peacock';
//   }
  
//   const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
// I think it will be Professor Plum as murderer is a constant and cannot be reassigned. It will error.

//   Episode 3
//   let murderer = 'Professor Plum';
  
//   const declareMurderer = function() {
//     let murderer = 'Mrs. Peacock';
//     return `The murderer is ${murderer}.`;
//   }
  
//   const firstVerdict = declareMurderer();
//   console.log('First Verdict: ', firstVerdict);
  
//   const secondVerdict = `The murderer is ${murderer}.`;
//   console.log('Second Verdict: ', secondVerdict);

//   First verdict will be Mrs. Peacock, second will be Professor Plum.

//   Episode 4
//   let suspectOne = 'Miss Scarlet';
//   let suspectTwo = 'Professor Plum';
//   let suspectThree = 'Mrs. Peacock';
  
//   const declareAllSuspects = function() {
//     let suspectThree = 'Colonel Mustard';
//     return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
//   }
  
//   const suspects = declareAllSuspects();
//   console.log(suspects);
//   console.log(`Suspect three is ${suspectThree}.`);
// I think the final suspect will be Mrs. Peacock

//   Episode 5
//   const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);
//   The weapon is the revolver.

//   Episode 6
//   let murderer = 'Colonel Mustard';
  
//   const changeMurderer = function() {
//     murderer = 'Mr. Green';
  
//     const plotTwist = function() {
//       murderer = 'Mrs. White';
//     }
  
//     plotTwist();
//   }
  
//   const declareMurderer = function () {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
// //   The murderer is Mrs. White

//   Episode 7
//   let murderer = 'Professor Plum';
  
//   const changeMurderer = function() {
//     murderer = 'Mr. Green';
  
//     const plotTwist = function() {
//       let murderer = 'Colonel Mustard';
  
//       const unexpectedOutcome = function() {
//         murderer = 'Miss Scarlet';
//       }
  
//       unexpectedOutcome();
//     }
  
//     plotTwist();
//   }
  
//   const declareMurderer = function() {
//     return `The murderer is ${murderer}.`;
//   }
  
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
//   Murderer is Mr Green.


//   Episode 8
//   const scenario = {
//     murderer: 'Mrs. Peacock',
//     room: 'Conservatory',
//     weapon: 'Lead Pipe'
//   };
  
//   const changeScenario = function() {
//     scenario.murderer = 'Mrs. Peacock';
//     scenario.room = 'Dining Room';
  
//     const plotTwist = function(room) {
//       if (scenario.room === room) {
//         scenario.murderer = 'Colonel Mustard';
//       }
  
//       const unexpectedOutcome = function(murderer) {
//         if (scenario.murderer === murderer) {
//           scenario.weapon = 'Candle Stick';
//         }
//       }
  
//       unexpectedOutcome('Colonel Mustard');
//     }
  
//     plotTwist('Dining Room');
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is ${scenario.weapon}.`
//   }
  
//   changeScenario();
//   const verdict = declareWeapon();
//   console.log(verdict);
//   Weapon is the candlestick.

//   Episode 9
  let murderer = 'Professor Plum';
  
  if (murderer === 'Professor Plum') {
    let murderer = 'Mrs. Peacock';
  }
  
  const declareMurderer = function() {
    return `The murderer is ${murderer}.`;
  }
  
  const verdict = declareMurderer();
  console.log(verdict);
//   Murderer is Professor Plum.