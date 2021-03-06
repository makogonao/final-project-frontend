import React, { Component } from 'react'
import './HeaderComponent.css'
import UserComponent from "./header/UserComponent";
import FindComponent from "./header/FindComponent";
import LogoComponent from "./header/LogoComponent";

export default class HeaderComponent extends Component {

    render() {
        return (
            <div className="headers">
                <LogoComponent/>                
                <FindComponent changeFindString={(value) => this.props.changeFindString(value)}/>
                <UserComponent changeUserStatus={this.props.changeUserStatus} user={this.props.user}/>                
            </div>
        )
    }
}
