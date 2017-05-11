import React, { Component } from 'react'
import { Link } from 'react-router'
import s from './styles.css'

import ArrowIcon from './arrow.svg'

export default class Slider extends Component {
    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.item}>
                    <div className={s.data}>
                        <div className={s.content}>
                            <div className={s.head}>
                                <h2>Нам нравится делать красивые сайты</h2>
                                <p>В нашей студии смелые идеи и современные технологии смешиваясь, образуют эффективный инструмент для решения любых задач</p>
                                <Link to='/contact'>
                                    Сделать заказ
                                    <ArrowIcon/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={s.news}>
                        <div className={s.news_wrapper}>
                            <div className={s.title}>Последние записи</div>
                            <div className={s.list}>
                                <div className={s.element}>
                                    <div className={s.content_news}>
                                        <a href='#'>Цифровое <i>развитие России отстаёт</i> от мирового в среднем на 5–8 лет</a>
                                    </div>
                                </div>
                                <div className={s.element}>
                                    <div className={s.content_news}>
                                        <a href='#'><i>Минусы Битрикса</i>, или Битрикс глазами программиста</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}