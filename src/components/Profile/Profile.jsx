import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

const ClientLiest = ({ items }) => {
  return (
    <section className={css.container}>
      {items.map(user => (
        <Profile profile={user} key={user.id} />
      ))}
    </section>
  );
};

const Profile = ({ profile }) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = profile;

  return (
    <div className={css.profile}>
      <div>
        <img src={avatar} className={css.avatar} alt={username} />

        <p className={css.name}>{username}</p>
        <p className={css.tag}>#{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.stats_item}>
          <span>followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.stats_item}>
          <span>views</span>
          <span>{views}</span>
        </li>
        <li className={css.stats_item}>
          <span>likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  profile: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ClientLiest;
