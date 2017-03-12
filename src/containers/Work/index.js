import React, { Component } from 'react'
import Footer from '../../components/Footer'

import { connect } from 'react-redux'
import * as Actions from '../../actions/Work'
import * as AppActions from '../../actions/App'
import { bindActionCreators } from 'redux'

import s from './styles.css'

class Work extends Component {

    state = {
        loader: 'hidden'
    }

    constructor(props) {
        super(props)

        setTimeout(() => this.setState({loader: 'show'}), 60)
    }

    render() {
        return (
            <div className={s.work}>
                <div className={s.wrapper}>
                    <div className={`${s.content} ${s[this.state.loader]}`}>
                        <div className={`${s.item} ${s.big} ${s.white}`}>
                            <div className={s.head}>
                                <div className={s.name}>
                                    <strong>Сайт завода «Калугатрансмаш»</strong>
                                </div>
                                <span>11.09.2016</span>
                            </div>
                            <div className={s.image}>
                                <img src='https://img.artlebedev.ru/everything_files/images/3607/kaluga-teaser-mob.jpg'/>
                            </div>
                        </div>

                        <div className={`${s.item} ${s.bg}`}>
                            <div className={s.head}>
                                <div className={s.name}>
                                    <strong>Фонтанус-2</strong>
                                </div>
                                <span>06.02.2017</span>
                            </div>
                            <div className={s.image}>
                                <img src='https://img.artlebedev.ru/everything_files/images/3571/fontanus-1-600.jpg'/>
                            </div>
                        </div>

                        <div className={`${s.item}`}>
                            <div className={s.head}>
                                <div className={s.name}>
                                    <strong>Фирменный стиль сети супермаркетов «Семья»</strong>
                                </div>
                                <span>28.03.2017</span>
                            </div>
                            <div className={s.image}>
                                <img src='https://img.artlebedev.ru/everything_files/images/3482/semya-600.png'/>
                            </div>
                        </div>

                        <div className={`${s.item}  ${s.white}`}>
                            <div className={s.head}>
                                <div className={s.name}>
                                    <strong>Инсталляции для витрин торговых центров «ТПС недвижимости»</strong>
                                </div>
                                <span>28.03.2017</span>
                            </div>
                            <div className={s.image}>
                                <img src='https://img.artlebedev.ru/everything_files/images/3458/GIF.gif'/>
                            </div>
                        </div>

                        <div className={`${s.item} ${s.big}`}>
                            <div className={s.head}>
                                <div className={s.name}>
                                    <strong>Логотип парка им. Шевченко</strong>
                                </div>
                                <span>11.09.2016</span>
                            </div>
                            <div className={s.image}>
                                <img src='https://img.artlebedev.ru/everything_files/images/3287/shevchenko-1200.jpg'/>
                            </div>
                        </div>

                        <div className={`${s.item}  ${s.white}`}>
                            <div className={s.head}>
                                <div className={s.name}>
                                    <strong>Логотип и вывеска пельменной</strong>
                                </div>
                                <span>28.03.2017</span>
                            </div>
                            <div className={s.image}>
                                <img src='https://img.artlebedev.ru/everything_files/images/3306/pelmennaya-600.jpg'/>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        work: state.Work
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            appActions: bindActionCreators(AppActions, dispatch),
            workActions: bindActionCreators(Actions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Work)