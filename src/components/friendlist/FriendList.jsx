import FriendListItem from "../friendlistitem/FriendListItem";
import css from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={css.item}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className="css.list-item">
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
