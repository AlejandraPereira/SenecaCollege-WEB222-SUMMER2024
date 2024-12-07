/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <YOUR_NAME>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date: <SUBMISSION_DATE>
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the src/problem-00.test.js file.
 * Start by reading the comment at the top of that file, then come back here and
 * continue.
 *
 * Make sure you have completed the necessary Setup (install node.js, run `npm install`
 * before continuing).  The rest of the instructions assume that you have done this.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, go to your terminal and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this problem instead of everything. To do that:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one fails:
 *
 * ✕ greeting should return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the second test 'greeting should return the correct string output'
 * is failing. In particular, it's failing because it expected to get the string
 * "Hello WEB222 Student!" but instead it actually received the string "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it below, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment, and also read the tests
 * to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that define parameters to functions,
 * and tell us the type (e.g., {string} or {number}), and also the parameter's name.
 * We also indicate the return type for functions.
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}
console.log(greeting('Hello WEB222 Student!'));

/*******************************************************************************
 * Problem 1: convert strings in kebab-case to lowerCamelCase or UpperCamelCase.
 *
 * HTML and CSS developers often use kebab-case when naming classes or ids. In
 * JavaScript, we use lowerCamelCase (first letter lower case) or UpperCamelCase
 * (first letter Upper case) instead.
 *
 * You will write a function named toCamelCase() that accepts a string argument
 * and converts it from kebab-case to camelCase.  The optional second argument
 * determines whether or not to produce UpperCamelCase or not.
 *
 * The toCamelCase() function should work like this:
 *
 * toCamelCase('variable') returns 'variable'
 * toCamelCase('variable-name') returns 'variableName'
 * toCamelCase('variable-name', true) returns 'VariableName' ()
 * toCamelCase('long-variable-name') returns 'longVariableName'
 * toCamelCase('multiple---dashes') returns 'multipleDashes'
 *
 * Hint:
 *
 * The String methods toUpperCase(), toLowerCase(), split(), and slice()
 * would be helpful for this.
 *
 * @param {string} name - a string variable name to be converted
 * @param {boolean} uppercase - (optional) whether to convert to UpperCamelCase
 *                              defaults to `false`
 * @return {string} - the converted camelCase version of the variable name
 ******************************************************************************/

function toCamelCase(name, uppercase = false) {
  let letters = name.split('-');
  if (letters.length > 0) {
    if (uppercase) {
      letters[0] = letters[0][0].toUpperCase() + letters[0].slice(1).toLowerCase();
    } else {
      letters[0] = letters[0].toLowerCase();
    }
  }

  for (let i = 1; i < letters.length; i++) {
    if (letters[i].length > 0) {
      letters[i] = letters[i][0].toUpperCase() + letters[i].slice(1).toLowerCase();
    }
  }
  return letters.join('');
}
console.log(toCamelCase('variable')); // 'variable'
console.log(toCamelCase('variable-name')); // 'variableName'
console.log(toCamelCase('variable-name', true)); // 'VariableName'
console.log(toCamelCase('long-variable-name')); // 'longVariableName'
console.log(toCamelCase('multiple---dashes')); // 'multipleDashes'

/*******************************************************************************
 * Problem 2: create an HTML <link> element with the given href and rel values.
 *
 * In HTML, a <link> element is used to link to external stylesheets, establish
 * icon for web page, etc. For example: to link a CSS stylesheet, we would use
 * the following <link> tag:
 *
 *   <link rel="stylesheet" href="styles.css">
 *
 * See the following for more details about the <link> tag:
 *
 *  - https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
 *
 * Write a function named createLinkTag() which accepts both rel and href values.
 * It should use these values to produce a new <link> tag string. For example:
 *
 * createLinkTag('stylesheet', 'styles.css')
 *
 * should return the following string of HTML:
 *
 * '<link rel="stylesheet" href="styles.css">'
 *
 * Make sure you remove any leading or trailing whitespace from the rel and href
 * values before you use them.
 *
 * createLinkTag('stylesheet', '          styles.css              ')
 *
 * should return the following string of HTML:
 *
 * '<link rel="stylesheet" href="styles.css">'
 *
 * Also, the double-quotes around rel and href are optional if the value
 * does NOT contain any of the following characters: space, tab, new line, line feed:
 *
 * '<link rel="stylesheet" href="styles.css">'
 * '<link rel=stylesheet href="styles.css">'
 *
 * When creating your string, only include double-quotes when necessary.
 *
 * Hint:
 *
 * You can use a Regular Expression to test for the special characters.
 * For example, /[bd]/.test("abcd") would return true, since both the
 * characters b and d are present in the string "abcd".  Special characters
 * like a newline use an escape: \n
 *
 * @param {string} rel - the value for the rel attribute
 * @param {string} href - the value for the href attribute
 * @returns {string} - a properly formatted <link> tag
 ******************************************************************************/

