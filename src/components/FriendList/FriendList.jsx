import css from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

const FriendList = ({ friends }) => (
  <ul className={css.friendsList}>
    {friends.map((friend_i) => (
      <li key={friend_i.id}>
        <FriendListItem
          avatar={friend_i.avatar}
          name={friend_i.name}
          isOnline={friend_i.isOnline}
        />
      </li>
    ))}
  </ul>
);

export default FriendList;
