import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    console.log(props)
return (
    <div>
        <h1>Info</h1>
        <p>The Info is a : {props.info}</p>
    </div>
)
}

const withAdminWarning = (WrappedComponent) => {
    console.log(WrappedComponent)
    return (props) => (
        <div>
            <p>This is private info. Please don't share!</p>
            <WrappedComponent {...props} />
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAunthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please Login</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAunthenticated={true} info="there are the detail"/>, document.getElementById('app'));