function createLinkTag(rel, href) {
  let relFirst = 0;
  let relEnd = rel.length - 1;
  let hrefFirst = 0;
  let hrefEnd = href.length - 1;
  let relFinal = '';
  let hrefFinal = '';

  // Delete white spaces/tabs and the beggining and the end of rel
  while ((relFirst < rel.length && rel[relFirst] === ' ') || rel[relFirst] === '\t') {
    relFirst++;
  }
  while ((relEnd >= 0 && rel[relEnd] === ' ') || rel[relEnd] === '\t') {
    relEnd--;
  }

  for (let i = relFirst; i <= relEnd; i++) {
    relFinal += rel[i];
  }

  // Delete white spaces/tabs and the beggining and the end of href
  while ((hrefFirst < href.length && href[hrefFirst] === ' ') || href[hrefFirst] === '\t') {
    hrefFirst++;
  }
  while ((hrefEnd >= 0 && href[hrefEnd] === ' ') || href[hrefEnd] === '\t') {
    hrefEnd--;
  }

  for (let i = hrefFirst; i <= hrefEnd; i++) {
    hrefFinal += href[i];
  }
  //regex to see if "" are needed
  const charactersRegex = /[\t\n\f\r"'<>` ]/;
  const relQuotes = charactersRegex.test(relFinal);
  const hrefQuotes = charactersRegex.test(hrefFinal);

  // build link
  let linkTag = '<link ';
  linkTag += relQuotes ? `rel="${relFinal}" ` : `rel=${relFinal} `;
  linkTag += hrefQuotes ? `href="${hrefFinal}">` : `href=${hrefFinal}>`;

  return linkTag;
}

console.log(createLinkTag('stylesheet', 'styles.css'));
console.log(createLinkTag('stylesheet', 'styles.css              '));

/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted in one of the following formats:
 *
 * 1. YYYY/MM/DD
 * 2. DD/MM/YYYY
 *
 * Here, the Year (4 digits) may be listed first or last.  The Month (2 digits)
 * will always be in the middle position, and the Day (2 digits) will either
 * be last (when Year is first) or first (when Year is last).
 *
 * January 15, 2023 could therefore be represented in either of the following
 * formats:
 *
 * 2023/01/15
 * 15/01/2023
 *
 * Write a function, parseDateString() that accepts a date string of the formats
 * specified above, and returns a new JavaScript Date Object, set to the correct
 * day. Make sure that the `value` you are passed is a String before using it
 * and throw an error if it isn't (see below).
 *
 * In your solution, you will need to use use the following Date methods:
 *
 * - new Date() - creates a new Date Object
 * - setFullYear() - sets the Date Object's year value
 * - setMonth() - sets the Date Object's month value
 * - setDate() - sets the Date Object's day value
 *
 * To help developers using your function, you are also asked to provide detailed
 * error messages when the date string is formatted incorrectly.  We will use the
 * `throw` statement to throw a new Error object when a particular value is not
 * what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01/01/01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021/1/01') should fail because
 * the day is not 2 digits, and parseDateString('2021/01/1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also cause an exception to be thrown,
 * for example parseDateString(null) or parseDateString("this is totally wrong").
 *
 *
 * @param {string} value - a date string
 * @returns {Date}
 ******************************************************************************/

function parseDateString(value) {
  // Check if the value is a string
  if (typeof value !== 'string') {
    throw new Error(
      'invalid date string, expected a `YYYY/MM/DD` or `DD/MM/YYYY` formatted string'
    );
  }
  const parts = value.split('/');

  // Extract year, month, and day
  let year, month, day;
  if (parts[0].length === 4) {
    // Format: YYYY/MM/DD
    year = parseInt(parts[0]);
    month = parseInt(parts[1]);
    day = parseInt(parts[2]);
  } else if (parts[2].length === 4) {
    // Format: DD/MM/YYYY
    year = parseInt(parts[2]);
    month = parseInt(parts[1]);
    day = parseInt(parts[0]);
  }

  //see if the correct format is entered
  const correctFormat =
    (parts[0].length === 4 && parts[1].length === 2 && parts[2].length === 2) ||
    (parts[0].length === 2 && parts[1].length === 2 && parts[2].length === 4);

  if (!correctFormat) {
    throw new Error(
      'Invalid date string format. Day and month should have two digits each, and year should have four digits.'
    );
  }

  if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error('Invalid dates!! Do it again.');
  }
  // Create a new Date object
  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1);
  date.setDate(day);

  return date;
}

