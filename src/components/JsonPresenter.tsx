import React, { useState } from "react";
import { Api } from "../config/Api";

export const JsonPresenter = () => {
  const api = new Api();
  const [fileContent, setFileContent] = useState("");

  const call = async () => {
    setFileContent(await api.foo());
  };

  return (
    <>
      <div>elo</div>
      <button onClick={call}>Call API</button>
      {fileContent && <div>{fileContent} </div>}
    </>
  );
};
