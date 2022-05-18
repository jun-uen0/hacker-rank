// https://www.hackerrank.com/contests/javascript-challenges/challenges/find-the-month

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  var dates = _input.split('\n');

  for (var i = 0; i < dates.length - 1; i++) {
    findDay(dates[i]);
  }
});

function findDay(myDate) {
  // console.log("myDate: ", myDate)
  const week = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  const d = new Date(myDate)
  const day = d.getDay()
  const date = week[day]

  console.log(date)
}
