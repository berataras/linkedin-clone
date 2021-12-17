import styles from './FilterPost.module.scss'

function FilterPost(props) {
    return (
        <div className={styles.filterPostCard}>
            <h6>Filter post by :</h6>
            <div className={styles.dropdown}>
                <span>Popular</span>
                <i className="icon-down-open" />
            </div>
        </div>
    );
}

export default FilterPost;
