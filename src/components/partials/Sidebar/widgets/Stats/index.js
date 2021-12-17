import styles from './Stats.module.scss'

function Stats() {
    return (
        <div className={styles.widgetStats}>
             <div className={styles.statsUser}>
                 <div className={styles.cover} />
                 <div className={styles.avatar}>
                     <img src="/images/avatar.png" alt=""/>
                 </div>
                 <div className={styles.name}>
                     Cameron Williamson
                 </div>
                 <div className={styles.jobTitle}>
                     Business Analyst
                 </div>
             </div>
            <ul className={styles.analyticsWrapper}>
                <li>
                    <span className={styles.key}>Who viewed your profile</span>
                    <span className={styles.value}>90</span>
                </li>
                <li>
                    <span className={styles.key}>Views of your post</span>
                    <span className={styles.value}>627</span>
                </li>
            </ul>
        </div>
    );
}

export default Stats;
