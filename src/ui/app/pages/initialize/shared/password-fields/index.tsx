// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useFormikContext, Field } from 'formik';

import PasswordInput from '_app/shared/input/password';

export type PasswordFieldsValues = {
    password: string;
    confirmPassword: string;
};

export default function PasswordFields() {
    const { touched, errors } = useFormikContext<PasswordFieldsValues>();
    return (
        <>
            <Field name="password" component={PasswordInput} />
            {touched['password'] && errors['password'] ? (
                <span className="text-[#d74b4a] m-1">{errors['password']}</span>
            ) : null}
            <span className="mb-1.5 mt-1.5" />
            <Field name="confirmPassword" component={PasswordInput} />
            {touched['confirmPassword'] && errors['confirmPassword'] ? (
                <span className="text-[#d74b4a] m-1">
                    {errors['confirmPassword']}
                </span>
            ) : null}
        </>
    );
}
