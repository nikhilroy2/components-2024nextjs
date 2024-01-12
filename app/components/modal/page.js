"use client"
import React from 'react';
import styles from './modal.module.css';
import { useState } from 'react';
function Modal(props) {
    const [modalShow, setModalShow] = useState(false)
    return (
        <div className={styles.wrapper}>
            <button className={styles.modal_btn} onClick={() => setModalShow(!modalShow)}>
                Open Modal
            </button>
            <div className={`${styles.modal_wrapper} ${modalShow ? '' : styles.modal_hide}`}>
                <div className={styles.modal_inner}>

                </div>
            </div>
        </div>
    );
}

export default Modal;