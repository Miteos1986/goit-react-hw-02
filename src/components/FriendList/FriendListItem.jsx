import styles from "./FriendList.module.css"

const FriendListItem = ({avatar, name, isOnline}) => {
   return (
<div>
  <img src={avatar} alt={name} width="48" />
  <p className={styles.title} >{name}</p>
  <p className={isOnline ? styles.online : styles.offline }> 
  {isOnline ? "Online" : "Offline"} 
  </p>
</div>)
}

export default FriendListItem