import { Form, Formik } from "formik";
import EventoRegistro from "../api/evento.api";

function EventoPage() {
  return (
    <div>
      <Formik
        initialValues={{
          codigo_even: "",
          nombre_even: "",
          tipo_even: "",
          ciudad_even: "",
          direccion_even: "",
          fechaEvento: "",
          telefono_even: "",
          email_even: "",
          organizador_even: "",
          id_user: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await EventoRegistro(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form className="register-form" onSubmit={handleSubmit}>
            <label>codigo_even: </label>
            <input
              type="text"
              name="codigo_even"
              placeholder="codigo"
              onChange={handleChange}
              values={values.codigo_even}
            />
            <label>Nombre del evento: </label>
            <input
              type="text"
              name="nombre_even"
              placeholder="nombre del evento"
              onChange={handleChange}
              values={values.nombre_even}
            />
            <label>Tipo de evento:</label>
            <input
              type="text"
              name="tipo_even"
              placeholder="Tipo evento"
              onChange={handleChange}
              values={values.tipo_even}
            />
            <label>Ciudad del Evento:</label>
            <input
              type="text"
              name="ciudad_even"
              placeholder="Ciudad"
              onChange={handleChange}
              values={values.ciudad_even}
            />
            <label>Dirección del evento:</label>
            <input
              type="text"
              name="direccion_even"
              placeholder="Direccion"
              onChange={handleChange}
              values={values.direccion_even}
            />
            <label>Fecha del evento:</label>
            <input
              type="Date"
              name="fechaEvento"
              placeholder="Fecaha"
              onChange={handleChange}
              values={values.fechaEvento}
            />
            <label>Teléfono Evento:</label>
            <input
              type="number"
              name="telefono_even"
              placeholder="telefono"
              onChange={handleChange}
              values={values.telefono_even}
            />
            <label>Email evento</label>
            <input
              type="text"
              name="email_even"
              placeholder="email"
              onChange={handleChange}
              values={values.email_even}
            />
            <label>Organisador</label>
            <input
              type="text"
              name="organizador_even"
              placeholder="ORGANIZADOR"
              onChange={handleChange}
              values={values.organizador_even}
            />
            <label>Usuario asignado</label>
            <input
              type="text"
              name="id_user"
              placeholder="asignacion"
              onChange={handleChange}
              values={values.id_user}
            />
            <button type="submit" disable={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EventoPage;
