import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../../actions/index";
import Button from "../Button/Button";

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
                <li className="users__item" key={user.id}>
                    <div className="users__fullname">
                        <Link
                            className="users__fullname-link"
                            to={`/user/${user.id}`}
                        >
                            <h2>{this.splitName(user.name)}</h2>
                        </Link>
                    </div>
                    <div className="users__info">
                        <div className="users__address">
                            <p>{user.address.city}</p>
                        </div>
                        <div className="users__email">
                            <p>{user.email}</p>
                        </div>
                        <div className="users__phone">
                            <p>{user.phone}</p>
                        </div>
                        <div className="users__actions">
                            <Button
                                classes={["button", "button-fullfilled"]}
                                text={"Предложить сходить на концерт"}
                            />
                        </div>
                    </div>
                </li>
            );
        });
    }

    render() {
        return (
            <div className="container">
                <div className="users">
                    <div className="users__header">
                        <h1 className="users__header-title">Users</h1>
                    </div>
                    <ul className="users__list">{this.renderList()}</ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { users: state.users };
};

export default connect(mapStateToProps, { fetchUsers })(UserList);
