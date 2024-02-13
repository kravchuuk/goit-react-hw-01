import style from "./Profile.module.css";

export const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <>
      <div className={style.profileContainer}>
        <div>
          <img className={style.mainImage} src={image} alt={tag} />
          <p className={style.name}>{name}</p>
          <p className={style.nickname}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.statisticList}>
          <li className={style.listItem}>
            <span className={style.listTitle}>Followers</span>
            <span className={style.listAmount}>{followers}</span>
          </li>
          <li className={style.listItem}>
            <span className={style.listTitle}>Views</span>
            <span className={style.listAmount}>{views}</span>
          </li>
          <li className={style.listItem}>
            <span className={style.listTitle}>Likes</span>
            <span className={style.listAmount}>{likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};
