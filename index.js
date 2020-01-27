// Code your solution in this file!

const returnFirstTwoDrivers = function(driverArr) {
    let newArr = []
    newArr.push(driverArr[0], driverArr[1])
    return newArr
  }

const returnLastTwoDrivers = function(driverArr) {
  return driverArr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(int) {
  return function (fare) {
    return fare * int
  }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(driverArr, returnFirstTwoDrivers) {
  return returnFirstTwoDrivers(driverArr)
}
