import React, { Component } from 'react'
import s from './styles.css'

import Header from '../../components/Header'

import { connect } from 'react-redux'
import * as Actions from '../../actions/App'
import { bindActionCreators } from 'redux'

class App extends Component {
    render() {
        return (
            <div className={s.app}>
                <Header color={this.props.app.colorHeader}/>
                <div className={s.content}>
                    {this.props.children}
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

export default connect(mapStateToProps, mapDispatchToProps)(App)