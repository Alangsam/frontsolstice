import React from "react";
import { Link } from "react-router-dom";

export default function CustomerEntry(props) {
    return (
        <div className="row">
            <div className="col-12 mb-5 mt-2">
                <Link to="/" className="btn btn-dark">
                    Back
                </Link>
            </div>
            <div className="col-8 offset-2">
                <h1>{props.name}</h1>
                <h4>
                    <b>Id:</b> {props.id}
                </h4>
                <h4>
                    <b>Email:</b> {props.email}
                </h4>
                <h4>
                    <b>Active:</b> {String(Boolean(props.active))}
                </h4>
                <h4>
                    <b>Account Manager Id:</b> {props.accountManagerId}
                </h4>
                <h4>
                    <b>Reason For Joining:</b> {props.reasonForJoining}
                </h4>
                <h4>
                    <b>Date Joined:</b> {props.createdDate}
                </h4>
            </div>
        </div>
    );
}
