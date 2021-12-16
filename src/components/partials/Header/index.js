import styles from './Header.module.scss'
import Index from "./List";
import UserCard from "./UserCard";
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
                        <Index text="Home" icon="icon-home" active={styles.active} />

                        <Index text="Jobs" icon="icon-briefcase" />

                        <Index text="Messages" icon="icon-message" />

                        <Index text="Notifications" icon="icon-notification" />

                        <Index text="Applications" icon="icon-grid" />
                    </ul>
                </nav>

                <UserCard />
            </div>
        </header>
    );
}

export default Header;
