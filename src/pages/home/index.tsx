import * as React from "react";
import { useEffect, useState } from "react";
import imagem from "../../assets/images/theme3.png";
import bruno from "../../assets/images/Bruno.jpg";
import leticia from "../../assets/images/leticia.jpg";
import marcos from "../../assets/images/Marcos.jpg";
import windson from "../../assets/images/windson.jpg";
import "./imageTheme.css";
import { CardDefault } from "../../components/cardDefault";
import Grid from "@mui/material/Grid";
import { GridFotos } from "../../components/containerGrid";
import { useAppThemeContext } from "../../context";
import { ListQualidade } from "../../components/listQualidade";
import { WrapperLista } from "../../components/wrapperLista.tsx";
import { Typography } from "@mui/material";

export const Home = () => {
  const { toggleTheme } = useAppThemeContext();
  const [toogle, setToggle] = useState(true);
  const [rotate, setRotate] = useState("270deg");
  const [qualidade, setQualidade] = useState([""]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    setRotate(() => (toogle ? "90deg" : "270deg"));
    toggleTheme();
  }, [toogle]);

  useEffect(() => {
    renderLista();
  }, [title]);

  const clicked = (id: string) => {
    const listCard1 = document.getElementById("listCard1");
    const listCard2 = document.getElementById("listCard2");
    const listCard3 = document.getElementById("listCard3");
    const listCard4 = document.getElementById("listCard4");

    switch (id) {
      case "card1":
        setQualidade(["coragem", "esforçado", "criativo"]);
        setTitle("Bruno");
        break;
      case "card2":
        setQualidade(["coragem", "esforçado", "dedicado"]);
        setTitle("Leticia");
        break;
      case "card3":
        setQualidade(["Otimista", "esforçado", "Autruísta"]);
        setTitle("Marcos");
        break;

      case "card4":
        setQualidade(["Constancia", "esforçado", "Resiliente"]);
        setTitle("Windson");
        break;
    }
  };

  const renderLista = () => {
    return (
      <ListQualidade
        qualidade={qualidade}
        title={title}
        onChange={() => setToggle((state) => !state)}
      />
    );
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} mb={5}>
          <GridFotos>
            <img
              id="theme"
              onClick={() => setToggle((state) => !state)}
              src={imagem}
              style={{
                transform: `rotate(${rotate})`,
                width: "150px",
                transition: "all 1s",
              }}
            />
          </GridFotos>
        </Grid>

        <Grid item sm={6} md={3} mt={5}>
          <CardDefault id="card1" image={bruno} onClickCard={clicked} />
        </Grid>
        <Grid item sm={6} md={3} mt={5}>
          <CardDefault id="card2" image={leticia} onClickCard={clicked} />
        </Grid>
        <Grid item sm={6} md={3} mt={5}>
          <CardDefault id="card3" image={marcos} onClickCard={clicked} />
        </Grid>
        <Grid item sm={6} md={3} mt={5}>
          <CardDefault id="card4" image={windson} onClickCard={clicked} />
        </Grid>
      </Grid>
      {renderLista()}
    </>
  );
};
