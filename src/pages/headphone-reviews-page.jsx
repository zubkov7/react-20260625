import { useParams } from "react-router";
import { selectHeadphoneById } from "../redux/entities/headphones/slice";
import { useSelector } from "react-redux";
import { Reviews } from "../components/reviews/reviews";
import { useGetReviewsByHeadphoneIdQuery } from "../redux/services/api/api";
import { Review } from "../components/review/review";

export const HeadphoneReviewsPage = () => {
  const { headphoneId } = useParams();

  const { data, isFetching } = useGetReviewsByHeadphoneIdQuery(headphoneId);

  if (isFetching) {
    return "...loading";
  }

  // const headphone = useSelector((state) =>
  //   selectHeadphoneById(state, headphoneId),
  // );

  // const { reviews } = headphone || {};

  return data.length ? (
    <div>
      <h3>Reviews</h3>
      {data?.map(({ text, user, id }) => (
        <li key={id}>
          <Review text={text} userId={user} />
        </li>
      ))}
    </div>
  ) : (
    <div>empty review</div>
  );
};
