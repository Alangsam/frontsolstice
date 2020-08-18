import React from "react";
import CustomerEntry from "../ui/CustomerEntry";
import { connect } from "react-redux";
import AccountEntry from "../ui/AccountEntry";

class CustomerProfile extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <CustomerEntry
                    id={this.props.customer.id}
                    name={
                        this.props.customer.first_name +
                        " " +
                        this.props.customer.last_name
                    }
                    email={this.props.customer.email}
                    active={this.props.customer.active}
                    accountManagerId={this.props.customer.account_manager_id}
                    reasonForJoining={this.props.customer.reason_for_joining}
                    createdDate={this.props.customer.created_date}
                />
                <AccountEntry id={this.props.customer.id} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        customer: state.customer,
    };
}

export default connect(mapStateToProps)(CustomerProfile);
