import { pool } from "../db.js";
import { evenSchema } from "../models/event.js";

//metdodos para crear eventos en la base de datos
export const evenCreate = async (req, res) => {
  
  try {

    const { tableName, columns } = evenSchema;
    const values = columns.map((column) => req.body[column]);
    const id_documento = req.body.id_documento;
      // Verificar si el usuario existe
      const [rows] = await pool.query('SELECT 1 FROM usuarios WHERE id_documento = ?', [id_documento]);

      if (rows.length === 0) {
          // Si el usuario no existe, enviar un mensaje de error
          return res.status(400).send({
              status: "error",
              message: "El usuario no existe. No se puede crear el evento."
          });
      }

      // Construir la consulta de inserción
      const placeholder = columns.map(() => "?").join(",");
      const query = `INSERT INTO ${tableName} (${columns.join(", ")}) VALUES (${placeholder})`;

      // Ejecutar la consulta de inserción
      const [result] = await pool.query(query, values);

      // Enviar respuesta exitosa
      return res.status(200).send({
          status: "success",
          message: "Evento creado exitosamente",
      });
  } catch (error) {
      // Manejar errores
      return res.status(500).send({
          status: "error",
          message: "Error al crear el evento.",
          error: error.message
      });
  }
};


//metodo para selecionar todo los  eventos
export const evenLists = async (req, res) => {
  try {
    const { tableName, columns } = evenSchema;

    const query = `SELECT ${columns.join(", ")} FROM ${tableName}`;
    const [result] = await pool.query(query);

    return res.status(200).send({
      status: "success",
      message: "eventos seleccionados exitosamente",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al seleccionados el evento",
      error: error.message,
    });
  }
};

//metodos para selecionar un evento por id

export const eventUnic = async (req, res) => {
  try {
    const { tableName, columns } = evenSchema;
    const { id } = req.params;

    const query = `SELECT ${columns.join(", ")} FROM ${tableName} WHERE id_even = ?`;
    const [result] = await pool.query(query, [id]);

    

    if (result.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "Evento no encontrado",
      });
    }

    return res.status(200).send({
      status: "success",
      message: "eventos seleccionado exitosamente",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al seleccionar el evento",
      error: error.message,
    });
  }
};

//metodos para actualizar un evento
export const evenUpdate = async (req, res) => {
  try {
    const { tableName, columns, required } = evenSchema;
    const updateColumns = columns.filter((column) =>
      req.body.hasOwnProperty(column)
    );
    const setClause = updateColumns.map((column) => `${column} = ?`).join(",");
    const values = updateColumns.map((column) => req.body[column]);
    const query = `UPDATE ${tableName} SET ${setClause} WHERE id_even = ?`;
    values.push(req.params.id);
    const [result] = await pool.query(query, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Id no encontrado",
      });
    }
    return res.status(200).send({
      status: "success",
      message: "eventos actualizado exitosamente",
      result,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al actualizado el evento",
      error: error.message,
    });
  }
};

//metodos para eliminar un evento

export const evenDelete = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM eventos WHERE id_even = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({
        message: "Id no encontrado",
      });
    }
    return res.status(200).send({
      status: "success",
      message: "evento eliminado exitosamente",
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al Eliminar el evento",
      error: error.message,
    });
  }
};
