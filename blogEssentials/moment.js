const moment = require("moment");
const duration = () => {
  return moment("2023-12-01").fromNow();
};

const d = duration();
console.log({ d });
console.log(Date());
