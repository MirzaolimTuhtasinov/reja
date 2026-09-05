// MIT TASK C =>

  class Shop  {
    constructor(non, lagmon, cola) {
      this.non = non;
      this.lagmon = lagmon;
      this.cola = cola;
    }

    qoldiq() {
      const moment = require("moment");
      const time = moment().format("HH:mm");
      
      console.log(`Hozir ${time}'da ${this.non}'ta non, ${this.lagmon}'ta lagmon va ${this.cola}'ta cola mavjud`);
    };


    qabul(input, value) {
      if(input === "non") {
        this.non += value;
      } else if(input === "lagmon") {
        this.lagmon += value;
      } else if(input === "cola") {
        this.cola += value;
      }
    };
    sotish(input, value) {
      if(input === "non") {
        this.non -= value;
      } else if(input === "lagmon") {
        this.lagmon -= value;
      } else if(input === "cola") {
        this.cola -= value;
      }
    };

  }

  const osh = new Shop(4, 5, 2);

  osh.sotish("non", 3);
  osh.qabul("cola", 4);

  osh.qoldiq();

















// // MIT TASK B
  
// function countDigits(given) {
//   let digits = 0;

//   for(let i = 0; i < given.length; i++) {
//     if(given[i] >= 0 && given[i] <= 9) {
//       digits++;
//     }       
//   }
//   console.log(digits);

// }
// countDigits("duksanjw28340h9fjnjk309jfcdsc08j3curn3978hcnrjk893nibu");

// countDigits("3124dwed");


/*
// MIT TASK A
let count = 0;
function countLetters(letter, word) {
    for(let i = 0; i <= word.length + 1; i++) {
        if(letter === word[i]) {
            count++;
        };
    }
    console.log(`The word ${word} has ${count} ${letter}`);
    count = 0;
};

countLetters("n", "engineer");


console.log("Jack Ma maslahatlari");

const list = [
  "yaxshi talaba bo'ling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", //20-30
  "uzingiz uchun ishlashni boshlang", //30-40
  "siz kuchli bolgan narsalarni qiling", //40-50
  "yoshlarga investitsiya qiling", //50-60
  "endi dam oling, foydasi yoq endi", //60
];


// Callback funtion
function maslahatBering(a, callback ) {
    if(typeof a !== "number") callback("insert a number", null);
    else if(a <= 20) callback(null, list[0]);
    else if(a > 20 && a <= 30) callback(null, list[1]);
    else if(a > 30 && a <= 40) callback(null, list[2]);
    else if(a > 40 && a <= 50) callback(null, list[3]);
    else if(a > 50 && a <= 60) callback(null, list[4]);
    else {
        setTimeout(() => {
            callback(null, list[5]);
        }, 5000);
    }
}

console.log("passed here 0");
maslahatBering(75, (err, data) => {
    if(err) console.log("ERROR:", err);
    console.log("javob:", data);
});
console.log("passed here 1");



Async Function
async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return list[5];
    // setTimeout(() => {
    //     return list[5];
    // }, 5000);
  }
}





// call via then/catch
console.log("passed here 0");
maslahatBering(25)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
  maslahatBering(35)
  .then((data) => {
    console.log("javob:", data);
  })
  .catch((err) => {
    console.log("ERROR:", err);
  });
console.log("passed here 1");



async function maslahatBering(a) {
  if (typeof a !== "number") throw new Error("insert a number");
  else if (a <= 20) return list[0];
  else if (a > 20 && a <= 30) return list[1];
  else if (a > 30 && a <= 40) return list[2];
  else if (a > 40 && a <= 50) return list[3];
  else if (a > 50 && a <= 60) return list[4];
  else {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(list[5]);
    }, 5000);
    })
   
  }
}

// async/await
async function run() {
    let javob = await maslahatBering(65);
    console.log(javob);
    javob = await maslahatBering(32);
    console.log(javob);
    javob = await maslahatBering(42);
    console.log(javob);
};
run();
*/