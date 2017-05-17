/* eslint-disable */

import React, { PureComponent } from 'react'
import { ViewPager, Frame, Track, View } from 'react-view-pager'
import { Link } from 'react-router'
import s from './styles.css'

import ArrowIcon from './arrow.svg'

export default class Slider extends PureComponent {

    constructor() {
        super();

        // Слайды
        this.slides = []
    }

    state = {
        activeSlide: 0,
        start: true
    }

    componentDidMount() {

        console.log(this.slides)

        // Запуск первого слайда
        setTimeout(() => this.slide([0]), 300)
    }

    slide(param) {
        // if (!this.slides.length) return null

        // Останавливаем другие слайды
        // this.slides.map(item => item.pause())

        // Ожидаем полной загрузки видео

        // Запускаем новый
        // setTimeout(() => this.slides[param[0]].play(), 300)

        // Обновление активного элемента
        this.setState({activeSlide: param[0]})

    }

    render() {
        let works = this.props.works.map((item, index) => {
            if (item === null) return null;
            return <Item
                        key={index}
                        slide={index}
                        data={item}
                        state={this.slides}
                        start={this.state.start}
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
                        </Track>
                    </Frame>
                </ViewPager>
            </div>
        )
    }
}

class Item extends Slider {
    render() {
        let active = this.props.active === this.props.slide ? 'active' : 'hidden'

        return (
            <View className={s.view}>
                <div className={s.item}>
                    <div className={`${s.video}`}>
                        {/*<video*/}
                            {/*src={this.props.data.video}*/}
                            {/*preload='auto'*/}
                            {/*loop*/}
                            {/*muted*/}
                            {/*playsInline*/}
                            {/*ref={slide => {this.props.state[this.props.slide] = slide}}*/}
                        {/*/>*/}
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