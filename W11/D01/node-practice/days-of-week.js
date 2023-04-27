console.log("running the days of week file");
// console.log(module);

// days-of-week is exporting whatever is behind the assignment operator
// When another file requires this file (days-of-week), the exports will be returned

// module.exports.weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// module.exports.getWeekDay = function (dayNo) {
//   if (dayNo < 0 || dayNo > 6) dayNo = 0;
//   return this.weekdays[dayNo];
// };

module.exports = {
  weekDays: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  getWeekDay: function (dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return this.weekDays[dayNo];
  },
};
