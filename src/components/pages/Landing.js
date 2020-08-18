import React from "react";
import axios from "axios";

export default class Landing extends React.Component {
    constructor() {
        super();
        this.state = {
            customers: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                "https://raw.githubusercontent.com/Alangsam/solstice/master/initial.js"
            )
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <table>{}</table>
            </div>
        );
    }
}
