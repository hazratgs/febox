import React, { Component } from 'react'
import { Link } from 'react-router'
import s from './styles.css'

export default class Aside extends Component {

    hideAside = (e) => {
        if (e.target.classList.contains(s.aside)){
            this.props.handleHideAside();
        }
    }

    render() {
        return(
            <div
                className={`${s.aside} ${s[this.props.state]}`}
                onClick={this.hideAside}>
                <div className={s.wrapper}>
                    <div className={s.nav}>
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
                </div>
            </div>
        )
    }
}