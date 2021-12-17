import styles from './PostCard.module.scss'

function PostCard() {
    return (
        <div className={styles.postCard}>
            <div className={styles.header}>
                <div className={styles.userWrapper}>
                    <img className={styles.avatar} src="/images/avatar.png" alt=""/>
                    <div className={styles.info}>
                        <span className={styles.name}>Brooklyn Simmons</span>
                        <span className={styles.title}>UI/UX Designer at Freelance</span>
                        <span className={styles.date}>7 hour ago</span>
                    </div>
                </div>
                <div className={styles.dropdown}>
                    <i className="icon-dot-3" />
                </div>
            </div>

            <div className={styles.postContent}>
                <p className={styles.description}>
                    He said, Design is not just what it looks and feels like. Design is how it work.

                    <div className={styles.hashtag}>
                        <span>#stevejobs</span>
                        <span>#design</span>
                        <span>#apple</span>
                    </div>
                </p>

                <img src="/images/widgets/steve-jobs.png" className={styles.media} />


                <div className={styles.socialDetails}>
                    <div>
                        <i className="icon-heart" />
                        <i className="icon-share" />
                    </div>
                    <div className={styles.info}>
                        <span className={styles.like}>172</span>
                        <span className={styles.comment}>10 Comment</span>
                    </div>
                </div>

                <div className={styles.socialButtons}>
                    <div className={styles.button}>
                        <i className="icon-plus" />
                        <span>Like</span>
                    </div>
                    <div className={styles.button}>
                        <i className="icon-plus" />
                        <span>Like</span>
                    </div>
                    <div className={styles.button}>
                        <i className="icon-plus" />
                        <span>Like</span>
                    </div>
                    <div className={styles.button}>
                        <i className="icon-plus" />
                        <span>Like</span>
                    </div>
                </div>

                <div className={styles.writeCommentCard}>
                    <img src="/images/widgets/steve-jobs.png" />
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder="Write Comment" />
                        <i className="icon-camera" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
