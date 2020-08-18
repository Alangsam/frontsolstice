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
                "https://raw.githubusercontent.com/Alangsam/solstice/master/initial.json"
            )
            .then((res) => {
                console.log(res.data);
                this.setState({ customers: res.data });
            })
            .catch((err) => console.log(err));
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.state.customers.map((customer) => {
                            return (
                                <tr key={"row: " + customer.id}>
                                    <td
                                        key={customer.id}
                                        style={{ border: "1px solid #333" }}
                                    >
                                        {customer.last_name +
                                            ", " +
                                            customer.first_name}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
