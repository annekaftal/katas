function isYearValid(y) {
  if (y > 999 && y < 9999) {
    return true;
  } else {
    return false;
  }
}

function maxDaysinMonth(d, m) {
  const oddMonths = ["01", "03", "05", "07", "08", "10", "12"];
  const evenMonths = ["04", "06", "09", "11"];
  const february = "02";

  if (oddMonths.includes(m) && d <= 31) {
    return true;
  } else if (evenMonths.includes(m) && d <= 30) {
    return true;
  } else if (m === february && d <= 28) {
    return true;
  } else {
    return false;
  }
}

function isValidDate(string) {
  let day = string.slice(0, 2);
  let firstSlash = string.slice(2, 3);
  let month = string.slice(3, 5);
  let secondSlash = string.slice(5, 6);
  let year = string.slice(6, 10);

  if (
    maxDaysinMonth(day, month) &&
    firstSlash === "/" &&
    secondSlash === "/" &&
    isYearValid(year)
  ) {
    return true;
  } else {
    return false;
  }
}

function isPalindrome(string) {
  let onlyDigits = string.split("/").join("");
  let digitMatches = 0;
  for (let i = 0; i < 4; i++) {
    if (onlyDigits[i] === onlyDigits[7 - i]) {
      digitMatches += 1;
    }
  }
  if (digitMatches === 4) {
    return true;
  } else {
    return false;
  }
}

function getNextPalindromes(x) {
  let palindromeCount = 0;
  let date = new Date();
  while (palindromeCount < x) {
    date.setDate(date.getDate() + 1);
    let newDate = date.toLocaleDateString();
    if (isPalindrome(newDate)) {
      console.log(newDate);
      palindromeCount += 1;
    }
  }
}

function isDatePalindrome(string) {
  if (isValidDate(string) && isPalindrome(string)) {
    console.log("Date palindrome");
    return true;
  } else {
    console.log("Not a date palindrome");
    return false;
  }
}

getNextPalindromes(3);
isDatePalindrome("16/02/2061");
