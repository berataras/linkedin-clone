import React from 'react';
import styles from './Newest.module.scss';

function Newest(props) {
    return (
        <div className={styles.widgetNewest}>
            <h4>NEWEST</h4>
            <ul>
                <li>
                    <a href="#"># money</a>
                </li>
                <li>
                    <a href="#"># economy</a>
                </li>
                <li>
                    <a href="#"># markets</a>
                </li>
                <li>
                    <a href="#"># futurism</a>
                </li>
            </ul>

            <h4>
                <span>GROUP</span>
                <div className={styles.dropdown}>
                    <a href="#">
                        Active <i className="icon-down-open" />
                    </a>
                </div>
            </h4>
            <ul>
                <li>
                    <i className="icon-users" />
                    <a href="#">Android Developers Group</a>
                </li>
                <li>
                    <i className="icon-users" />
                    <a href="#">User Interface</a>
                </li>
                <li>
                    <i className="icon-users" />
                    <a href="#">User Experience</a>
                </li>
                <li>
                    <i className="icon-users" />
                    <a href="#">Design Thinking</a>
                </li>
            </ul>
        </div>
    );
}

export default Newest;
