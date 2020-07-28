import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addUser } from '../../actions';

const UserForm = ({ addUser }) => {
    const initialFormFields = {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }
    const [formFields, setFormFields] = useState(initialFormFields);
    const [isFieldsFilled, setIsFieldsFilled] = useState(false);

    useEffect(() => {
        setIsFieldsFilled(checkFillFields(formFields))
    }, [formFields]);

    const setFormField = (field, value) => {
        setFormFields((prevState) => ({
            ...prevState,
            [field]: value,
        }))
    };

    const onChangeValue = (e) => {
        setFormField(e.target.name, e.target.value)
    };

    const checkFillFields = (object) => {
        return !!~Object.values(object).findIndex(value => value === null || value === "");
    };

    return (
        <form className="user-form" >
            <div className="user-form__container"> 
                <TextField
                  variant="outlined"
                  required
                  id="id-required"
                  label="id"
                  name="id"
                  type="number"
                  onChange={onChangeValue}
                  value={formFields.id}
                />
                <TextField
                  variant="outlined"
                  name="firstName"
                  required
                  id="firstName-required"
                  label="First name"
                  onChange={onChangeValue}
                  value={formFields.firstName}
                />
                <TextField
                  variant="outlined"
                  required
                  name="lastName"
                  id="lastName-required"
                  label="Last name"
                  onChange={onChangeValue}
                  value={formFields.lastName}
                />
                <TextField
                  variant="outlined"
                  required
                  name="email"
                  id="email-required"
                  label="Email"
                  type="email"
                  onChange={onChangeValue}
                  value={formFields.email}
                />
                <TextField
                  variant="outlined"
                  required
                  name="phone"
                  id="phone-required"
                  label="phone"
                  type="tel"
                  onChange={onChangeValue}
                  value={formFields.phone}
                />
            </div>
            <Button
                variant="outlined"
                color="primary"
                disabled={isFieldsFilled}
                onClick={() => {
                    addUser(formFields);
                    setFormFields(initialFormFields)
                }}>
                Добавить в таблицу
            </Button>
        </form>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (user) => dispatch(addUser(user)),
    }
};

export default connect(null, mapDispatchToProps)(UserForm);