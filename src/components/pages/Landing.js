import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import store from "../../store/store";

class Landing extends React.Component {
    constructor(props) {
        super(props);
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

    storeCustomerObject(customer) {
        store.dispatch({
            type: actions.STORE_CUSTOMER,
            payload: customer,
        });
        this.props.history.push("/profile");
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
                                        onClick={() =>
                                            this.storeCustomerObject(customer)
                                        }
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

function mapStateToProps(state) {
    return {
        customer: state.customer,
    };
}

export default connect(mapStateToProps)(Landing);
