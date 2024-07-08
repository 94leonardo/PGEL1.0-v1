import { pool } from "../db.js";
import { usersSchema } from "../models/users.js";

//Metodo para autenticar usuarios login

export const userlogin = async (req, res) => {
  try {
  } catch (error) {}
};

//metodos para consultar usuarios registrados eventos en la base de datos
export const userSelects = async (req, res) => {
  try {
    // Realiza una consulta simple a la base de datos
    const { tableName, columns } = usersSchema;
    // Selección de columnas de la tabla principal
    const selectedColumns = columns.join(", ");
    // Construcción de la consulta
    const query = `SELECT ${selectedColumns} FROM ${tableName}`;
    // Ejecutar la consulta
    const [result] = await pool.query(query);

    if (result.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No se encontraron usuarios",
      });
    }

    return res.status(200).send({
      status: "success",
      message: "usuarios consultados exitosa",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
    });
  }
};

//metodos para consultar un usuario registrado evento en la base de datos por Id
export const userUnic = async (req, res) => {
  try {
    const { tableName, columns, relatedTables } = usersSchema;
    const { id } = req.params;

    // Selección de columnas de la tabla principal
    const selectedColumns = columns
      .map((column) => `${tableName}.${column}`)
      .join(", ");
    const query = `SELECT ${selectedColumns} FROM ${tableName} WHERE ${tableName}.id_documento = ?`;
    const [result] = await pool.query(query, [id]);

    if (!id) {
      return res.status(400).json({
        status: "error",
        message: "El ID del Usuario es requerido",
      });
    }

    if (result.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "ID no encontrado",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "Consulta ID exitosa",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener la consulta",
      error: error.message,
    });
  }
};

//metodos para crear usuarios eventos en la base de datos
export const userCreate = async (req, res) => {
  try {
    //construir la consulta insert y lo valores usanado el esquema de la base de datos

    const { tableName, columns, required } = usersSchema;
    const placeholder = columns.map(() => "?").join(",");
    const values = columns.map((column) => req.body[column]);

    const query = `INSERT INTO ${tableName} (${columns.join(
      ","
    )}) VALUES (${placeholder})`;

    const [result] = await pool.query(query, values);

    return res.status(200).send({
      status: "success",
      message: "Usuario creado exitosamente",
      result: result,
    });
  } catch (error) {
    console.error("Error al crear el usuario: ", error);
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
      error: error.message,
    });
  }
};

//metodos para actualizar usuarios registrados eventos en la base de datos
export const userUpdate = async (req, res) => {
  try {
    const { tableName, columns } = usersSchema;
    //filtrar solo las columnas que esten en elreq.body
    const updateColumns = columns.filter((column) =>
      req.body.hasOwnProperty(column)
    );

    const setClause = updateColumns.map((column) => `${column} = ?`).join(",");
    const values = updateColumns.map((column) => req.body[column]);

    const query = `UPDATE ${tableName} SET ${setClause} WHERE id_documento = ?`;
    values.push(req.params.id); // Añadir el id del usuario al final de los valores
    const [result] = await pool.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Id no encontrado",
      });
    }

    return res.status(200).send({
      status: "success",
      message: "Actualización de usuario exitosa",
      result,
    });
  } catch (error) {
    console.error("Error en la función userUpdate:", error);
    return res.status(500).json({
      status: "error",
      message: "Error al procesar la solicitud",
      error: error.message, // Incluir el mensaje de error para mayor claridad
    });
  }
};
//metodos para eliminar usuarios registrados eventos en la base de datos

export const userDelete = async (req, res) => {
  try {
    const { tableName, columns } = usersSchema;
    const { id } = req.params;

    // Selección de columnas de la tabla principal
    const selectedColumns = columns
      .map((column) => `${tableName}.${column}`)
      .join(", ");
    const query = `DELETE FROM ${tableName} WHERE id_documento = ?`;
    const [result] = await pool.query(query, [id]);

    if (!id) {
      return res.status(400).json({
        status: "error",
        message: "El ID del Usuario es requerido",
      });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Id no encontrado" });
    }

    return res.status(204).send({
      status: "success",
      message: "Eliminar eventos exitosa",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener las consulta",
      error: error.message,
    });
  }
};
