// Code your solution in this file!
const returnFirstTwoDrivers=(arr) => {
    let a=arr.slice(0,2)
    return a
}
const returnLastTwoDrivers=(arr) => {
    let a=arr.slice(arr.length-2,arr.length)
    return a
}

let selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier=(a) => {
    return function(f){
        return a*f
    }
    
}


const fareDoubler=(a) => {
    const assingfare=createFareMultiplier(2)
    return assingfare(a)
    }
    

const fareTripler=(a) => {
    const assingfare=createFareMultiplier(3)
    return assingfare(a)
    }
   
const selectDifferentDrivers=(arr,a)=>{
    return a(arr)
}

// fareDoubler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.
// fareTripler() — Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
// selectDifferentDrivers() — This function takes two arguments, an array of drivers and either the returnFirstTwoDrivers() or returnLastTwoDrivers() function. Based on these two arguments, selectDifferentDrivers() will return either the first two drivers or the last two drivers.