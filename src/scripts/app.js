import ReactDOM from 'react-dom'
import React from 'react'
import HomeView from './Components'
import Backbone from 'backbone'


const app = function() {

	const YearModel = Backbone.Model.extend({ //extend a backbone model (first step)
    })
    const YearCollection = Backbone.Collection.extend({ //extend a backbone collection
        model: YearModel //sets GuestModel on the model property of the collection
    })

	ReactDOM.render(<HomeView yearColl={new YearCollection()} />,document.querySelector('.container')) // calls the GuestView compnent and inserts it a the container div. It passes a new instance of GuestCollection on the GuestsView props
}

app()