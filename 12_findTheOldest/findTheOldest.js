const findTheOldest = function(people) {
  const oldestToYoungestAgesArr = people
    .map(person => {
      const currentYear = new Date().getFullYear();
      if (person.yearOfDeath === undefined) person.yearOfDeath = currentYear;
      return person.yearOfDeath - person.yearOfBirth;
    })
    .sort((person1, person2) => person2 - person1);

  const oldestAge = oldestToYoungestAgesArr[0];

  return people.find(person => (
    person.yearOfDeath - person.yearOfBirth === oldestAge
  ));
};

// Do not edit below this line
module.exports = findTheOldest;
