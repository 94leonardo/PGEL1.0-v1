import axios from "axios";

//metodo para crear o registrar un usuario por medio frontend
export const registerRequest = async (create_user) => {
  try {
    const result = await axios.post(
      "http://localhost:4000/create_user",
      create_user
    );

    return res.status(201).send({
      status: "success",
      message: "Usuario creado exitosamente",
      result,
    });
  } catch (error) {
    return res.status(500).send({
      status: "success",
      message: "Error al crear usuario",
      error: error.message,
    });
  }
};

export default registerRequest;
