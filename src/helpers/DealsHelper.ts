import moment from "moment-timezone";

class DealsHelper {
  public getStrToday(): string {
    const today = new Date(new Date().toUTCString());
    return `${today.getDate()}${today.getMonth()}${today.getFullYear()}`;
  }

  public getStrOfDay(strDate: string): string {
    const date = new Date(moment.utc(strDate).tz(process.env.TZ).format());
    return `${date.getDate()}${date.getMonth()}${date.getFullYear()}`;
  }

  public getStrOfUTCDay(strDate: string): string {    
    const date = new Date(strDate);
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 1);
    return `${date.getDate()}${date.getMonth()}${date.getUTCFullYear()}`;
  }

}

export { DealsHelper };
