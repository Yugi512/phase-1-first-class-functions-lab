function returnFirstTwoDrivers(x){
    return x.slice(0,2);
}
function returnLastTwoDrivers(x){
    return x.slice(-2);
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(num1){
    return function (num1) {
        return num1 * num1;
      };
}
function fareDoubler(num1){
    return num1 * 2;
}
function fareTripler(num1){
    return num1 * 3;
}
function selectDifferentDrivers(arrayOfDrivers, fn){
    if ( fn === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
      } else if (fn === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers);
      };
      
}