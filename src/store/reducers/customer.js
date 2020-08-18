import actions from "../actions";

export default function customer(customer = {}, action) {
    switch (action.type) {
        case actions.STORE_CUSTOMER:
            return action.payload;
        default:
            return customer;
    }
}
