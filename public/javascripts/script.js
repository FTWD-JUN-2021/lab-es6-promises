// // This will print in the wrong order
// // we added it for you to test to make sure data is loaded
// // 🚨🚨🚨 comment out the next 3 lines when you start working on the code


// for (let i = 0; i < mashPotatoes.length; i++) {
//   //addFood(steak[i], '#steak');
//   console.log(mashPotatoes[i])
// }

// // Iteration 1 using callbacks
// addFood(steak[0], '#steak', () => {
//   addFood(steak[1], '#steak', () => {
//     addFood(steak[2], '#steak', () => {
//       addFood(steak[3], '#steak', () => {
//         addFood(steak[4], '#steak', () => {
//           addFood(steak[5], '#steak', () => {
//             addFood(steak[6], '#steak', () => {
//               addFood(steak[7], '#steak', () => {
//                 document.querySelector('#table').innerHTML += `<img src="public/images/steak.jpg"></img>`
//               })
//             })
//           })
//         })
//       })
//     })
//   })
// });



// // Iteration 2 using `.then()`
// addFood(mashPotatoes[0], '#mashPotatoes').then(() => {
//   addFood(mashPotatoes[1], '#mashPotatoes').then(() => {
//     addFood(mashPotatoes[2], '#mashPotatoes').then(() => {
//       addFood(mashPotatoes[3], '#mashPotatoes').then(() => {
//         addFood(mashPotatoes[4], '#mashPotatoes').then(() => {
//           document.querySelector('#table').innerHTML += `<img src="public/images/mashPotatoes.jpg"></img>`
//         })
//       })
//     }) 
//   })
// });

// // Iteration 3 using async/await

//   async function makeFood() {
//     await addFood(brusselSprouts[0], '#brusselSprouts');
//     await addFood(brusselSprouts[1], '#brusselSprouts');
//     await addFood(brusselSprouts[2], '#brusselSprouts');
//     await addFood(brusselSprouts[3], '#brusselSprouts');
//     await addFood(brusselSprouts[4], '#brusselSprouts');
//     await addFood(brusselSprouts[5], '#brusselSprouts');
//     await addFood(brusselSprouts[6], '#brusselSprouts');
//     await addFood(brusselSprouts[7], '#brusselSprouts');
//     await addFood(brusselSprouts[8], '#brusselSprouts');
//     document.querySelector('#table').innerHTML += `<img src="public/images/brusselSprouts.jpg"></img>`
//   }


//   makeFood();

async function makeFood(steps, id) {
  let promises = [];
  for(const step of steps) {
    promises.push(await addFood(step, id));
  }
  document.querySelector('#table').innerHTML += (`<img src="public/images/${id.replace('#','')}.jpg" />`)
  return promises;
}
Promise.all([makeFood(steak, '#steak'), makeFood(mashPotatoes, '#mashPotatoes'), makeFood(brusselSprouts, '#brusselSprouts')]).then(res=>{
  console.log('breakfast is made!!',res)
  document.body.innerHTML += `<button onclick="new Audio('dinnerIsServed.mp3').play()">Dinner is served.</button>`
})
