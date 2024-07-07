export const evenSchema = {
  tableName: "eventos",
  columns: [
    "id_even",
    "codigo_even",
    "nombre_even",
    "tipo_even",
    "ciudad_even",
    "direccion_even",
    "fechaEvento",
    "telefono_even",
    "email_even",
    "organizador_even",
    "id_user",
  ],
  foreignKeys: [
    {
      column: "id_even",
      references: {
        table: "usuarios",
        column: "id_even",
      },
    },
  ],
  required: ["codigo_even", "nombre_even", "email_even", "organizador_even"],
};
