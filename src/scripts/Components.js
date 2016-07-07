import React from 'react'
import Backbone from 'backbone'

var backInterval
var forwardInterval

const HomeView = React.createClass({ //
    getInitialState: function(){ //lifecycle method that establishes the starting state of the guestsColl props
        return{
            currentYear: 1900
        }
    },

    componentWillMount: function(){
        Backbone.Events.on('yearChange', (payload)=>{
            this.setState({
                currentYear: payload
            })
        })

    },

    render: function() { // renders all the components that you will see on the page (top level view)
       
        return (
            <div id="guestsViewContainer">
                <Header />

                <Tabs currentYear={this.state.currentYear}/>
            </div>
            )
    }
})

const Tabs = React.createClass({
    componentWillMount: function(){
        var backNode = document.querySelector('#back')
        var stopNode = document.querySelector('#stop')
        var forwardNode = document.querySelector('#forward')
    },
    _minus: function(){
        var newYear = this.props.currentYear - 1
        Backbone.Events.trigger('yearChange', newYear)
    },
    _plus: function(){
        var newYear = this.props.currentYear + 1
        Backbone.Events.trigger('yearChange', newYear)
    },
    _handleGoBack: function(){
        var newYear = this.props.currentYear - 1
        Backbone.Events.trigger('yearChange', newYear)
        backInterval = setInterval(this._minus,1000)

        var backNode = document.querySelector('#back')
        var stopNode = document.querySelector('#stop')
        var forwardNode = document.querySelector('#forward')

        backNode.style.background = '#99ff99'
        stopNode.style.background = '#66b3ff'
    },

    _handleGoForwards: function(){
        var newYear = this.props.currentYear + 1
        Backbone.Events.trigger('yearChange', newYear)
        forwardInterval = setInterval(this._plus,1000)

        var backNode = document.querySelector('#back')
        var stopNode = document.querySelector('#stop')
        var forwardNode = document.querySelector('#forward')

        forwardNode.style.background = '#99ff99'
        stopNode.style.background = '#66b3ff'
    },
    _handleStop: function(){
        clearInterval(backInterval)
        clearInterval(forwardInterval)

        var backNode = document.querySelector('#back')
        var stopNode = document.querySelector('#stop')
        var forwardNode = document.querySelector('#forward')

        stopNode.style.background = '#99ff99'
        backNode.style.background = '#66b3ff'
        forwardNode.style.background = '#66b3ff'
    },

    render: function() {
       
        return (
            <div>
                <div className="tabsContainer">
                    <a id='back' onClick={this._handleGoBack}>Go Backward</a>
                    <a id='stop' onClick={this._handleStop}>Stop</a>
                    <a id='forward' onClick={this._handleGoForwards}>Go Forward</a>
                </div>
                <div className="yearContainer">
                    <a>Current Year is: {this.props.currentYear} </a>
                </div>
            </div>
            )
    }
})


const Header = React.createClass({ //renders the top of the top of the page
    render: () => {
        return (
            <div id="headingContainer">
                <h1>Time Machine</h1>
            </div>
            )
    }
})

export default HomeView //makes it available for import so all the modules can communicate with each other