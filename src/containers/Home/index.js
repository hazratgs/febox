import React, { Component } from 'react'
import Slider from '../../components/Slider'
import Footer from '../../components/Footer'

import { connect } from 'react-redux'
import * as Actions from '../../actions/Home'
import * as AppActions from '../../actions/App'
import { bindActionCreators } from 'redux'

import s from './styles.css'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.actions.appActions.changeColorHeader('white')
    }

    render() {
        let works = this.props.work.works.filter(item => item.attach)
        return (
            <div className={s.home}>
                <Slider works={works} state={this.props.home} homeActions={this.props.actions.homeActions}/>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        home: state.Home,
        work: state.Work
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            appActions: bindActionCreators(AppActions, dispatch),
            homeActions: bindActionCreators(Actions, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)