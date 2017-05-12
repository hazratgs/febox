import React, { Component } from 'react'
import s from './styles.css'

import Icon from './icon.svg'

export default class Alert extends Component {
    render() {
        return (
            <div className={s.alert}>
                <div className={s.wrapper}>
                    <Icon/>
                    <strong>Ошибка</strong>
                    <p>Мы делаем сайты, приложения и фирменные стили.</p>
                </div>
            </div>
        )
    }
}