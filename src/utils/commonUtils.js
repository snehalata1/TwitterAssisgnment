/* eslint-disable */
import moment from "moment";


export const GetAge = (dateString) => {
  if (dateString === "") return "-";

  dateString = moment(dateString).format("MM-DD-YYYY");
  var now = new Date();

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(
    dateString.substring(6, 10),
    dateString.substring(0, 2) - 1,
    dateString.substring(3, 5)
  );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var yearString = "";
  var monthString = "";
  var dayString = "";
  let monthAge = "";
  let dateAge = "";
  let ageString = "";
  let yearAge = yearNow - yearDob;

  if (monthNow >= monthDob) monthAge = monthNow - monthDob;
  else {
    yearAge--;
    monthAge = 12 + monthNow - monthDob;
  }

  if (dateNow >= dateDob) dateAge = dateNow - dateDob;
  else {
    monthAge--;
    dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
    years: yearAge,
    months: monthAge,
    days: dateAge,
  };

  if (age.years > 1) yearString = " years";
  else yearString = " year";
  if (age.months > 1) monthString = " months";
  else monthString = " month";
  if (age.days > 1) dayString = " days";
  else dayString = " day";

  if (age.years > 0 && age.months > 0 && age.days > 0)
    ageString =
      age.years +
      yearString +
      ", " +
      age.months +
      monthString +
      ", and " +
      age.days +
      dayString +
      " old.";
  else if (age.years === 0 && age.months === 0 && age.days > 0)
    ageString = "Only " + age.days + dayString + " old!";
  else if (age.years > 0 && age.months === 0 && age.days === 0)
    ageString = age.years + yearString + " old. Happy Birthday!!";
  else if (age.years > 0 && age.months > 0 && age.days === 0)
    ageString =
      age.years + yearString + " and " + age.months + monthString + " old.";
  else if (age.years === 0 && age.months > 0 && age.days > 0)
    ageString =
      age.months + monthString + " and " + age.days + dayString + " old.";
  else if (age.years > 0 && age.months === 0 && age.days > 0)
    ageString =
      age.years + yearString + " and " + age.days + dayString + " old.";
  else if (age.years === 0 && age.months > 0 && age.days === 0)
    ageString = age.months + monthString + " old.";

  if (age.years === 0) return age.months + " months ";
  else return age.years + " years, " + age.months + " months ";
};

export function GetTime(time, minutes) {
  return new Date("01/01/2019 " + getTime(time, minutes)).toLocaleString([], {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function GetTime12Formate(sTime, eTime, minutes) {
  return (
    new Date("01/01/2019 " + sTime)
      .toLocaleString([], { hour: "2-digit", minute: "2-digit" })
      .split(" ")[0] +
    " - " +
    new Date("01/01/2019 " + eTime).toLocaleString([], {
      hour: "2-digit",
      minute: "2-digit",
    })
  );
}

function getTime(time, minutes) {
  var date = new Date(
    new Date("01/01/2019 " + time).getTime() + minutes * 60000
  );
  var hr =
    date.getHours().toString().length === 1
      ? "0" + date.getHours()
      : date.getHours();
  var min =
    date.getMinutes().toString().length === 1
      ? "0" + date.getMinutes()
      : date.getMinutes();
  return hr + ":" + min;
}

