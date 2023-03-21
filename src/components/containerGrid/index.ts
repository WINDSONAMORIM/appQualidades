import { styled } from "@mui/material/styles";

export const GridFotos = styled("section")({
  width: "100%",
  position: "absolute",
  top: "-12%",

  "@media(max-width: 480px)": {
    top: "-4%",
  },
});