// Test

/*******************************************************************************
 * Problem 4: format a Date Object to use a given date string format.
 *
 * Building on your work in Problem 3 above, we want to be able to take a Date
 * object, and format it into a string using one of the following 3 formats:
 *
 * 1. YYYY/MM/DD
 * 2. DD/MM/YYYY
 * 3. MM/DD/YYYY
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object and a date string
 * format (e.g., "YYYY/MM/DD", "DD/MM/YYYY", or "MM/DD/YYYY"), and returns a date
 * string formatted according to the supplied format. Make sure your day and month
 * values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * If something other than a valid Date Object is passed as the first argument,
 * trying to call the Date methods will fail.  You should use try/catch and
 * throw a new Error object with an appropriate error message if this happens.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * If the date string format is not one of the 3 listed above, throw a new Error
 * with an appropriate error message explaining the problem.
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021/01/29), "YYYY/MM/DD") should return '2021/01/29'
 * toDateString(parseDateString('2021/01/29), "DD/MM/YYYY") should return '29/01/2021'
 * toDateString(parseDateString('29/01/2021), "MM/DD/YYYY") should return '01/29/2021'
 *
 * @param {Date} value - a Date Object to be formatted
 * @param {string} format - a format string, one of "YYYY/MM/DD", "DD/MM/YYYY", or "MM/DD/YYYY"
 * @returns {string} - the formatted date string
 ******************************************************************************/
function toDateString(value, format) {
  if (!(value instanceof Date) || isNaN(value.getTime())) {
    throw new Error('Invalid Date Object');
  }

  const year = value.getFullYear();
  let month = value.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let day = value.getDate();
  if (day < 10) {
    day = '0' + day;
  }

  switch (format) {
    case 'YYYY/MM/DD':
      return `${year}/${month}/${day}`;
    case 'DD/MM/YYYY':
      return `${day}/${month}/${year}`;
    case 'MM/DD/YYYY':
      return `${month}/${day}/${year}`;
    default:
      throw new Error('Unknown date string format');
  }
}

/*******************************************************************************
 * Problem 5: parse a time from a digital clock
 *
 * A digital clock displays time in the format "HH:MM:SS". However, in a dataset
 * collected over the years, different authors have used slightly different
 * formats. Both of the following are valid and need to be parsed:
 *
 * 1. "01:30:00 PM"
 * 2. "13:30:00"
 *
 * In the first case, the values are followed by `AM` or `PM`. In the second, the values
 * are in 24-hour format.
 *
 * Valid Hour values are positive integers between 1 and 12 for AM/PM format and 0 and 23 for 24-hour format.
 *
 * Valid Minute and Second values are positive integers between 0 and 59.
 *
 * If the input is invalid, return the value null.
 *
 * Parse the value and return a new string in 24-hour format using the following form:
 *
 * "(hours, minutes, seconds)"
 *
 * @param {string} value - a time string in one of the given forms
 * @returns {string|null} - a 24-hour time formatted as "(hours, minutes, seconds)"
 *                          or `null` if the duration isn't valid/recognized
 */

function normalizeTime(value) {
  const side = value.split(':');
  const [hoursStr, minutesStr, secondsStr] = side;
  let hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);
  const seconds = parseInt(secondsStr, 10);

  if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
    return null;
  }

  if (hours < 0 || minutes < 0 || seconds < 0 || minutes > 59 || seconds > 59) {
    return null;
  }

  const isAMPMFormat = value.includes('AM') || value.includes('PM');

  // Adjust hours for AM/PM format
  if (isAMPMFormat) {
    if (hours < 1 || hours > 12) {
      return null;
    }
    if (value.includes('PM') && hours < 12) {
      hours += 12;
    } else if (value.includes('AM') && hours === 12) {
      hours = 0;
    }
  } else {
    // 24-hour format
    if (hours < 0 || hours > 23) {
      return null;
    }
  }

  return `(${hours}, ${minutes}, ${seconds})`;
}

