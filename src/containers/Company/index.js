import React, { Component } from 'react'
import Footer from '../../components/Footer'
import s from './styles.css'

import SiteIcon from './site.svg'
import AppIcon from './app.svg'
import SeoIcon from './seo.svg'
import ServiceIcon from './service.svg'

import { connect } from 'react-redux'
import * as Actions from '../../actions/App'
import { bindActionCreators } from 'redux'

class Company extends Component {
    state = {
        loader: 'hidden'
    }

    constructor(props) {
        super(props)

        setTimeout(() => this.setState({loader: 'show'}), 60)
    }

    componentWillMount() {
        this.props.actions.changeColorHeader('white')
    }

    render() {
        return (
            <div className={s.company}>
                <div className={s.wrapper}>
                    <div className={`${s.content} ${s[this.state.loader]}`}>
                        <div className={s.block}>
                            <h1><strong>Студия Фебокс —</strong> это производственное digital-агентство</h1>
                            <p>Мы делаем сайты, приложения и фирменные стили. Готовые продукты не бросаем, а предлагаем поддержку: вдруг вам понадобится сделать презентацию или добавить на сайт раздел.</p>
                            <p></p>
                            <p>Наши проекты получают награды, их копируют и просят «сделать такие же». Все потому что мы вплотную работаем с клиентом: изучаем его бизнес, конкурентов, проводим встречи, постоянно находимся на связи. Со многими продолжаем дружить после окончания проекта и ходим друг к другу в гости.</p>
                            <p></p>
                            <p>С нами легко. Мы предлагаем только те решения, в пользе которых уверены.</p>
                        </div>
                        <div className={s.number}>
                            <div className={s.item}>
                                <strong>30+</strong>
                                <span>проектов</span>
                            </div>
                            <div className={s.item}>
                                <strong>7</strong>
                                <span>новых клиентов</span>
                            </div>
                            <div className={s.item}>
                                <strong>×2</strong>
                                <span>рост оборота</span>
                            </div>
                            <div className={s.item}>
                                <strong>1</strong>
                                <span>новый сотрудник</span>
                            </div>
                            <div className={s.item}>
                                <strong>640</strong>
                                <span>чашек кофе</span>
                            </div>
                            <div className={s.item}>
                                <strong>39</strong>
                                <span>созвонов</span>
                            </div>
                            <div className={s.item}>
                                <strong>47</strong>
                                <span>встреч</span>
                            </div>
                            <div className={s.item}>
                                <strong>3</strong>
                                <span>презентаций</span>
                            </div>
                        </div>
                        <div className={s.block}>
                            <p>За годы работы с компаниями мирового уровня мы выстроили удобный клиентский сервис с оперативными ответамии проактивными менеджерами, которые болеют за бизнес клиентов.</p>
                            <p></p>
                            <p>Продолжаем делать все, чтобы компаниям и их клиентам было уютно в цифровой среде. Улучшаем digital-мир.</p>
                        </div>
                        <div className={s.block}>
                            <p></p>
                            <p></p>
                            <p></p>
                            <h2>Услуги</h2>
                            <p>Мы уделяем особое внимание анимации интерфейсов, чтобы сделать их использование естественным.</p>
                        </div>
                        <div className={s.service}>
                            <div className={s.item}>
                                <SiteIcon/>
                                <strong><span>Разработка</span> сайтов</strong>
                            </div>
                            <div className={s.item}>
                                <AppIcon/>
                                <strong><span>Мобильные</span> приложения</strong>
                            </div>
                            <div className={s.item}>
                                <SeoIcon/>
                                <strong><span>Продвижение</span> сайтов</strong>
                            </div>
                            <div className={s.item}>
                                <ServiceIcon/>
                                <strong><span>Техническая</span> поддержка</strong>
                            </div>
                        </div>
                        <div className={s.block}>
                            <p>Сочетание дизайна, технологий и анимации дает нам преимущество на рынке и отличает наши работы.</p>
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
        app: state.App
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company)