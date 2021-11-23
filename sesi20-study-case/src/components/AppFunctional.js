import React, { useEffect, useState } from "react";
import '../App.css'

function AppFunction () {

    const [date, setDate] = useState(new Date())

    function tick() {
        setDate(new Date())
    }

    useEffect(() => {
        const interval = setInterval(() => tick(), 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <>
            <h1>Realtime Clock Function</h1>
            <h1>{date.toLocaleTimeString()}</h1>
        </>
    )
}

export default AppFunction