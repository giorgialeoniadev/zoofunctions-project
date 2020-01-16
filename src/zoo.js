const data = require('./data')

function entryCalculator(entrants) {
  // retorna 0 se nenhum argumento for passado
  if (entrants === undefined) {
    return 0;
  }
  // retorna 0 se um objeto vazio for passado
  if (Object.values(entrants).length === 0) {
    return 0;
  }
  // retorna o preço total a ser cobrado dado o número de adultos, crianças e
  // idosos
  const {
    Child,
    Adult,
    Senior
  } = entrants;
  const {
    Child: childPrices,
    Adult: adultPrices,
    Senior: seniorPrices
  } = data.prices;
  return (Child * childPrices) + (Adult * adultPrices) + (Senior * seniorPrices);
};

function schedule(dayName) {
  // seu código aqui

};


const catchingAnimals = (who, howMany) => {
  const animal = {};
  for (let i = 0; i < who.length; i += 1) {
    animal[who[i]] = howMany[i];
  }
  return animal;
}

function animalCount(species) {
  // seu código aqui
  // Sem parâmetros, retorna animais e suas quantidades
  const names = data.animals.map(element => element.name);
  const quantity = data.animals.map(element => element.residents.length);
  const zooList = catchingAnimals(names, quantity);

  if (species === undefined) {
    return zooList;
  }

  // com o nome de uma espécide de animal, retorna somente a quantidade
  return zooList[species];
}

function animalMap(options) {
  // seu código aqui
};

function animalPopularity(rating) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function animalsByIds(ids, id2 ='') {
  // seu código aqui
  // sem parâmetros, retorna um array vazio
  const nothing = [];
  
  if (ids && id2 === undefined) {
    return nothing
  } else {
  // com um único id, retorna os animais com este id
  // com mais de um id, retorna os animais que têm um desses ids
  const findOne = data.animals.filter(animal => animal.id === ids);
  const findSome = data.animals.filter(animal => animal.id === id2);
  return findOne.concat(findSome);
  }
};


function animalByName(animalName) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function employeesByIds(ids) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function employeeByName(employeeName) {
  // seu código aqui
  // sem parâmetros, retorna um objeto vazio
  if (employeeName === undefined) {
    return {};
  }
  // quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
  // quando provido o último nome do funcionário, retorna o objeto do funcionário
  return data.employees.find(element =>
    employeeName === element.firstName || employeeName === element.lastName);
};

function managersForEmployee(idOrName) {
  // seu código aqui
  // Não há testes implementados para essa função.
};

function employeeCoverage(idOrName) {
  // seu código aqui
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function animalsOlderThan(animal, age) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

class Animal {
  // seu código aqui
}

function createAnimals() {
  // seu código aqui
}

function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
  return {
    ...personalInfo,
    ...associatedWith
  };
}

module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage,
  addEmployee: addEmployee,
  isManager: isManager,
  animalsOlderThan: animalsOlderThan,
  oldestFromFirstSpecies: oldestFromFirstSpecies,
  increasePrices: increasePrices,
  createAnimals: createAnimals,
  Animal: Animal,
  createEmployee: createEmployee
}
