import * as React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { WrapperLista } from "../../components/wrapperLista.tsx";

const ListQualidadeStyle = styled("ul")({
  listStyleType: "none",
  fontWeight: "bold",
  fontSize: "20px",
  color: "primary",

  animation: " jello-vertical 0.9s both",
});

const jelloVerticalKeyframes = {
  "0%": {
    transform: "scale3d(1, 1, 1)",
  },
  "30%": {
    transform: "scale3d(0.75, 1.25, 1)",
  },
  "40%": {
    transform: "scale3d(1.25, 0.75, 1)",
  },
  "50%": {
    transform: "scale3d(0.85, 1.15, 1)",
  },
  "65%": {
    transform: "scale3d(1.05, 0.95, 1)",
  },
  "75%": {
    transform: "scale3d(0.95, 1.05, 1)",
  },
  "100%": {
    transform: "scale3d(1, 1, 1)",
  },
};

const jelloVerticalAnimation = {
  "@keyframes jello-vertical": jelloVerticalKeyframes,
  "@-webkit-keyframes jello-vertical": jelloVerticalKeyframes,
};

const ItemListStyle = styled("li")({
  ...jelloVerticalAnimation,
});

interface ListQualidadeProps {
  qualidade: string[];
  title: string;
  onChange: () => void;
}

export const ListQualidade = ({
  qualidade,
  title,
  onChange,
}: ListQualidadeProps) => {
  return (
    <WrapperLista>
      <Typography variant="h3">{title}</Typography>
      <ListQualidadeStyle onChange={onChange}>
        <ItemListStyle>
          <Typography variant="h5">
            {qualidade.map((q) => (
              <li>{q}</li>
            ))}
          </Typography>
        </ItemListStyle>
      </ListQualidadeStyle>
    </WrapperLista>
  );
};
