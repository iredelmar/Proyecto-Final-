import React from "react";

function Alert({ type, message }) {
  return (
    <>
      {type === "success" && (
        <div className="flex w-full flex-col gap-2 bg-green-300">{message}</div>
      )}
      {type === "error" && (
        <div className="flex w-full justify-center mt-10 h-20px flex-col gap-2 h-12 rounded-md  bg-red-300">
          {message}
        </div>
      )}
    </>
  );
}

export default Alert;
