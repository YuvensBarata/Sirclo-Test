import React, { Component } from "react";
import { Link} from "react-router-dom";
import axios from 'axios';

class View extends Component {

    constructor() {
        super()
        this.state = { data: [] }
    }

    componentWillMount() {
        axios.get(`http://localhost:3001/view/${this.props.id}`)
            .then((homeData) => {
                this.setState({ data: homeData.data });
            })
    }

    render() {

        const table = this.state.data.map((x, index) => {
            return (
                <tbody key = {index}>
                        <tr>
                            <td> Date </td>
                            <td> {x.date}</td>
                        </tr>
                        <tr>
                            <td> Max </td>
                            <td> {x.max}</td>
                        </tr>
                        <tr>
                            <td> Min </td>
                            <td> {x.min}</td>
                        </tr>
                        <tr>
                            <td> Variance </td>
                            <td> {x.max - x.min}</td>
                        </tr>
                    </tbody>
            )
        })
        return (
            <div>
                <table>
                    <thead />
                    {table}
                </table>
                <br />
                <Link to="/home">Back to Home </Link>
            </div>
        )
    }

}

export default View;