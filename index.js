// Write your solution here!
const drivers =  ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
  return drivers.push(name)
}
function destructivelyPrependDriver(name){
  drivers.unshift(name)
}
function destructivelyRemoveLastDriver(){
  drivers.pop()
}
function destructivelyRemoveFirstDriver(){
  drivers.shift()
}
function appendDriver(name){
  let newDrivers = drivers.splice(drivers.length, 0, name)
return newDrivers
}
function prependDriver(name){

}