console.log(normalizeTime('13:30:00'));
console.log(normalizeTime('1:30:00'));
console.log(normalizeTime('13:30:00 PM'));
console.log(normalizeTime('24:30:00 PM'));
console.log(normalizeTime('13:60:00'));
console.log(normalizeTime('14:30:60'));

/*******************************************************************************
 * Problem 6: format any number of times as a list in a string
 *
 * You are asked to format times (hour, min, sec) in a list using your
 * normalizeTime() function from problem 5.
 *
 * Where normalizeTime() takes a single duration string, the formatTimes()
 * function takes a list of *any* number of time strings, parses them,
 * filters out any invalid ones, and creates a list.
 *
 * For example: given the following times, "1:13:02" and "4:16:24 PM",
 * a new list would be created of the following form "((1, 13, 2), (16, 16, 24))".
 *
 * Notice how the list has been enclosed in [...] square brackets, and each
 * duration is separated by a comma and space.
 *
 * The formatTimes() function can take any number of arguments, but they must all
 * be strings. If any of the values can't be parsed by normalizeTime() (i.e., if
 * it returns null), skip the value. For example:
 *
 * formatDurations("1:13:02", "300:600:900", "4:16:24 PM") should return
 * "((1, 13, 2), (16, 16, 24))" and skip the invalid time.
 *
 * @param {number} arguments - any number of string duration arguments can be passed
 * @returns {string}
 ******************************************************************************/

function formatTimes(...values) {
  const validTimes = values.map(normalizeTime).filter((time) => time !== null);
  const validList = `[${validTimes.join(', ')}]`;

  return validList;
}
console.log(formatTimes('4:26:24 PM'));
console.log(formatTimes('1:16:24', '1:16:25', '1:16:26'));
console.log(formatTimes('4:16:24 PM', '4:16:25 AM'));
console.log(formatTimes('4:16:24', '60:60:60', '100:100:100', '4:16:25 AM'));
console.log(formatTimes('60:60:60', '100:100:100'));

/*******************************************************************************
 * Problem 7: determine the MIME type from a filename
 *
 * To identify the type of a file, the Operating System looks at the filename and
 * extension.  The OS needs to know the file type to open it with the correct
 * program.
 *
 * Write a function, mimeTypeFromFilename(), which should take a filename and return the
 * MIME type of the file it is (e.g., 'text/plain', 'image/jpeg', 'video/mp4', etc.),
 * based on the following extensions:
 *
 * - .txt --> 'text/plain'
 * - .html, .htm --> 'text/html'
 * - .css --> 'text/css'
 * - .js --> 'application/javascript'
 * - .jpg, .jpeg --> 'image/jpeg'
 * - .png --> 'image/png'
 * - .gif --> 'image/gif'
 * - .bmp --> 'image/bmp'
 * - .svg --> 'image/svg+xml'
 * - .json --> 'application/json'
 * - .xml --> 'application/xml'
 * - .csv --> 'text/csv'
 *
 * NOTE: any other extension should return 'application/octet-stream', to indicate that it is an
 * unknown file type. You should also use 'application/octet-stream' if the file has no extension.
 *
 * @param {string} filename - a filename
 * @returns {string}
 ******************************************************************************/

function mimeTypeFromFilename(filename) {
  const extension = filename.split('.').pop();
  switch (extension) {
    case 'txt':
      return 'text/plain';
    case 'html':
      return 'text/html';
    case 'htm':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'js':
      return 'application/javascript';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'png':
      return 'image/png';
    case 'gif':
      return 'image/gif';
    case 'bmp':
      return 'image/bmp';
    case 'svg':
      return 'image/svg+xml';
    case 'json':
      return 'application/json';
    case 'xml':
      return 'application/xml';
    case 'csv':
      return 'text/csv';
    default:
      return 'application/octet-stream';
  }
}

