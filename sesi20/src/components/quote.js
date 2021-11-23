import React, { useEffect, useState } from 'react'

const Quote = (props) => {
    const [ quote, setQuote ] = useState(props.data.quote)
    const [ country, setCountry ] = useState(props.data.country)

    const changeQuote = () => {
        setQuote({
            ...quote,
            quote: {
                quote1: quote.quote1 + '1',
                quote2: quote.quote2 + '2'   
            }
        })
    }

    useEffect(() => {
        setCountry(props.country)
    }, [props.country])

    return(
        <>
            <span>{quote.quote1}</span>
            <span>{quote.quote2}</span>
            <br></br>
            <span>Country: {country}</span>
            <button onClick={changeQuote}>Change Name</button>
        </>
    )
    
}

export default Quote