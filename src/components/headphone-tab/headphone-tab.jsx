import { useSelector } from "react-redux";
import { Button } from "../button/button";
import { selectHeadphoneById } from "../../redux/entities/headphones/slice";
import { Link, useNavigate, NavLink } from "react-router";

import styles from "./styles.module.css";
import "./styles.css";
import classNames from "classnames";

export const HeadphoneTab = ({ id, onClick, disabled }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  const navigate = useNavigate();

  if (!headphone) {
    return null;
  }

  // return <Link to={`/headphone/${id}`}>{headphone.name}</Link>;

  return (
    <NavLink
      to={`/headphone/${id}`}
      // className={({ isActive }) => classNames(isActive && styles.linkActive)}
      className='link'
    >
      {headphone.name}
    </NavLink>
  );

  // return (
  //   <Button
  //     key={id}
  //     title={headphone.name}
  //     onClick={() => {
  //       navigate(`/headphone/${id}`);
  //     }}
  //     disabled={disabled}
  //   />
  // );
};
