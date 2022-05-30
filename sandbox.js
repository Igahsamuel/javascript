
// names section
  const ul = document.querySelector('.people');
  const people = ['Austin Tonayam (Team Leader)', 'Amos Thibault Blkari', 'Izima Obisike', 'Susan Chepkosgel', 'Igah Abiye', 'Aladesuru Oriyomi', 'Susan Mwende'];
  let html =``;
  people.forEach(person => {
      html += `<li style="color: green"><i class="fa fa-user" aria-hidden="true"></i>${person}</li>`
  });
  console.log(html);
  ul.innerHTML = html;

  const members = ['Austin Tonayam (Team-leader)', 'Amos Thibault Blkari', 'Izima Obisike', 'Susan Chepkosgel', 'Igah Abiye', 'Aladesuru Oriyomi', 'Susan Mwende'];
  console.log(members[4]);

// Object section
  let user = {
    firstname:'Igah',
    lastname:'Abiye',
    Bestmovie:'Halo',
    Bestfood:'Beans and Bread',
    Complexion:'Dark',
    Birthmonth:'January',
    state:'Rivers',
    groupName:'Team Ares'
};
console.log(user);
console.log(user.Bestmovie);

// using concatenation method
const noun = "Adriel";
const verb = "jumbed";
let first = noun + ' ' + verb + ' the fense';
console.log(first);

const mNoun = "Micheal";
const mVerb = "ate";
let second = mNoun + ' ' + mVerb + ' the meatpie';
console.log(second);

const pNoun = "Chimaobi";
const pverb = "washed";
let third = pNoun + ' ' + pverb + ' the dishes';
console.log(third);

const qNoun = "Emma";
const qverb = "Stole";
let fourth = qNoun + ' ' + qverb + ' the computer';
console.log(fourth);

const gNoun = "Amaka";
const gverb = "ran";
let fifth = gNoun + ' ' + gverb + ' into trouble';
console.log(fifth);


// remainder of division
function calcRemainder(a, b) {
    return a % b;
  }
  
  console.log(calcRemainder(10, 4));

//Quadratic equation formula
function getRoots(a, b, c) {
    // represent x = (- b +- √b^2-4ac)/2a as x = (b1 +- c1)/a1 
    const numeratorRoot = Math.sqrt((b * b) - 4 * a * c);
    const denominator = 2 * a;
    const root1 = (-b + numeratorRoot) / denominator;
    const root2 = (+b + numeratorRoot) / denominator;
    return [root1, root2];
}  

//
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlacks =  myAdjective + ' ' + myNoun + ' ' + myVerb + ' ' + myAdverb;
console.log(wordBlacks);


// Area of a circle
const calcArea = function(radius){
    let area = 3.142*radius**2;
    return area;
};
const area = calcArea(9);
console.log(area);

// simple interest
const P = 8200;
const R = 17.5;
const T = 2.5;
let interest = (P * R * T)/100;
console.log(interest);

//reminder
let result = 10 % 4;
console.log(result);


// merits and nutjobs weight for data 1
const mw = 78;
const mh = 1.69;
let meritResult = (mw)/mh**2;
console.log(meritResult);

const nw = 92;
const nh = 1.95;
let nutjobsResult = (nw)/nh**2;
console.log(nutjobsResult);

const meritHigherBMI = meritResult > nutjobsResult;
console.log(meritHigherBMI);

// nutjobs and merits weight for data 2
const nws = 95;
const nhs = 1.88;
let nutjobsBMI = (nws)/nhs**2;
console.log(nutjobsBMI);

const mws = 85;
const mhs = 1.76;
let meritBMI = (mws)/mhs**2;
console.log(meritBMI);

const merit2HigherBMI = meritBMI > nutjobsBMI;
console.log(merit2HigherBMI);