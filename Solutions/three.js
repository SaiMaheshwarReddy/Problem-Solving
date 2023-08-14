var sortPeople = function (names, heights) {
  const people = names.map((name, index) => ({ name, height: heights[index] }));

  const sortedHeightPeople = people.sort((a, b) => b.height - a.height);

  const sortedNames = sortedHeightPeople.map((person) => person.name);

  return sortedNames;
};

const names = ["Alice", "Bob", "Bob"];
const heights = [155, 185, 150];
console.log(sortPeople(names, heights));
