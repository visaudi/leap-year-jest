const {store} = require("./leap");
const {changeYear} = require("./actions");

test("a year that is not a leap year", function () {
    store.dispatch(changeYear(2011));
    expect(store.getState().isLeap).toBe(false);
});

test("a year that is a leap year", function () {
    store.dispatch(changeYear(2012));
    expect(store.getState().isLeap).toBe(true);
});

test("a year that is not a leap year", function () {
    store.dispatch(changeYear(2013));
    expect(store.getState().isLeap).toBe(false);
});
