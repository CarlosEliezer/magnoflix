import React from 'react';

function ButtonLink(props) {
    //props => {className, href: "o que alguém passar"}

    return (
        <a className={props.className} href={props.href}>
            {props.children}
        </a>
    );
}

export default ButtonLink