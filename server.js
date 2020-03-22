const express = require('express');
const cors = require('cors');
const port = 4000;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let people = [
  {
    name: 'Christine',
    age: 40,
    favoriteFood: 'Pizza',
    id: 0
  },
  {
    name: 'Amanda',
    age: 30,
    favoriteFood: 'Tacos'
  }
];
server.get('/people', (req, res) => {
  res.json(people);
});
let peopleId = people.length;

server.post('/people', (req, res) => {
  const { name, age, favoriteFood } = req.body;
  const newPerson = { name, age, favoriteFood, id: peopleId };
  if (!name || !age || !favoriteFood) {
    return sendUserError(
      'Name/Age/favoriteFood are all required to create a smurf in the person DB.',
      res
    );
  }
  const findPersonByName = person => {
    return person.name === name;
  };
  if (people.find(findPersonByName)) {
    return sendUserError(
      `${name} already exists in the people DB.`,
      res
    );
  }

  people.push(newPerson);
  personId++;
  res.json(people);
});

server.put('/people/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, favoriteFood } = req.body;
  const findPersonById = person => {
    return person.id == id;
  };
  const foundPerson = people.find(findPersonById);
  if (!foundPerson) {
    return sendUserError('No person found by that ID', res);
  } else {
    if (name) foundPerson.name = name;
    if (age) foundPerson.age = age;
    if (height) foundPerson.favoriteFood = favoriteFood;
    res.json(people);
  }
});

server.delete('/people/:id', (req, res) => {
  const { id } = req.params;
  const foundPerson = people.find(person => person.id == id);

  if (foundPerson) {
    const personRemoved = { ...foundPerson };
    people = people.filter(person => person.id != id);
    res.status(200).json(people);
  } else {
    sendUserError('No person by that ID exists in the people DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
