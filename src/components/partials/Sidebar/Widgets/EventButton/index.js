import React from 'react';
import styles from './EventButton.module.scss'

function EventButton(props) {
    return (
        <a className={styles.widgetEventButton}>
            Add Event
            <i className="icon-plus" />
        </a>
    );
}

export default EventButton;
