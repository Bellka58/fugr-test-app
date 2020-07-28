import React from 'react';
import { Paper, TextareaAutosize } from '@material-ui/core';

const UserInfo = ({user = {}}) => {
    const {firstName, lastName, description = "", address} = user;
    const {streetAddress, city, state, zip} = address || {};
    return (
        <Paper><p>
            Выбран пользователь <b>{firstName} {lastName}</b><br />
            {!!description && <>
                Описание:<br />
                <TextareaAutosize
                    disabled
                    value={description}
                /><br />
            </>}
            {!!streetAddress && <>Адрес проживания: <b>{streetAddress}</b><br /></>}
            {!!city && <>Город: <b>{city}</b><br /></>}
            {!!state && <>Провинция/штат: <b>{state}</b><br /></>}
            {!!zip && <>Индекс: <b>{zip}</b></>}
            </p>
        </Paper>
    );
};

export default UserInfo;
