export const usersSchema = {
  tableName: "usuarios",
  columns: [
    "id_user",
    "documento",
    "nombre",
    "apellido",
    "email",
    "password",
    "pais",
    "ciudad",
    "celular",
    "direccion",
    "fecha_creacion",
    "id_even",
  ],
  foreignKeys: [
    {
      column: "id_even",
      references: {
        table: "eventos",
        column: "id_even",
      },
    },
  ],
  required: ["nombre", "email", "password"],
};

