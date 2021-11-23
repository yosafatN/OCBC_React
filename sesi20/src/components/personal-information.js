import React, { Component } from 'react'
import Quote from './quote'

class PersonalInformation extends Component {
    constructor() {
        super()
        this.state = {
            name: "Yosafat",
            age: 21,
            quote: {
                quote1: "Quote Satu",
                quote2: "Quote Dua"
            },
            country: 'Indonesia'
        }
    }

    changeCountry = () => {
        const change = this.state.country === 'Indonesia' ? 'Singapore' : 'Indonesia'
        this.setState({
            country: change
        })
    }

    getPersonalInformation() {
        return this.state
    }

    render() {
        return (
            <>
                <h1>Personal Infromation</h1>
                <span>Name : {this.getPersonalInformation().name}</span>
                <span>Age  : {this.getPersonalInformation().age}</span>
                <br></br>
                <span>Quote: </span>
                <Quote data={this.getPersonalInformation()}></Quote>
                <button onClick={this.changeCountry}>Change Country</button>
            </>
        )
    }
}

export default PersonalInformation