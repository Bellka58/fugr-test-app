import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

const DataSelectButtons = ({
    isSmallData,
    setIsSmallData,
    loading,
    setFormIsOpen,
    formIsOpen,
}) => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <Button
              disabled={isSmallData || loading}
              onClick={() => setIsSmallData(true)}
              variant={isSmallData ? "contained" : "outlined"}>
                Маленький набор данных
            </Button>
            <Button
              disabled={!isSmallData || loading}
              onClick={() => setIsSmallData(false)}
              variant={!isSmallData ? "contained" : "outlined"}>
                Большой набор данных
            </Button>
            <Button
                disabled={loading}
                variant="outlined"
                color={formIsOpen ? "secondary" : "primary"}
                style={{marginLeft: 'auto', marginRight: 0}}
                onClick={() => setFormIsOpen((prevFormIsOpen) => !prevFormIsOpen)}>
                {formIsOpen ? 'Скрыть' : 'Добавить'}
            </Button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
    }
};

export default connect(mapStateToProps)(DataSelectButtons);