import styles from './Header.module.scss'
console.log(styles)
function Header(props) {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <a href="#">
                    <img src="/images/logo.svg" className="logo" alt="logo" />
                </a>

                <div className={styles.search}>
                    <i className={`icon-search ${styles.searchIcon}`} />
                    <input className={styles.searchInput} type="text" placeholder="Search..." />
                </div>

                <nav className={styles.menu}>
                    <ul>
                        <li className={styles.active}>
                            <a href="">
                                <i className="icon-home" />
                                <span>Home</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon-users" />
                                <span>Users</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon-briefcase" />
                                <span>Jobs</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon-message" />
                                <span>Messages</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon-notification" />
                                <span>Notifications</span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="icon-grid" />
                                <span>Applications</span>
                            </a>
                        </li>
                    </ul>
                </nav>

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
            </div>
        </header>
    );
}

export default Header;
