import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';

class Home extends Component {
    constructor() {
        super()
        this.state = { data: []}
    }

    componentWillMount() {
        axios.get("http://localhost:3001/home")
            .then((homeData) => {
                this.setState({ data: homeData.data });
            })
    }

    edit = (id) => {
        this.props.Edit(id);
    }

    delete = (id) => {
        this.props.Delete(id);
    }

    view = (id) => {
        this.props.View(id);
    }

    render() {

        const table = this.state.data.map((x, index) => {
            return (
                <tbody key={index}>
                    <tr>
                        <td><Link to = {`/view/${x.id}`} onClick={() => this.view(x.id)}>{x.date}</Link></td>
                        <td>{x.max}</td>
                        <td>{x.min}</td>
                        <td>{x.max - x.min}</td>
                        <td><Link to = {`/edit/${x.id}`} onClick={() => this.edit(x.id)}> Edit </Link></td>
                        <td><Link to = {`/delete/${x.id}`} onClick={() => this.delete(x.id)}> Delete </Link></td>
                    </tr>
                </tbody>
            )
        })

        return (
            <div>
                <table className = "table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Max</th>
                            <th>Min</th>
                            <th>Variance</th>
                        </tr>
                    </thead>
                    {table}
                </table>
                <br />
                <br />
                <Link to="/add"> Add data </Link>
            </div>
        );
    }
}

export default Home;