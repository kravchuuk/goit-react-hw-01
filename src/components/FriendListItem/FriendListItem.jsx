import clsx from "clsx";
import style from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const status = clsx(
    style.onlineInfo,
    isOnline ? style.statusOnline : style.statusOffline
  );
  return (
    <>
      <div>
        <img
          className={style.friendsImg}
          src={avatar}
          alt="Avatar"
          width="48"
        />
        <p className={style.friendsName}>{name}</p>
        <p className={status}>{isOnline ? "Online" : "Offline"}</p>
      </div>
    </>
  );
};
