import React, { Component } from "react";
import { connect } from "react-redux";
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
                <li key={user.id}>
                    <div>
                        <h2>{this.splitName(user.name)}</h2>
                    </div>
                    <div>
                        <div>
                            <p>{user.address.city}</p>
                        </div>
                        <div>
                            <p>{user.email}</p>
                        </div>
                        <div>
                            <p>{user.phone}</p>
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return <ul>{this.renderList()}</ul>;
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
