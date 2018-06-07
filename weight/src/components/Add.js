import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Add extends Component{

    state = {redirect_home : false};

    add = (x) => {
        axios.post("http://localhost:3001/add",
        {
            new_date : x.date.value,
            new_max : x.max.value,
            new_min : x.min.value
        })
        .then((ambilData) => {
            if (ambilData.data === "true")
            {
                this.setState({redirect_home : true})
            }
        })
    } 

    render() {

        const {redirect_home} = this.state;

        if (redirect_home) {
            this.setState({redirect_home: false});
            return (
                <Redirect to='/home'/>
            )
        }

        return(
            <div>
                Date :
                <input type = "text" ref = "date" placeholder = "YYYY-MM-DD" /> <br/>

                Max :
                <input type = "text" ref = "max" placeholder = "Max Weight" /> <br/>

                Min :
                <input type = "text" ref = "min" placeholder = "Min Weight" /> <br/>

                <br/><br/>

                <input type = "submit" onClick={() => this.add(this.refs)} value = "SUBMIT" />
            </div>
        )
    }
}

export default Add;