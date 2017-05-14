import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router'
import s from './styles.css'

import ArrowIcon from './arrow.svg'
import InstagramIcon from './instagram.svg'
import VkontakteIcon from './vkontakte.svg'

export default class Slider extends Component {

    state = {
        loader: 'hidden',
        video: 'hidden'
    }

    componentWillMount() {
        setTimeout(() => this.setState({loader: 'show'}), 60)
    }

    videoLoaded() {
        setTimeout(() => this.setState({video: 'active'}), 60);
    }

    render() {
        return (
            <div className={s.wrapper}>
                <div className={s.item}>
                    <div className={`${s.video} ${s[this.state.video]}`}>
                        <ReactPlayer
                            url='https://www.agima.ru/upload/iblock/f7d/f7dfd450297a53076fd5db307bd8bb7c.mp4'
                            fileConfig={{attributes: {autoPlay: true, muted: true, playsInline: true, preload: false}}}
                            playing
                            loop
                            playsinline
                            volume={0}
                            onStart={::this.videoLoaded}
                        />
                    </div>

                    <div className={`${s.block} ${s[this.state.loader]}`}>
                        <div className={s.data}>
                            <div className={s.content}>
                                <div className={s.head}>
                                    <h2>Студия Фебокс — <br/>это производственное digital-агентство</h2>
                                    <p>В нашей студии смелые идеи и современные технологии смешиваясь, <br/>образуют эффективный инструмент для решения любых задач</p>
                                    <div className={s.buttons}>
                                        <Link className={s.button} to='/work'>
                                            Смотреть работы
                                            <ArrowIcon/>
                                        </Link>
                                        <a className={s.socialButton} href='https://www.instagram.com/febox26/' target='_blank'>
                                            <InstagramIcon/>
                                        </a>
                                        <a className={s.socialButton} href='https://vk.com/febox' target='_blank'>
                                            <VkontakteIcon/>
                                        </a>
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
                </div>
            </div>
        )
    }
}