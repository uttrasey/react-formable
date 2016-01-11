/*eslint func-style:0*/
import React, { PropTypes } from 'react';
import { Form, Input, Errors } from 'react-formable';
const { required } = require('react-formable').validators;

function validateForm(form) {
    if (form.fieldValues.password !== form.fieldValues.password2) {
        return 'passwords must match';
    }
}

export default function FormValidator({ onChange }) {
    return <Form onChange={onChange} validators={[validateForm]}>
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
                       required('password2 is required')
                   ]} />
        </label>

        <input type="submit" value="Submit" />
    </Form>;
}

FormValidator.propTypes = {
    onChange: PropTypes.func
};

export const source = require('fs').readFileSync(__filename, 'utf8');
