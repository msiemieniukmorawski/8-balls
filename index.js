let all = {
  balls: [
    {
      name: "A",
      weight: 10
    },
    {
      name: "B",
      weight: 10
    },
    {
      name: "C",
      weight: 10
    },
    {
      name: "D",
      weight: 10
    },
    {
      name: "E",
      weight: 10
    },
    {
      name: "F",
      weight: 10
    },
    {
      name: "G",
      weight: 10
    },
    {
      name: "I",
      weight: 12
    }
  ],

  addWeight: (left, right) => {
    let leftSide, rightSide;

    left.push(all.balls[6]);
    right.push(all.balls[7]);

    leftSide = left.reduce(function(prev, cur) {
      return prev + cur.weight;
    }, 0);

    rightSide = right.reduce(function(prev, cur) {
      return prev + cur.weight;
    }, 0);

    leftSide > rightSide
      ? console.log(`${all.balls[6].name} ball is weighter`)
      : console.log(`${all.balls[7].name} ball is weighter`);
  },

  take: weighterSide => {
    let leftSide, rightSide, rest;
    leftSide = weighterSide[0];
    rightSide = weighterSide[1];
    rest = weighterSide[2];

    if (leftSide.weight === rightSide.weight) {
      console.log(`${rest.name} ball is weighter`);
    } else if (leftSide.weight >= rightSide.weight) {
      console.log(`${leftSide.name} ball is weighter`);
    } else {
      console.log(`${rightSide.name} ball is weighter`);
    }
  }
};

let weight = (left, right, { addWeight, take }) => {
  let leftSide, rightSide;

  leftSide = left.reduce(function(prev, cur) {
    return prev + cur.weight;
  }, 0);

  rightSide = right.reduce(function(prev, cur) {
    return prev + cur.weight;
  }, 0);

  leftSide === rightSide
    ? addWeight(left, right)
    : leftSide > rightSide
    ? take(left)
    : take(right);
};

let check = all => {
  let left, right;
  left = [all.balls[0], all.balls[1], all.balls[2]];
  right = [all.balls[3], all.balls[4], all.balls[5]];
  weight(left, right, all);
};

check(all);
