import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {items.map(({ id, amount }) => (
          <li key={id}>
            {id} - {amount}
          </li>
        ))}
      </ul>
    </div>
  );
};
