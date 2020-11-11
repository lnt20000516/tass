export function YMD(timeStamp) {
  let date = new Date(timeStamp);
  let year = date.getFullYear();
  let mouth = date.getMonth() + 1;
  let day = date.getDate();
  // if (mouth < 10) {
  //   mouth = "0" + mouth
  // }
  // if (day < 10) {
  //   day = "0" + day;
  // }
  // return year + "-" + mouth + "-" + day
  year=year+"";
  year=year.substring(2)
  return day + "/" + mouth + "/" + year
}

export function timeStamp(YMD) {
  let date = new Date(YMD);
  return date.getTime();
}