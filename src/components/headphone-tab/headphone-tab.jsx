import { useSelector } from "react-redux";
import { Button } from "../button/button";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";

export const HeadphoneTab = ({ id, onClick, disabled }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  return (
    <Button
      key={id}
      title={headphone.name}
      onClick={onClick}
      disabled={disabled}
    />
  );
};
