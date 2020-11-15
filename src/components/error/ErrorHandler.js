import React, { useEffect, useState } from "react";
import "./errorHandler.css";

function ErrorHandler(props) {
  const { errorHandler } = props;
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false);
    if (errorHandler.hasError) {
      setShow(true);
    }
  }, [errorHandler]);

  return (
    <div>
      {show ? (
        <div className="d-flex alert alert-danger">
          <p className="mr-5">{errorHandler.message}</p>
          <button
            type="button"
            className="close"
            onClick={() => {
              setShow(false);
            }}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default ErrorHandler;
