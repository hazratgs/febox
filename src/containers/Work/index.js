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
        let data = [
            {
                img: 'https://ony.ru/upload/Blocks/image/case_thumb/eb1e3a99999d646d4a5737b592a63a76.jpg',
                title: 'Новая Третьяковка',
                type: 'Ребрендинг'
            }
        ];

        let items = data.map(item => <Item item={item}/>);

        return (
            <div className={s.work}>
                <div className={`${s.wrapper} ${s[this.state.loader]}`}>
                    <h1>Портфолио</h1>
                    <p>Мы не используем готовые макеты, а с чистого листа создаем решение конкретной задачи</p>

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
        return (
            <div className={s.item}>
                <div className={s.title}>
                    <strong>{this.props.item.title}</strong>
                    <p>{this.props.item.type}</p>
                </div>
                <div className={s.bg}>
                    <div></div>
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