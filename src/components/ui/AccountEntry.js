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
                // eslint-disable-next-line
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
                            {this.state.accounts.map((account, index) => {
                                return (
                                    <>
                                        <tr
                                            style={{
                                                borderTop: "1px solid #333",
                                            }}
                                        >
                                            <td rowSpan="7" className="px-4">
                                                {index + 1}
                                            </td>
                                            <td
                                                style={{
                                                    borderTop: "1px solid #333",
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                Address
                                            </td>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                {account.address}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                City
                                            </td>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                {" "}
                                                {account.city}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                State
                                            </td>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                {account.state}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                Zip Code
                                            </td>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                {account.zip_code}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                Solar Farm Id
                                            </td>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                {account.solar_farm_id}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                Capacity Share
                                            </td>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                {account.capacity_share}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                Created On
                                            </td>
                                            <td
                                                style={{
                                                    borderLeft:
                                                        "1px solid #333",
                                                }}
                                            >
                                                {account.created_date}
                                            </td>
                                        </tr>
                                    </>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
