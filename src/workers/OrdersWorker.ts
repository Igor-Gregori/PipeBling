import axios from "axios";
import fs from "fs";
import schedule from "node-schedule";
import os from "os";
import { resolve } from "path";

const rule = new schedule.RecurrenceRule();
rule.hour = 23;

// test worker every 20 seconds:
//rule.second = 20;

schedule.scheduleJob(rule, async () => {
  await axios
    .post(`${process.env.BASE_URL}/orders`)
    .then((res) => {
      writeLog(
        `Process carried out on the date ${new Date()}${os.EOL}` +
          `status code: ${res.status}${os.EOL}` +
          `status text: ${res.statusText}${os.EOL}`
      );
    })
    .catch((err) => {
      writeLog(
        `There was a failure to process the orders in date ${new Date()}${
          os.EOL
        }` + `error message: ${err.response.data.message}${os.EOL}`
      );
    });
});

function writeLog(text: string) {
  const way = resolve(__dirname, "..", "..", "tmp") + "\\consolidationLog.txt";
  fs.open(way, "a", 666, function (e, id) {
    fs.write(id, text + os.EOL + os.EOL, null, "utf8", function () {
      fs.close(id, () => {});
    });
  });
}
