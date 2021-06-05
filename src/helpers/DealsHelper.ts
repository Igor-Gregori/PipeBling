class DealsHelper {
  getStrDay(date: Date, isUtcFormat = false): string {
    if (isUtcFormat) {
      return `${date.getUTCDay()}${date.getUTCMonth()}${date.getUTCFullYear()}`;
    } else {
      return `${date.getDate()}${date.getMonth()}${date.getUTCFullYear()}`;
    }
  }
}

export { DealsHelper };
