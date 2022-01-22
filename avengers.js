const heroes = [
  {
    name: "Madonna Rippin",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Miss Jamie Prohaska",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Dr. Izaiah Russel",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Mr. Cortney Guªann",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Mrs. Sam Murazik",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Heaven Padberg",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Marjolaine Bayer",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Alverta Hansen",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Keira Watsica",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Cole Stiedemann",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
];

const villains = [
  {
    name: "Sarai Dare",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Maverick Bartell",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Selmer Bauch",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "George Bogisich",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Edwardo Wiza",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Mr. Dovie Glover",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Arno Turner",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Maureen Goldner",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Romaine Hahn V",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
  {
    name: "Myles Bayer",
    speed: Math.floor(Math.random() * 5 + 1),
    health: 100,
    power: Math.floor(Math.random() * 10 + 1),
  },
];

function attack(attacker, defender) {
  for (let i = 0; i < heroes.length; i++) {
    let randomItem = Math.floor(Math.random() * 10);

    defender[randomItem].health =
      defender[randomItem].health - attacker[i].power;

    console.log(defender[randomItem].health);
    if (defender.length === 0) {
      console.log(`${attacker.name} win`);
      return;
    } else if (attacker.length === 0) {
      console.log(`${defender.name} win`);
    }
    if (defender[randomItem].health === 0) {
      console.log(`${defender[randomItem].name} dies`);
      defender.splice(randomItem, 1);
    } else {
      console.log(
        `${attacker[i].name}[${attacker[i].health}] hits ${defender[randomItem].name}[${defender[randomItem].health}] with a power of ${attacker[i].power}`
      );
    }
  }
}

setTimeout(attack(heroes, villains), 0);
setTimeout(attack(villains, heroes), 0);
