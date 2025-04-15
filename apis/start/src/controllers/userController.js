const users = [
  { id: 1, name: "Ana", age: 25 },
  { id: 2, name: "Bruno", age: 30 },
  { id: 3, name: "Carla", age: 22 },
  { id: 4, name: "Diego", age: 28 },
  { id: 5, name: "Eduarda", age: 26 },
  { id: 6, name: "Felipe", age: 33 },
  { id: 7, name: "Giovana", age: 24 },
  { id: 8, name: "Henrique", age: 27 },
  { id: 9, name: "Isabela", age: 29 },
  { id: 10, name: "João", age: 31 },
];

export const getAll = (req, res) => {
  const { age } = req.query;

  if (age) {
    res
      .status(200)
      .send({
        message: "Here are the users with this age",
        users: users.filter((u) => u.age === Number(age)),
      });
  } else {
    res.status(200).send({
      message: "All users returned",
      users,
    });
  }
};

export const getId = (req, res) => {
  const { id } = req.params;

  const user = users.filter((u) => u.id === Number(id));

  return res.status(200).send({
    message: `User with id: '${id}'`,
    user,
  });
};
