import React, { Component } from 'react'
import { Link } from 'react-router'
import s from './styles.css'

import MenuIcon from './menu.svg'

export default class Header extends Component {
    render() {
        return (
            <div className={`${s.header} ${s[this.props.color]}`}>
                <div className={s.logo}>
                    <Link to='/'>
                        <div className={s.wrapper}>
                            <div className={s.f}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className={s.e}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className={s.title}>
                            <strong>febox</strong>
                        </div>
                    </Link>
                </div>
                <div className={s.nav}>
                    <div className={s.wrapper}>
                        <Link to='#'>работы</Link>
                        <Link to='/company'>о студия</Link>
                        <Link to='#'>блог</Link>
                        <Link to='/contact'>контакты</Link>
                    </div>
                    <div className={s.menu}>
                        <MenuIcon/>
                    </div>
                </div>
            </div>
        )
    }
}
