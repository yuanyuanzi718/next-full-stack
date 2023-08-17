import React, { useContext } from "react";
import { UserContext } from "./userContext";
function Edit() {
  const user = useContext(UserContext);

  return <div>{user?.user}</div>;
}

export default Edit;
