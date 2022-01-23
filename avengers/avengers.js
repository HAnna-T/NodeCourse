const heroes_names = [
  "Madonna Rippin",
  "Miss Jamie Prohaska",
  "Dr. Izaiah Russel",
  "Mr. Cortney Guªann",
  "Mrs. Sam Murazik",
  "Heaven Padberg",
  "Marjolaine Bayer",
  "Alverta Hansen",
  "Keira Watsica",
  "Cole Stiedemann",
];
const villains_names = [
  "Cole Stiedemann",
  "Sarai Dare",
  "Maverick Bartell",
  "Selmer Bauch",
  "George Bogisich",
  "Edwardo Wiza",
  "Mr. Dovie Glover",
  "Arno Turner",
  "Maureen Goldner",
  "Romaine Hahn V",
];

class Gamer {
  constructor(name, speed, health, power) {
    this.name = name;
    this.speed = speed;
    (this.health = health), (this.power = power);
  }
}
const heroes = [];
const villains = [];

function groups(names, arr) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    let speed = (Math.random() * 5 + 1).toFixed(1);
    let health = 100;
    let power = (Math.random() * 10 + 1).toFixed(1);
    arr.push(new Gamer(name, speed, health, power));
  }

  return arr;
}
groups(villains_names, villains);
groups(heroes_names, heroes);

function attack(attacker, defender) {
  defender.health = defender.health - attacker.power;
  if (defender.health === 0) {
    console.log(`${defender.name} died`);
  } else {
    console.log(
      `${attacker.name}[${attacker.health}] hits ${defender.name}[${defender.health}] with a power of ${attacker.power}`
    );
  }

}

function game(attackerGroup, defenderGroup) {
  if (attackerGroup.length === 0) {
    console.log(`${defenderGroup} win`);
  }
  if (defendeGroup.length === 0) {
    console.log(`${attackerGroup} win`);
  }
  for (let i = 0; i < defenderGroup.length; i++) {
    let randomItem = Math.floor(Math.random() * 10);
    if (defenderGroup[i].health === 0) {
      defenderGroup.splice(i, 1);
    }
    let time = (1 / attackerGroup[i].speed) * 5;
    setTimeout(attack(attackerGroup[i], defenderGroup[randomItem]), time);
  }
}







// attack(heroes[0], villains[2]);

// name: "Madonna Rippin",
//     speed: Math.floor(Math.random() * 5 + 1),
//     health: 100,
//     power: Math.floor(Math.random() * 10 + 1),
// console.log(villains_names.length);
// console.log(heroes_names.length);

// function attack(attacker, defender) {
//   for (let i = 0; i < heroes.length; i++) {
//     let randomItem = Math.floor(Math.random() * 10);

//     defender[randomItem].health =
//       defender[randomItem].health - attacker[i].power;

//     console.log(defender[randomItem].health);
//     if (defender.length === 0) {
//       console.log(`${attacker.name} win`);
//       return;
//     } else if (attacker.length === 0) {
//       console.log(`${defender.name} win`);
//     }
//     if (defender[randomItem].health === 0) {
//       console.log(`${defender[randomItem].name} dies`);
//       defender.splice(randomItem, 1);
//     } else {
//       console.log(
//         `${attacker[i].name}[${attacker[i].health}] hits ${defender[randomItem].name}[${defender[randomItem].health}] with a power of ${attacker[i].power}`
//       );
//     }
//   }
// }

// setTimeout(attack(heroes, villains), 0);
// setTimeout(attack(villains, heroes), 0);
