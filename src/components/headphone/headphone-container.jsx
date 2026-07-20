import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Headphone } from "./headphone";
import {
  useAddReviewMutation,
  useGetHeadphoneByIdQuery,
  useLazyGetHeadphonesQuery,
} from "../../redux/services/api/api";

export const HeadphoneContainer = ({ id }) => {
  const { data, isFetching, isError, isLoading, refetch } =
    useGetHeadphoneByIdQuery(id);

  // const [fetchHeadphone] = useLazyGetHeadphonesQuery(id);
  // const headphone = useSelector((state) => selectHeadphoneById(state, id));

  // if (isLoading) {
  //   return "...loading";
  // }

  const [addReview] = useAddReviewMutation();

  const handleReview = (review) => {
    addReview({
      headphoneId: id,
      review: { ...review, user: "hr83h29h9h9u12h9213" },
    });
  };

  if (isFetching) {
    return "...fetching";
  }

  const { name, brand, reviews, codecs } = data || {};

  return (
    <>
      {/* <button onClick={refetch}>refetch</button> */}
      {/* <button onClick={() => fetchHeadphone(id)}>load headphone</button> */}
      <Headphone
        name={name}
        brand={brand}
        reviewsIds={reviews}
        codecsIds={codecs}
        id={id}
        addReview={handleReview}
      />
    </>
  );
};
