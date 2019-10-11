/*
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

    The town judge trusts nobody.
    Everybody (except for the town judge) trusts the town judge.
    There is exactly one person that satisfies properties 1 and 2.

You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
  let result = -1;
  let truster = [];
  let trusted = [];
  for (let index = 0; index < trust.length; index++) {
    let tempTrust = trust[index];
    for (let inner = 0; inner < tempTrust.length; inner++) {
      if (inner === 0) {
        truster.push(tempTrust[inner]);
      }
      if (inner === 1) {
        trusted.push(tempTrust[inner]);
      }
    }
  }

  trusted.forEach(element => {
    let counter = 0;
    if (truster.includes(element)) {
      //console.log(element, 'included');
      //count occourance of element
      //console.log(trustVolume(element, truster));
      return result;
    } else if (!trustVolume(element, truster)) {
      return result;
    } else {
      result = element;
    }
  });

  //console.log(truster);
  return result;
};
let trustVolume = function(argElement, argTrusters) {
  // return boolean of wether or not trusted is dominant among trusters
  let isWorthy = 0;
  for (let t = 0; t < argElement.length; t++) {
    if (element === argElement[t]) isWorthy += 1;
  }

  return isWorthy > argElement.length - 1 ? true : false;
};
let trust1 = [[1, 3], [2, 3], [3, 1]];
let people1 = 3;
//Output: -1

let trust2 = [[1, 3], [2, 3]];
let people2 = 3;
//Output: 3

let trust3 = [[1, 3], [1, 4], [2, 3], [2, 4], [4, 3]];
let people3 = 4;
//Output: 3

let trust4 = [[1, 2], [2, 3]];
let people4 = 3;
//output: -1

console.log(findJudge(people1, trust1));
console.log(findJudge(people2, trust2));
console.log(findJudge(people3, trust3));
console.log(findJudge(people4, trust4));
