import React from 'react';
import { Alert } from 'reactstrap';

const ErrorAlert = ({error}) => {
    return (
        <div>
            <Alert color="danger">
            {error}
        </Alert> 
        </div>
    )
}

export default ErrorAlert;
