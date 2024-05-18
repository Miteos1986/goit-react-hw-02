import FriendListItem from "./FriendListItem";
import styles from "./FriendList.module.css"

const FriendList = ({friends}) => {
return (
    <div className={styles.containerFriend}>
<ul className={styles.listFriend} > 
{friends.map(({avatar, id, name, isOnline})=>{
    return (<li className={styles.listItem} key={id} >
    <FriendListItem avatar={avatar} name={name} isOnline={isOnline}  />
</li>)
})}
	
</ul>
</div>
)
}

export default FriendList