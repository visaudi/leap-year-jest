const CHANGE_YEAR = "CHANGE_YEAR";

module.exports.changeYear = (year) => (
    {
        year,
        type: CHANGE_YEAR 
    }
);
