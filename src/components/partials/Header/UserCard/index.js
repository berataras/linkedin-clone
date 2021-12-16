import React from 'react';
import styles from "../Header.module.scss";

function UserCard(props) {
    return (
        <div className={styles.userCard}>
            <a href="">
                <span className={styles.detail}>
                    <span className={styles.name}>Berat Aras</span>
                    <span className={`${styles.status} ${styles.online}`}>Online</span>
                </span>
                <img src="/images/avatar.png" alt="avatar" className={styles.avatar}/>
                <i className="icon-down-open" />
            </a>
        </div>
    );
}

export default UserCard;
