import { useSelector } from "react-redux";
import { selectCartItemsIds } from "../../redux/entities/cart/slice";
import { Cart } from "./cart";
import { AuthContext } from "../auth-context";
import { useContext } from "react";

export const CartContainer = () => {
  const { auth } = useContext(AuthContext);
  const { isAuthorized } = auth;
  const itemsIds = useSelector(selectCartItemsIds);

  if (!isAuthorized || !itemsIds.length) {
    return null;
  }

  return <Cart itemsIds={itemsIds} />;
};
