import React from "react"

export default class starwarscharacter extends React.Component{
    render() {
        return (
            <tr>
                <td>{character.name}</td>
                <td>{character.height}</td>
            </tr>
        )
    }
}