import React, { Component } from 'react'
import s from './styles.css'

import PhoneIcon from './phone.svg'
import FileIcon from './file.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className={s.footer}>
                <footer>
                    <div className={s.wrapper}>
                        <div className={s.item}>
                            <div className={s.contact}>
                                <div className={s.phone}>
                                    <PhoneIcon/>
                                    <strong>8 800 600-40-40</strong>
                                    <small>Все звонки по России бесплатны</small>
                                </div>
                                <div className={s.work}>
                                    <p>Хотите работать у нас? Прекрасно вас понимаем!</p>
                                    <p>Пишите <a href='#'>hello@febox.ru</a></p>
                                </div>
                            </div>
                        </div>
                        <div className={`${s.item} ${s.center}`}></div>
                        <div className={s.item}>
                            <div className={s.nav}>
                                <a href='#'>О компании<span>,</span></a>
                                <a href='#'>Услуги<span>,</span></a>
                                <a href='#'>Работы<span>,</span></a>
                                <a href='#'>Блог<span>,</span></a>
                                <a href='#'>Контакты</a>
                            </div>
                            <div className={s.doc}>
                                <button>Бриф на разработку сайта</button>
                                <span>
                                    <FileIcon />
                                    2.6 Мб
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={s.wrapper}>
                        <div className={s.item}>
                            <div className={s.copyright}>© Febox Technologies Inc. Все права защищены.</div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}