import { styled } from "@mui/material/styles";

const CardImage = styled("img")({
  width: "100%",
  height: "100%",
  transition: "all 0.5s",
  border: "Thin solid #09bd72",
  borderRadius: "25%",
  "&:hover": {
    border: "Thin solid #10056e",
    borderRadius: "50%",
    filter: "drop-shadow(5px 7px 1px rgba(0, 0, 0, 0.5))",
    transform: "rotateZ(-360deg) scale(1.5)",
  },
});

interface CardDefaultProps {
  id: string;
  image: string;
  onClickCard: (id: string) => void;
}
export const CardDefault = ({ id, image, onClickCard }: CardDefaultProps) => {
  const handleCardClick = () => {
    onClickCard(id);
  };
  return (
    <>
      <CardImage id={id} src={image} onClick={handleCardClick} />
    </>
  );
};
