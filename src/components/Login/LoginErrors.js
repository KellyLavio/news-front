import React from "react";

const LoginErrors = ({ errors }) =>
  errors &&
  Object.keys(errors).length > 0 && (
    <div className="alert alert-danger">
      {errors.login && (
        <>
          Le login est obligatoire
          <br />
        </>
      )}
      {errors.password && (
        <>
          Le mot de passe est obligatoire
          <br />
        </>
      )}
      {errors.apiServer && (
        <>
          {errors.apiServer.message}
          <br />
        </>
      )}
    </div>
  );

  export default LoginErrors;