console.log(mimeTypeFromFilename('doc.txt')); // Output: 'text/plain'
console.log(mimeTypeFromFilename('index.html')); // Output: 'text/html'
console.log(mimeTypeFromFilename('index.htm')); // Output: 'text/html'
console.log(mimeTypeFromFilename('styles.css')); // Output: 'text/css'
console.log(mimeTypeFromFilename('script.js')); // Output: 'application/javascript'
console.log(mimeTypeFromFilename('photo.jpg')); // Output: 'image/jpeg'
console.log(mimeTypeFromFilename('photo.jpeg')); // Output: 'image/jpeg'
console.log(mimeTypeFromFilename('photo.png')); // Output: 'image/png'
console.log(mimeTypeFromFilename('animation.gif')); // Output: 'image/gif'
console.log(mimeTypeFromFilename('graphic.bmp')); // Output: 'image/bmp'
console.log(mimeTypeFromFilename('chart.svg')); // Output: 'image/svg+xml'
console.log(mimeTypeFromFilename('data.json')); // Output: 'application/json'
console.log(mimeTypeFromFilename('data.xml')); // Output: 'application/xml'
console.log(mimeTypeFromFilename('data.csv')); // Output: 'text/csv'
console.log(mimeTypeFromFilename('file.exe')); // Output: 'application/octet-stream'
console.log(mimeTypeFromFilename('library.dll')); // Output: 'application/octet-stream'
console.log(mimeTypeFromFilename('/public/site/www/cat.jpg')); // Output: 'image/jpeg'
console.log(mimeTypeFromFilename('C:\\Documents\\Seneca\\WEB222\\students.csv')); // Output: 'text/csv'
console.log(mimeTypeFromFilename('/this path/has quite a/few spaces/doc.txt')); // Output: 'text/plain'
console.log(mimeTypeFromFilename('/this.path/has.quite.a/few.periods/dog.png')); // Output: 'image/png'
console.log(mimeTypeFromFilename('../names.json')); // Output: 'application/json'
console.log(mimeTypeFromFilename('/this/file/has/no/extension')); // Output: 'application/octet-stream'
console.log(mimeTypeFromFilename('/this/file/has/an/unknown/extension.cgi')); // Output: 'application/octet-stream'

/*******************************************************************************
 * Problem 8 - build a REST API endpoint
 *
 * Accessing a web data API over the internet often involves formatting a URL
 * for a specific REST API endpoint. As we know from week 1, a REST API endpoint
 * is a specific URL where an API can be accessed. For example:
 *
 *   /users/123 includes the resource type 'users' and the specific user id '123'
 *   /products/a1e56 includes the resource type 'products' and the product id 'a1e56'
 *
 * Write a buildApiEndpoint() function to build a REST API endpoint based on arguments
 * passed by the caller.
 *
 * The buildApiEndpoint() function accepts the following arguments:
 *
 * - resourceType: a string indicating the type of resource, for example "users" or "products"
 * - resourceId: a string or number indicating the specific resource id, for example "123" or 456
 * - extraData: (optional) a string representing additional information about the resource,
 *   which needs to be URI encoded
 *
 * Write an implementation of buildApiEndpoint() that accepts arguments for all of the above
 * parameters, validates them (e.g., all arguments must be provided and non-empty), and returns
 * a properly formatted API endpoint.
 *
 * For example:
 *
 * buildApiEndpoint('users', '123') would return the following API endpoint:
 *
 * '/users/123'
 *
 * buildApiEndpoint('users', '123', 'John Doe') would return the following API endpoint:
 *
 * '/users/123/John%20Doe'
 *
 * NOTE: if any of the values passed to buildApiEndpoint() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the extraData value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} resourceType the type of resource.
 * @param {string|number} resourceId the specific resource id.
 * @param {string} extraData (optional) additional information about the resource.
 * @returns {string} the properly formatted API endpoint
 ******************************************************************************/

function buildApiEndpoint(resourceType, resourceId, extraData) {
  const isValid = !(
    !resourceType ||
    !resourceId ||
    resourceId === '' ||
    (extraData !== undefined && extraData === '')
  );

  if (!isValid) {
    throw new Error('Both resourceType and resourceId must be provided and non-empty.');
  }

  let endpoint = `/${resourceType}/${resourceId}`;

  if (extraData) {
    endpoint += `/${encodeURIComponent(extraData)}`;
  }

  return endpoint;
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;
exports.toCamelCase = toCamelCase;
exports.createLinkTag = createLinkTag;
exports.parseDateString = parseDateString;
exports.toDateString = toDateString;
exports.normalizeTime = normalizeTime;
exports.formatTimes = formatTimes;
exports.mimeTypeFromFilename = mimeTypeFromFilename;
exports.buildApiEndpoint = buildApiEndpoint;
