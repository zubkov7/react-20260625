import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone/slice";
import { Headphone } from "./headphone";

export const HeadphoneContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  return (
    <Headphone
      key={headphone.id}
      name={headphone.name}
      brand={headphone.brand}
      reviews={headphone.reviews}
      codecs={headphone.codecs}
      id={id}
    />
  );
};
