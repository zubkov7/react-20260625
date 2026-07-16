import { useDispatch, useSelector } from "react-redux";
import { Headphone } from "./headphone";
import {
  selectHeadphoneById,
  selectRequestStatus,
} from "../../redux/entities/headphones/slice";
import { useEffect } from "react";
import { getHeadphoneById } from "../../redux/entities/headphones/get-headphone-by-id";

export const HeadphoneContainer = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHeadphoneById(id));
  }, [dispatch, id]);

  const headphone = useSelector((state) => selectHeadphoneById(state, id));
  const status = useSelector(selectRequestStatus);

  if (status === "pending") {
    return "loading";
  }

  if (status === "rejected") {
    return "error";
  }

  if (!headphone) {
    return null;
  }

  return (
    // <FetchDate status={status}>
    <Headphone
      key={headphone.id}
      name={headphone.name}
      brand={headphone.brand}
      reviews={headphone.reviews}
      codecs={headphone.codecs}
      id={id}
    />
    // </FetchDate>
  );
};

// export const FetchDate = ({ status, children }) => {
//   if (status === "pending") {
//     return "loading";
//   }

//   if (status === "rejected") {
//     return "error";
//   }

//   return children;
// };
