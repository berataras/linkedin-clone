import React from 'react';

function Index(props) {
    const {text, icon, active} = props;
    return (
        <li className={active}>
            <a href="">
                <i className={icon} />
                <span>{text}</span>
            </a>
        </li>
    );
}

Index.defaultValue = {
    active: ''
}

export default Index;
