import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.container}>
      <div className={css.info}>
        <img className={css.photo} src={image} alt={name} width="200px" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.span}>
            <span>Followers</span>
            <span className={css.stats}>{stats.followers}</span>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.span}>
            <span>Views</span>
            <span className={css.stats}>{stats.views}</span>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.span}>
            <span>Likes</span>
            <span className={css.stats}>{stats.likes}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
