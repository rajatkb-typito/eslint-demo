/** @format */
const fs = require('fs');
const express = require('express'); // no express installed so missing import error

/**
 * Do Something
 *
 * @param {number} timeout
 * @param {Function} cb
 * @returns {number}
 */
function doSomethingRepeated(timeout, cb) {
  return setInterval(cb, timeout);
}

fs.readFileSync('app.js', { encoding: 'utf-8' });

const incr = (b) => 1 + b;

const say = 'Hello';

doSomethingRepeated(100, () => {
  console.log(incr(20), say);
  console.log({ food: 'bar' });
});

/**
 * Class something for something its not used so should throw error
 *
 * @class Something
 */
class Something {
  foo() {
    return 'Foo';
  }
}

// example for secret keys being put
const A_SECRET =
  'ZWVTjPQSdhwRgl204Hc51YCsritMIzn8B=/p9UyeX7xu6KkAGqfm3FJ+oObLDNEva';

const AWS_TOKEN = 'AKIAIUWUUQQN3GNUA88V';

// example of unsafe regular expression
const validateEmailFormat = (string) => {
  var emailExpression = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return emailExpression.test(string);
};

// you can either use safe-regex or limit string length in such cases
const validateEmailFormatSafe = (string) => {
  var emailExpression = /^([\w.\-])+@(([\dA-Za-z\-])+\.)+([\dA-Za-z]{2,4})+$/;
  if (string.length < 10000) return emailExpression.test(string);
  return false;
};
