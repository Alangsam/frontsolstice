import React from "react";
//import { Link } from "react-router-dom";
import Axios from "axios";

export default class AccountEntry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: [],
        };
    }
    componentDidMount() {
        Axios.get(
            "https://raw.githubusercontent.com/Alangsam/solstice/5e5769c39ca3513a49feaa09e38028492bc53cfa/accounts.json"
        )
            .then((res) => {
                const matchedAccounts = res.data.filter((accObj) => {
                    if (accObj.customer_id === this.props.id) {
                        return accObj;
                    }
                });
                this.setState({ accounts: matchedAccounts });
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className="row">
                <div className="col-8 offset-2">
                    <table>
                        <tbody>
                            {this.state.accounts.map((account) => {
                                return (
                                    <tr
                                        className=""
                                        style={{ border: "1px solid #333" }}
                                    >
                                        <tr>
                                            <td>Address</td>
                                            <td>{account.address}</td>
                                        </tr>
                                        <tr>
                                            <td>City</td>
                                            <td>{account.city}</td>
                                        </tr>
                                        <tr>
                                            <td>State</td>
                                            <td>{account.state}</td>
                                        </tr>
                                        <tr>
                                            <td>Zip Code</td>
                                            <td>{account.zip_code}</td>
                                        </tr>
                                        <tr>
                                            <td>Solar Farm Id</td>
                                            <td>{account.solar_farm_id}</td>
                                        </tr>
                                        <tr>
                                            <td>Capacity Share</td>
                                            <td>{account.capacity_share}</td>
                                        </tr>
                                        <tr>
                                            <td>Created On</td>
                                            <td>{account.created_date}</td>
                                        </tr>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
