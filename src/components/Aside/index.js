import React, { Component } from 'react'
import { Link } from 'react-router'
import s from './styles.css'

import VkIcon from './vk.svg'

export default class Aside extends Component {

    state = {
        navLoader: 'hidden',
        socialLoader: 'hidden',
        contactLoader: 'hidden'
    }

    hideAside = (e) => {
        if (e.target.classList.contains(s.aside)){
            this.props.handleHideAside();
        }
    }

    componentWillReceiveProps(nextProps) {
        setTimeout(() => this.setState({navLoader: nextProps.state}), 200)
        setTimeout(() => this.setState({socialLoader: nextProps.state}), 270)
        setTimeout(() => this.setState({contactLoader: nextProps.state}), 340)
    }

    render() {
        return(
            <div
                className={`${s.aside} ${s[this.props.state]}`}
                onClick={this.hideAside}>
                <div className={s.wrapper}>
                    <div className={s.scroll}>
                        <div className={`${s.nav} ${s[this.state.navLoader]}`}>
                            <div className={s.item}>
                                <Link
                                    to='/works'
                                    activeClassName={s.active}
                                    onClick={this.props.handleHideAside}
                                >портфолио</Link>
                            </div>
                            <div className={s.item}>
                                <Link
                                    to='/company'
                                    activeClassName={s.active}
                                    onClick={this.props.handleHideAside}
                                >студия</Link>
                            </div>
                            <div className={s.item}>
                                <Link to='/contact'
                                      activeClassName={s.active}
                                      onClick={this.props.handleHideAside}
                                >контакты</Link>
                            </div>
                        </div>
                        <div className={`${s.social} ${s[this.state.socialLoader]}`}>
                            <a href='/'>
                                <VkIcon/>
                                <span>Мы Вконтакте</span>
                            </a>
                        </div>
                        <div className={`${s.contact} ${s[this.state.contactLoader]}`}>
                            <div className={s.phone}>
                                <a href='mailto:hello@febox.ru'>
                                    <span>hello@febox.ru</span>
                                </a>
                                <a href='tel:+79285396966'>+7 (883) 211-80-80</a>
                            </div>
                            <div className={s.address}>Дербент, Гагарина, 15 А, 2 этаж</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}