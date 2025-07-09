import React from 'react';
import styles from './SubCard.module.css'
import text_styles from '@styles/text.module.css'
import Paragraph from "@components/Paragraph/Paragraph.jsx";

function SubCard({title, children}) {
    return (
        <div className={styles.subcard}>
            <Paragraph size={3} variant="bold">{title}</Paragraph>
            <Paragraph size={3}>{children}</Paragraph>
        </div>
    );
}

export default SubCard;
