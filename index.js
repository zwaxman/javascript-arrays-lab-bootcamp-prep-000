var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

function removeLastKitten(){
  newK=kittens.splice(0,kittens.length)
}
//   describe('removeLastKitten()', function() {
//     it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       window.kittens = ['Milo', 'Otis', 'Garfield'];
//       expect(removeLastKitten()).toEqual(["Milo", "Otis"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })

//   describe('removeFirstKitten()', function() {
//     it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
//       window.kittens = ['Milo', 'Otis', 'Garfield'];
//       expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

//       expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
//     })
//   })
// })

// // Add your functions and code here
