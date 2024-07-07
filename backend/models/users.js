export const usersSchema = {
  tableName: "usuarios",
  columns: [
    "id_documento",
    "nombre",
    "apellido",
    "email",
    "password",
    "pais",
    "ciudad",
    "celular",
    "direccion",
    "fecha_creacion",
  ],
  required: ["nombre", "email", "password"],
};
