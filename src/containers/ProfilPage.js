import React from "react";
import { UserBase } from "../UserBase";
import Profil from "../components/Profil";
import ProfilPageLayout from "../components/ProfilPageLayout";
import ProfilGameLayout from "../components/ProfilGameLayout";
import ProfilAsideLayout from "../components/ProfilAsideLayout";
import ProfilButton from "../components/ProfilButton";
import MyGamovoreLayout from "../components/MyGamovoreLayout";
import MyGamovoreProfilLayout from "../components/MyGamovoreProfilLayout";
import SecondaryTitle from "../components/SecondaryTitle";
import StyleForPseudo from "../components/Pseudo";
import StyleForAvatar from "../components/Avatar";

const ProfilPage = () => {
  return (
    <ProfilPageLayout>
      <Profil />
      <ProfilAsideLayout>
        <section>
          <SecondaryTitle>My Games</SecondaryTitle>
          <ProfilGameLayout>
            <p>jeux1</p>
            <p>jeux2</p>
            <p>jeux3</p>
          </ProfilGameLayout>
        </section>
        <MyGamovoreLayout>
          <SecondaryTitle>My Gamovores</SecondaryTitle>
          <MyGamovoreProfilLayout>
            <div>
              <StyleForAvatar src={UserBase[1].avatar} />
              <StyleForPseudo>{UserBase[1].pseudo}</StyleForPseudo>
            </div>
            <div>
              <StyleForAvatar src={UserBase[2].avatar} />
              <StyleForPseudo>{UserBase[2].pseudo}</StyleForPseudo>
            </div>
          </MyGamovoreProfilLayout>
        </MyGamovoreLayout>
      </ProfilAsideLayout>
    </ProfilPageLayout>
  );
};

export default ProfilPage;
