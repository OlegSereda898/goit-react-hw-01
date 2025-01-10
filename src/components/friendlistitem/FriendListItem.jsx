import css from "./FriendListItem.module.css";
import PropTypes from "prop-types";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.card}>
      <img className={css.avatar} src={avatar} alt="Avatar" width="70" />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
