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

    componentWillMount(){

        // Белый вариант дизайна
        this.props.actions.appActions.changeStyleApp('white');
    }

    componentWillUnmount(){

        // Белый вариант дизайна
        this.props.actions.appActions.changeStyleApp('black');
    }

    render() {
        let items = this.props.work.works.map((item, index) => <Item key={index} item={item}/>);

        return (
            <div className={s.work}>
                <div className={`${s.wrapper} ${s[this.state.loader]}`}>
                    <h1>Студия Фебокс —<br/>это производственное digital-агентство</h1>
                    <p>Мы делаем сайты, приложения и фирменные стили. Готовые продукты не бросаем, а предлагаем поддержку: вдруг вам понадобится сделать презентацию или добавить на сайт раздел.</p>
                    <div className={s.tabs}>
                        <span>Landscape</span>
                        <span>Portraits</span>
                        <span>Adventure</span>
                        <span>People</span>
                    </div>
                    <div className={s.content}>
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
                    <p>{this.props.item.type}</p>
                </div>
                <div className={s.bg}>
                    <div className={s.img} style={style}></div>
                    <div className={s.overlay}></div>
                </div>
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