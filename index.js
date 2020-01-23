// Code your solution in this file!

const returnFirstTwoDrivers  = function (drivers)  {
    return drivers.slice(0, 2);
};
const returnLastTwoDrivers  = function (drivers)  {
    return drivers.slice(-2);
};
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) { 
    return function (fare) { 
        return int * fare 
    }
}
const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// Array has to be passed in first
const selectDifferentDrivers = function (array, func) { 
    return func(array);
};