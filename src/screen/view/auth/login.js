import React from "react";

function Login(props) {


    return(
        <div className="container">
            <div></div>
            <div className="card mt-5">
                <div className="card-header text-center">
                    <h3>Login</h3>
                </div>
                <div className="card-body">
                    <form action="" method="" onSubmit={props.onSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required="required"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" required="required"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    </form>
                </div>
                <div className="card-footer text-center">
                    {!props.pass ? (
                        <p className="alert">Invalid UserName or Password</p>
                    ) : (
                    ""
                    )}
                    <div className="loading">
                    {!props.loading ? (
                    ""
                    ) : (
                        <p className="alert">Loading ....</p>
                    )}
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Login;