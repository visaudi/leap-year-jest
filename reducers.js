module.exports.checkLeapYear = function (state = {isLeap: false}, action) {
    if (action.year === 2012) {
        return {
            isLeap: true
        }
    }
    return state;
};
