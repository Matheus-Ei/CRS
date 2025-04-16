import { ClientModel } from "../models/ClientModel.js";

export const get = async (req, res) => {
  const { name, id } = req.query;

  if (name) {
    const client = await ClientModel.findOne( {where: { name } })

    res
      .status(200)
      .send({
        message: "Here is the client by it's name",
        client,
      });
  } else if(id) {
    const client = await ClientModel.findOne( {where: { id } })

    res
      .status(200)
      .send({
        message: "Here is the client by it's id",
        client,
      });
  } else {
    const clients = await ClientModel.findAll();

    res.status(200).send({
      message: "All users returned",
      clients,
    });
  }
};

export const create = async (name, cpf) => {
  return ClientModel.create({name, cpf})
}

export const update = (id, name, cpf) => {
  return ClientModel.update({name, cpf}, {where: {id}})
}

export const persist = (req, res) => {
  const {id} = req.params;
  const {name, cpf} = req.body;

  let client;

  if(id) client = update(id, name, cpf)
  else client = create(id, name, cpf)

  return res.status(201).send(client);
}

export const remove = async (req, res) => {
  const {id} = req.params;

  await ClientModel.destroy({where: {id}})

  return res.status(201).send({message: "Client deleted"});
}
