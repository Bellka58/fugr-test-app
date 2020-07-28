import React from 'react';
import { Typography } from '@material-ui/core';

const ErrorBoundary = () => {
    return (
        <Typography color="error" variant="button" display="block" gutterBottom>
            Что-то пошло не так
        </Typography>
    );
};

export default ErrorBoundary;