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
                    <div className={s.item}>
                        <div className={s.img}>
                            <img src='https://png.cmtt.space/paper-preview-fox/f/oo/foodberry/79ee02a0960b-original.jpg'/>
                        </div>
                        <div className={s.content}>
                            <div className={s.time}>17 мая 2017</div>
                            <a href='#'>FoodBerry — приложение для предзаказа еды в ресторанах</a>
                            <div className={s.description}>Позволяет выбрать позиции в меню, оплатить счёт и получить заказ без ожидания.</div>
                        </div>
                    </div>

                    <div className={`${s.item} ${s.small}`}>
                        <div className={s.img}>
                            <img src='https://img.artlebedev.ru/everything_files/images/3457/licence-plates-1200.jpg' />
                        </div>
                        <div className={s.content}>
                            <div className={s.time}>25 апреля 2017</div>
                            <a href='#'>Facebook — мобильный сервис бесплатных объявлений</a>
                            <div className={s.description}>Работает на основе технологий компьютерного зрения, обработки естественного языка и машинного обучения.</div>
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