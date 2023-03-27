import PropTypes from "prop-types"
import css from '../Friend/Friend.module.css'

const FriendList = ({title, items}) => {
    return <section className={css.friend}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css.list}>
  {items.map(user => <Friend friend={user} key={user.id}/>

  )}
</ul>
    </section>
}

const Friend = ({friend}) => {
    const {avatar, name, isOnline} = friend
    return <li className={css.item}>
    <span className={isOnline ? css.green : css.red}></span>
    <img className={css.avatar} src={avatar} alt="user avatar" width="48" />
    <p className={css.name}>{name}</p>
  </li>
}


FriendList.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}
export default FriendList