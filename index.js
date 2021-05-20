// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

// test 1
const returnFirstTwoDrivers = () => drivers.slice(0,2)

//test2
const returnLastTwoDrivers = ()=> drivers.slice(drivers.length-2,drivers.length)

//test 3-5
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

//test6-7
const createFareMultiplier= (fareMultiplier)=>{
    return function newFare(fare){
        return fareMultiplier * fare
    }
}

//test 8-9
const fareDoubler = (fare) => createFareMultiplier(2)(fare)

//test 10-11
const fareTripler= (fare) => 
createFareMultiplier(3)(fare)

//test 12-13
const selectDifferentDrivers = (drivers, newFunction) =>{
    return newFunction()
}