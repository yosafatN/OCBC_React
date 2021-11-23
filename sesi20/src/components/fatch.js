import { useState, useEffect } from "react";

export default function FatchComponent () {
    const [baseURL] = useState('https://jsonplaceholder.typicode.com')
    const [ facts, setFact ] = useState([])

    useEffect(() => {
        fetch(`${baseURL}/todos`)
        .then((response) => response.json())
        .then((result) => setFact(result.slice(0, 20)))
    })

    return(
        <>
            <table>
                <tbody>
                    {
                        facts.map((fact, index) => (
                            <tr key={index}>
                                <td>{fact.id}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}