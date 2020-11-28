import React from "react";

export default class Starwarspeople extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
        this.loadData();
    }

    render(){
        let data = this.state.data;
        let renderData = [];
        for(let i = 0; i < data.length;i++){
            renderData.push(<div>{data[i].name}</div>)
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Altura</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map( character => {
                        return (
                            <tr>
                                <td>{character.name}</td>
                                <td>{character.height}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>);
    }

    async loadData() {
        let response = await fetch("https://swapi.dev/api/people/");
        let parsedResponse = await response.json();
        this.setState({
            data: parsedResponse.results
        })
    }
}