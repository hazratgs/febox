/* eslint-disable */

import React, { PureComponent } from 'react'
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { Link } from 'react-router'
import update from 'immutability-helper';

import s from './styles.css'

import ArrowIcon from './arrow.svg'

export default class Slider extends PureComponent {

    componentDidMount() {

        // Запуск первого слайда
        if (Array.isArray(this.props.works)){
            setTimeout(() => this.slide([this.props.works[0]['id']]), 600)
        }
    }

    async videoLoader(slide) {
        try {
            let response = await fetch(slide.video, {
                method: 'get',
                cache: 'force-cache',
                mode: 'no-cors'
            });

            let blob = await response.blob();
            let objectURL = URL.createObjectURL(blob);
            return objectURL;

        } catch (e){
            return null
        }
    }

    async slide(param) {

        // Данные текущего слайда
        const slide = this.props.works[param[0]];

        // Смотрим, загружено ли видео ранее
        if (!this.props.state.blobs.hasOwnProperty(slide.id)){

            // Ожидаем полной загрузки видео
            let blob = {};
            blob[slide.id] = await this.videoLoader(slide)

            // Фиксируем загрузку видео
            const updateBlobs = update(this.props.state.blobs, {$merge: blob});
            this.props.homeActions.addBlobElement(updateBlobs)

            // Обновление активного элемента
            this.props.homeActions.activeNewSlide(slide.id)

        } else {

            // Есть видео в сторе
            if (this.props.state.videos.hasOwnProperty(slide.id)){

                // Останавливаем другие слайды
                for (let item in this.props.state.videos){
                    this.props.state.videos[item].pause()
                }

                // Запускаем новый
                setTimeout(() => this.props.state.videos[param[0]].play(), 300)

                // Обновление активного элемента
                this.props.homeActions.activeNewSlide(slide.id)
            }

        }

        // this.setState({activeSlide: slide.id})
    }

    render() {
        let works = this.props.works.map((item) => {
            if (item === null) return null;
            return <Item
                        key={item.id}
                        data={item}
                        homeActions={this.props.homeActions}
                        state={this.props.state}
                    />
        })

        return (
            <div className={s.wrapper}>
                <ViewPager tag='main' className={s.slide}>
                    <Frame className={s.frame}>
                        <Track
                            ref={c => this.track = c}
                            viewsToShow={1}
                            className={s.track}
                            onViewChange={::this.slide}
                        >
                            {works}
                        </Track>
                    </Frame>
                </ViewPager>
            </div>
        )
    }
}

class Item extends Slider {

    fixedStateVideo(video) {
        if (!this.props.state.videos.hasOwnProperty(this.props.data.id)){

            // Присваиваем blob url
            video.src = this.props.state.blobs[this.props.data.id];

            let newVideo = {};
            newVideo[this.props.data.id] = video

            // Добавляем новое видео в стор
            const updateVideo = update(this.props.state.videos, {$merge: newVideo});
            this.props.homeActions.addVideoElement(updateVideo)
        }
    }

    render() {
        let active = this.props.state.activeSlide === this.props.data.id ? 'active' : 'hidden'

        // Если видео не загружено, запускаем лоадер
        let loaded = this.props.state.blobs.hasOwnProperty(this.props.data.id);

        return (
            <View className={s.view}>
                <div className={s.item}>
                    <div className={`${s.video}`}>

                        { loaded
                            ?   <video
                                    loop
                                    muted
                                    playsInline
                                    ref={::this.fixedStateVideo}
                                />
                            :   <div style={{color: '#fff'}}>Загрузка...</div>
                        }

                    </div>
                    <div className={`${s.block} ${s[active]}`}>
                        <div className={s.data}>
                            <div className={`${s.content}`}>
                                <div className={s.head}>
                                    <h2>{this.props.data.title}</h2>
                                    <p>{this.props.data.description}</p>
                                    <div className={s.buttons}>
                                        <Link className={s.button} to='/work'>
                                            Смотреть работу
                                            <ArrowIcon/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </View>
        )
    }
}

// const News = () => {
//     return (
//         <div className={s.news}>
//             <div className={s.news_wrapper}>
//                 <div className={s.title}>Последние записи</div>
//                 <div className={s.list}>
//                     <div className={s.element}>
//                         <div className={s.content_news}>
//                             <a href='#'>Цифровое <i>развитие России отстаёт</i> от мирового в среднем на 5–8 лет</a>
//                         </div>
//                     </div>
//                     <div className={s.element}>
//                         <div className={s.content_news}>
//                             <a href='#'><i>Минусы Битрикса</i>, или Битрикс глазами программиста</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }