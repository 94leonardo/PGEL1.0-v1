import { Form, Formik } from "formik";
import registerRequest from "../api/users.api";

function RegisterPage() {
  return (
    <div>
      <Formik
        initialValues={{
          id_documento: "",
          nombre: "",
          apellido: "",
          email: "",
          password: "",
          pais: "",
          ciudad: "",
          celular: "",
          direccion: "",
          fecha_creacion: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          try {
            const response = await registerRequest(user);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form className="register-form" onSubmit={handleSubmit}>
            <label>Documento: </label>
            <input
              type="text"
              name="id_documento"
              placeholder="Documento"
              onChange={handleChange}
              values={values.id_documento}
            />
            <label>Nombre: </label>
            <input
              type="text"
              name="nombre"
              placeholder="nombre"
              onChange={handleChange}
              values={values.nombre}
            />
            <label>Apellido:</label>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              onChange={handleChange}
              values={values.apellido}
            />
            <label>Email:</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              values={values.Email}
            />
            <label>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              values={values.password}
            />
            <label>País:</label>
            <input
              type="text"
              name="pais"
              placeholder="Pais"
              onChange={handleChange}
              values={values.pais}
            />
            <label>Ciudad:</label>
            <input
              type="text"
              name="ciudad"
              placeholder="Ciudad"
              onChange={handleChange}
              values={values.ciudad}
            />
            <label>Teléfono:</label>
            <input
              type="number"
              name="celular"
              placeholder="Telefono"
              onChange={handleChange}
              values={values.celular}
            />
            <label>Direccion</label>
            <input
              type="text"
              name="direccion"
              placeholder="Direccion"
              onChange={handleChange}
              values={values.direccion}
            />
            <label>Fecha</label>
            <input
              type="date"
              name="fecha_creacion"
              placeholder="Fecha"
              onChange={handleChange}
              values={values.fecha_creacion}
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

export default RegisterPage;
