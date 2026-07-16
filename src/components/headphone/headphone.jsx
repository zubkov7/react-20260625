import { Codecs } from "../codecs/codecs";
import { ReviewForm } from "../review-form/review-form";
import { Reviews } from "../reviews/reviews";
import { HeadphoneCounter } from "../headphone-counter/headphone-counter";
import { use } from "react";
import { AuthContext } from "../auth-context";

export const Headphone = ({ name, brand, reviews, codecs, id }) => {
  const { auth } = use(AuthContext);
  const { isAuthorized } = auth;

  if (!name) {
    return null;
  }

  return (
    <section>
      <h2>{name}</h2>
      <h3>Brand - {brand}</h3>
      {reviews.length ? (
        <Reviews reviewsIds={reviews} />
      ) : (
        <div>empty review</div>
      )}
      {codecs.length ? <Codecs codecsIds={codecs} /> : <div>empty codecs</div>}
      {isAuthorized && (
        <>
          <HeadphoneCounter headphoneId={id} />
          <ReviewForm />
        </>
      )}
    </section>
  );
};
