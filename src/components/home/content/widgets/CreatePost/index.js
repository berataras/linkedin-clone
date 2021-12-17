import styles from './CreatePost.module.scss'

function CreatePost() {
    return (
        <div className={styles.createPostCard}>
            <input type="text" placeholder="Create Post..." />

            <ul>
                <li>
                    <a href="">
                        <i className="icon-camera" id={styles.iconCamera} />
                        <span>Photo</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="icon-video" id={styles.iconVideo} />
                        <span>Video</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="icon-share" id={styles.iconEvent} />
                        <span>Event</span>
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="icon-edit" id={styles.iconEdit} />
                        <span>Write Articles</span>
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default CreatePost;
