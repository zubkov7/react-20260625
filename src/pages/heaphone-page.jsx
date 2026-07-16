import {
  useLocation,
  useOutletContext,
  useParams,
  useSearchParams,
} from "react-router";
import { HeadphoneContainer } from "../components/headphone/headphone-container";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  // useLocation();
  // useSearchParams();
  // useOutletContext();

  if (!headphoneId) {
    return "not found";
  }

  return <HeadphoneContainer id={headphoneId} />;
};
