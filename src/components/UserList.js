import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../actions/index";

import "./UserList.css";

class UserList extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    splitName(fullName) {
        const [name, surname] = fullName.split(" ");
        return `${name} ${surname}`;
    }

    renderList() {
        return this.props.users.map((user) => {
            return (
                <li className="user" key={user.id}>
                    <div className="user__fullname">
                        <Link to={`/user/${user.id}`}>
                            <h3>{this.splitName(user.name)}</h3>
                        </Link>
                    </div>
                    <div className="user__address">
                        <p>{user.address.city}</p>
                    </div>
                    <div className="user__email">
                        <p>{user.email}</p>
                    </div>
                    <div className="user__phone">
                        <p>{user.phone}</p>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <h1>Users</h1>
                <ul>{this.renderList()}</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
