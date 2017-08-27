const leapYear = {
    isLeap: true
};
const nonLeapYear = {
    isLeap: false
};

module.exports.checkLeapYear = function (state = {isLeap: false}, action) {
    if (action.year % 4 === 0) {
        if (action.year % 400 === 0) {
            return leapYear;
        }
        if (action.year % 100 === 0) {

            return nonLeapYear;
        }
        return leapYear;
    }
    return nonLeapYear;
};
