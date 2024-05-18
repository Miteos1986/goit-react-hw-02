import PropTypes from 'prop-types';
import styles from "./Profile.module.css"

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.container}>
  <div className={styles.profileWrapper}>
    <img className={styles.profileImg}
      src={image}
      alt={`${name} avatar`}
    />
    <p className={styles.userName}>{name}</p>
    <p className={styles.userTag}>@{tag}</p>
    <p className={styles.userLocation}>{location}</p>
  </div>

  <ul className={styles.statsList}>
    <li className={styles.statsItem}>
      <span className={styles.itemTitle}>Followers</span>
      <span className={styles.subtitle} >{stats.followers}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.itemTitle}>Views</span>
      <span className={styles.subtitle} >{stats.views}</span>
    </li>
    <li className={styles.statsItem}>
      <span className={styles.itemTitle}>Likes</span>
      <span className={styles.subtitle} >{stats.likes}</span>
    </li>
  </ul>
</div>
  );
};

// Props

Profile.propType = {
    name: PropTypes.string.isRequired ,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stats: PropTypes.shape ({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}

export default Profile;
