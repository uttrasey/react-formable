/*eslint func-style:0*/

import React, { PropTypes } from 'react';
import { Form, Input, Errors } from 'react-formable';
const { required, equalsField } = require('react-formable').validators;

export default function ClearForm({ onChange }) {
    return <Form onChange={onChange}>
        <Errors className="formErrors" />

        <label>
            User name *
            <Input name="username"
                   type="text"
                   validators={[
                       required('username is required')
                   ]} />
        </label>

        <label>
            Password *
            <Input name="password"
                   type="password"
                   validators={[
                       required('password is required')
                   ]} />
        </label>

        <label>
            Password Retype *
            <Input name="password2"
                   type="password"
                   validators={[
                       equalsField('password', 'passwords must match')
                   ]} />
        </label>

        <input type="submit" value="Submit" />
    </Form>;
}

ClearForm.propTypes = {
    onChange: PropTypes.func
};
