import 'bootstrap/dist/css/bootstrap.min.css';
import user from "../../library/user.json"
import '../Profile/Profile.css'
// import '../../index.css'

export const Profile = () => { 
  return(
   user.map((photo) =>{
    return(
    <div key={photo.id} className="card" style={{width: "18rem"}}>
      <img src={photo.avatar} className="card-img-top card__img" alt={photo.username} />
      <div className="card-body">
        <p className="card-text name-text">{photo.username}</p>
        <p className="name-text name-tag">#{photo.tag}</p>
        <p className="text-location">{photo.location}</p>
      </div>
      <ul className = "stats-list">
        <li className="stats-item">
          <span>followers</span>
          <span>{photo.stats.followers}</span>
        </li>
        <li className="stats-item"><span>views</span>
          <span>{photo.stats.views}</span></li>
        <li className="stats-item"><span>likes</span>
          <span>{photo.stats.likes}</span></li>
      </ul>
    </div>
    )
  }))}


















// import PropTypes from "prop-types"
// import user from "../../library/user.json"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import styles from '../Profile/Profile.module.css'

// const Client = ({items}) => {
//     return <section className={styles.container}>
//     {items.map(user =>
//         <Profile profile={user} key={user.id}/>
//         )}
//         </section>
// };

// const Profile = ({profile}) => {
//     // const {avatar, username, tag, location, stats:{followers, views, likes}} = profile;

// // const Card = () => { return(
// //     user.map((photo) =>{
//      return (
//      <div key={user.id} className={styles.card} style={{width: "18rem"}}>
//        <img src={user.avatar} className="card-img-top styles.card__img" alt={user.username} />
//        <div className="styles.card-body">
//          <p className="card-text styles.name-text">{user.username}</p>
//          <p className="name-text styles.name-tag">#{user.tag}</p>
//          <p className="styles.text-location">{user.location}</p>
//        </div>
//        <ul className = "styles.stats-list">
//          <li className="styles.stats-item">
//            <span>followers</span>
//            <span>{user.stats.followers}</span>
//          </li>
//          <li className="styles.stats-item"><span>views</span>
//            <span>{user.stats.views}</span></li>
//          <li className="styles.stats-item"><span>likes</span>
//            <span>{user.stats.likes}</span></li>
//        </ul>
//      </div>)
     
//    };


//    Profile.propTypes = {
//     profile: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         avatar:  PropTypes.string.isRequired, 
//         username:  PropTypes.string.isRequired,
//         tag:  PropTypes.string.isRequired, 
//         location: PropTypes.string.isRequired,
//         stats: PropTypes.shape({
//             followers: PropTypes.number.isRequired, 
//             views: PropTypes.number.isRequired, 
//             likes: PropTypes.number.isRequired,
//         }).isRequired
//     }).isRequired
// }

// export default Client