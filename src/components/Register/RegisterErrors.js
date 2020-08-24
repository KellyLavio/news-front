import React from "react";

const RegisterErrors = ({ errors }) =>
  errors &&
  Object.keys(errors).length > 0 && (
    <div className="alert alert-danger">
      {errors.login && (
        <>
          Le login est obligatoire
          <br />
        </>
      )}
      {errors.name && (
        <>
          Le nom est obligatoire
          <br />
        </>
      )}
      {errors.firstname && (
        <>
          Le prénom est obligatoire
          <br />
        </>
      )}{errors.email && (
        <>
          L'e-mail est obligatoire
          <br />
        </>
      )}
      {errors.password && (
        <>
          Le mot de passe est obligatoire
          <br />
        </>
      )}
    </div>
  );

    export default RegisterErrors;
