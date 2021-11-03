const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer
    }
};

// const kindaExpensive = createFareMultiplier
// function fareDoubler(kindaExpensive) {
//     return kindaExpensive * 2;
// };
const fareDoubler = createFareMultiplier(2)
// const madExpensive = createFareMultiplier
// function fareTripler(madExpensive) {
//     return madExpensive * 3;
// };
const fareTripler = createFareMultiplier(3)
function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers (drivers);
};
