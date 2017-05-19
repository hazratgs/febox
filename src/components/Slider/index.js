/* eslint-disable */

import React, { PureComponent } from 'react'
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { Link } from 'react-router'
import update from 'immutability-helper';

import s from './styles.css'

import ArrowIcon from './arrow.svg'

export default class Slider extends PureComponent {

    constructor() {
        super();

        // Слайды
        this.slides = []

        // Загруженные видео
        this.blobs = {}
    }

    state = {
        activeSlide: null,
        blobs: {},
        slides: {}
    }

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

        // Останавливаем другие слайды
        // this.slides.map(item => item.pause())

        // Смотрим, загружено ли видео ранее
        if (!this.state.blobs.hasOwnProperty(slide.id)){

            // Ожидаем полной загрузки видео
            let blob = {};
            blob[slide.id] = await this.videoLoader(slide.id)

            // Фиксируем загрузку видео
            const updateBlobs = update(this.state.blobs, {$merge: blob});
            this.setState({blobs: updateBlobs});

            // Запускаем новый
            // setTimeout(() => this.slides[param[0]].play(), 300)
        } else {


        }

        // Обновление активного элемента
        this.setState({activeSlide: slide.id})
    }

    render() {
        let works = this.props.works.map((item) => {
            if (item === null) return null;
            return <Item
                        key={item.id}
                        data={item}
                        blobs={this.state.blobs}
                        state={this.slides}
                        active={this.state.activeSlide}
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
    render() {
        let active = this.props.active === this.props.data.id ? 'active' : 'hidden'

        // Если видео не загружено, запускаем лоадер
        let loaded = this.props.blobs.hasOwnProperty(this.props.active);

        return (
            <View className={s.view}>
                <div className={s.item}>
                    <div className={`${s.video}`}>

                        { loaded
                            ?   <video
                                    src={this.props.data.video}
                                    loop
                                    muted
                                    playsInline
                                    ref={slide => {this.props.state[this.props.data.id] = slide}}
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