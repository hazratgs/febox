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

        setTimeout(() => this.props.actions.workActions.changeTypeWork('Все проекты'), 60)
    }

    componentWillMount(){

        // Белый вариант дизайна
        this.props.actions.appActions.changeStyleApp('white');
    }

    componentWillUnmount(){

        // Белый вариант дизайна
        this.props.actions.appActions.changeStyleApp('black');

        // Скрываем работы
        this.props.actions.workActions.hiddenWork()
    }

    render() {
        let items = this.props.work.works.map((item, index) => {
            if (this.props.work.activeType !== 'Все проекты' && item.type !== this.props.work.activeType) return null
            return <Item key={index} item={item}/>
        });

        let tabs = this.props.work.types.map((item, index) => {
            return <Tabs
                key={index}
                active={this.props.work.activeType}
                actions={this.props.actions.workActions}
                type={item}/>
        });

        return (
            <div className={s.work}>
                <div className={`${s.wrapper} ${s[this.state.loader]}`}>
                    <div className={s.block}>
                        <h1>Студия Фебокс —<br/>это производственное digital-агентство</h1>
                        <p>Мы делаем сайты, приложения и фирменные стили.
                            Готовые продукты не бросаем,
                            а предлагаем поддержку: вдруг вам понадобится сделать презентацию
                            или добавить на сайт раздел.
                        </p>
                        <div className={s.tabs}>
                            {tabs}
                        </div>
                    </div>

                    {/*<enableInlineVideo />*/}
                    <div className={`${s.content} ${s[this.props.work.state]}`}>
                        {items}
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

class Item extends Component {
    render() {
        let style = {
            backgroundImage: `url(${this.props.item.img})`
        }
        return (
            <div className={s.item}>
                <div className={s.title}>
                    <strong>{this.props.item.title}</strong>
                    <p>{this.props.item.description}</p>
                </div>
                <div className={s.bg}>
                    {   this.props.item.video
                        ? <div className={s.video}>
                            <video autoPlay muted loop playsInline src={this.props.item.video}>
                                <source src={this.props.item.video} type='video/mp4'/>
                            </video>
                          </div>
                        : <div className={s.img} style={style}></div>
                    }
                    <div className={s.overlay}></div>
                </div>
            </div>
        )
    }
}

class Tabs extends Component {
    handle(e) {
        this.props.actions.changeTypeWork(e.target.innerText)
    }

    render() {
        return (
            <span
                className={this.props.type === this.props.active ? s.active : ''}
                onClick={::this.handle}
            >
                {this.props.type}
            </span>
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