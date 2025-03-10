import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <div className={css.item}>
    <img src={avatar} alt="Avatar" width="48" className={css.avatar} />
    <p className={css.name}>{name}</p>
    {isOnline ? (
      <p className={css.online}>Online</p>
    ) : (
      <p className={css.offline}>Offline</p>
    )}
  </div>
);

export default FriendListItem;
