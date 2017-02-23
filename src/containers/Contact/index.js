import React, { Component } from 'react'
import MaskedInput from 'react-text-mask'
import Textarea from 'react-textarea-autosize';
import s from './styles.css'

import FileIcon from './file.svg'
import MapIcon from './map.svg'

import { connect } from 'react-redux'
import * as Actions from '../../actions/App'
import { bindActionCreators } from 'redux'

class Contact extends Component {

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
            <div className={s.contact}>
                <div className={s.wrapper}>
                    <div className={`${s.map} ${s[this.state.loader]}`}>
                        <MapIcon />
                        <div className={s.data}>
                            <div className={s.list}>
                                <a className={s.email} href='#'>hello@febox.ru</a>
                                <a className={s.phone} href='tel:+79285396966'>+7 (928) 539-69-66</a>
                            </div>
                            <div className={s.marker}><b></b>Дербент, Гагарина, 15а, 2 этаж</div>
                        </div>
                    </div>
                    <div className={s.content}>
                        <div className={`${s.form} ${s[this.state.loader]}`}>
                            <div className={s.item}>
                                <div className={s.input}>
                                    <input type='text' min='0' max='70' required/>
                                    <label>имя</label>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.input}>
                                    <input type='text' min='0' max='70' required/>
                                    <label>email</label>
                                </div>
                                <div className={s.input}>
                                    <MaskedInput
                                        placeholderChar=' '
                                        min='0'
                                        type='text'
                                        max='170'
                                        required
                                        keepCharPositions={true}
                                        mask={['+', /[1-9]/, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                    />
                                    <label>телефон</label>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.input}>
                                    <Textarea min='0' max='280' required></Textarea>
                                    <label>чем мы можем вам помочь?</label>
                                </div>
                            </div>
                            <div className={`${s.item} ${s.footer}`}>
                                <div className={s.file}>
                                    <FileIcon/>
                                    <span>прикрепить документ</span>
                                </div>
                                <div className={s.button}>
                                    <button><span>отправить</span></button>
                                </div>
                            </div>
                            <div className={s.item}>
                                <div className={s.text}>
                                    Нажимая на кнопку «Отправить» Вы даете согласие на обработку своих персональных данных в соответствии со статьей 9 Федерального закона от 27 июля 2006 г. N 152-ФЗ «О персональных данных»
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Contact)