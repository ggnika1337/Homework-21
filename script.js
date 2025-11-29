// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":

let firstNumber = 0;
for (let index = 1; index <= 15; index++) {
  if (index > 5) {
    console.log(index + " - number is bigger then 5");
  } else {
    console.log(index);
  }
}

// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:

console.log("");

let numbers = [3, 6, 9, 12, 15];
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    console.log(numbers[index] + " is even");
  } else {
    console.log(numbers[index] + " is odd");
  }
}

// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:
// ver gavige

// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:

let colors = ["red", "green", "blue", "yellow"];

for (let index = 0; index < colors.length; index++) {
  if (colors[index].length > 5) {
    console.log(colors[index] + " is a big color");
  } else {
    console.log(colors[index] + " is a small color");
  }
}

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":

let number = [];
for (let index = 0; index < 49; index++) {
  number.push(index + 1);
  if (number[index] % 7 === 0) {
    console.log(number[index] + " can divide by 7");
  } else {
  }
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:

let multiplyByTwo = [4, 8, 12, 16, 20];
for (let index = 0; index < multiplyByTwo.length; index++) {
  console.log(`${multiplyByTwo[index]} * 2 = ${multiplyByTwo[index] * 2}`);
}

// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';
// for (let i = 0; i < word.length; i++))

let word = "javascript";
for (let i = 0; i < word.length; i++) {
  if (word[i] !== "j") {
    console.log(word[i]);
  }
}

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:

let massiveNumbers = [5, 10, 15, 20, 25];
for (let index = 0; index < massiveNumbers.length; index++) {
  if (numbers[index] % 5 === 0) {
    console.log(massiveNumbers[index] + " can be divided by 5");
  } else {
    console.log(massiveNumbers[index] + " cant be divided by 5");
  }
}

// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':

let secondWord = "hello world";
for (let i = 0; i < secondWord.length; i++) {
  if (secondWord[i] !== "o") {
    console.log(secondWord[i]);
  }
}

// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:

let soMassiveNumbers = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < soMassiveNumbers.length; index++) {
  if (soMassiveNumbers[index] % 2 === 0) {
    console.log(soMassiveNumbers[index] + (soMassiveNumbers[index] % 2 === 0));
  } else {
  }
}

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100
// )

let tenNumber = 10;
let multiplyTen = [];
for (let index = 1; index <= 10; index++) {
  multiplyTen.push(index);
  console.log(`10 * ${index} = ${tenNumber * index}`);
}

// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:

let afterFour = [2, 7, 4, 9, 5];
for (let index = 0; index < afterFour.length; index++) {
  if (afterFour[index] > 4) {
    console.log(`${afterFour[index]} * 3 = ${afterFour[index] * 3}`);
  } else {
    console.log(`${afterFour[index]} is lower than 4`);
  }
}

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი
// ტექსტის დაბეჭდვა:

let wowNumber = [];
for (let index = 0; index < 30; index++) {
  wowNumber.push(index + 1);
  if (wowNumber[index] > 10) {
    console.log(wowNumber[index] + " number is higher than 10");
  } else {
    console.log(wowNumber[index] + " number is not higher than 10");
  }
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:

let wordFront = "frontend";
for (let index = 0; index < word.length; index++) {
  if (wordFront[index] !== "e") {
    console.log(wordFront[index]);
  } else {
    console.log("found e");
  }
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:

let bigNumbers = [100, 200, 300, 400, 500];
for (let index = 0; index < bigNumbers.length; index++) {
  if (bigNumbers[index] < 250) {
    console.log(bigNumbers[index]);
  }
}
