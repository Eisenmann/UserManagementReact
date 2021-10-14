import React, { Component } from 'react';

export class SignUp extends Component {
    static displayName = SignUp.name;

    constructor(props) {
        super(props);
        this.state = { data: props.user };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        
            fetch('api/User/Create', {
                method: 'POST',
                body: data,

            }).then((response) => response.json())
                .then((responseJson) => {
                    this.props.history.push("/home");
                })
        
    }

    render() {
        return (
            <form>
               <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="usersName" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
               <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
               <input type="password" class="form-control" id="usersPassword" placeholder="Password"/>
               </div>
                <div class="form-check">
                   <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={this.onClick} class="btn btn-primary">Sign Up</button>
                 </form>            
            );

    }
}