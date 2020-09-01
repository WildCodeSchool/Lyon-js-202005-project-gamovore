import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import ViewProfil from "./ViewProfil";
import EditProfil from "./EditProfil";

const Profil = () => {
  const { user } = useContext(UserContext);
  const [editProfil, setEditProfil] = useState(false);

  if (!editProfil) {
    return <ViewProfil user={user} setEditProfil={setEditProfil} />;
  } else {
    return <EditProfil user={user} setEditProfil={setEditProfil} />;
  }
};

export default Profil;
