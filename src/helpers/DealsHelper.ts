import moment from "moment-timezone";

class DealsHelper {
  public getStrToday(): string {
    const today = new Date(moment().tz(process.env.TZ).format().substr(0, 10));
    today.setDate(today.getDate() + 1);
    return `${today.getDate()}${today.getMonth()}${today.getUTCFullYear()}`;
  }

  public getStrOfDay(strDate: string): string {
    const date = new Date(strDate);
    date.setHours(0, 0, 0, 0);
    return `${date.getDate()}${date.getMonth()}${date.getUTCFullYear()}`;
  }

  public getStrOfUTCDay(strDate: string): string {
    const date = new Date(strDate);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 1);
    return `${date.getDate()}${date.getMonth()}${date.getUTCFullYear()}`;
  }
}

export { DealsHelper };
