import express from "express";

const app = express();
app.use(express.json());
const port = 5000;

app.post("/users/age/:age", (req, res) => {
  const { age } = req.params;
  const { name } = req.body;

  if (Number(age) < 18) {
    res
      .status(200)
      .send({ message: `The user ${name} has less than 18 years` });
  } else {
    res
      .status(200)
      .send({ message: `The user ${name} has more than 18 years` });
  }
});

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

app.get("/users/:id", (req, res) => {
  const { id } = req.params;

  res.status(200).send(users.filter((u) => u.id === Number(id)));
});

app.get("/users", (req, res) => {
  const { age } = req.query;

  if (age) {
    res.status(200).send(users.filter((u) => u.age === Number(age)));
  } else {
    res.status(200).send(users);
  }
});

app.listen(port, () => {
  console.clear();
  console.log(`Running in the port ${port}`);
});
