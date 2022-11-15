// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useFormikContext, Field } from 'formik';

import PasswordInput from '_app/shared/input/password';

import type { FieldProps } from 'formik';

export type PasswordFieldsValues = {
    password: string;
    confirmPassword: string;
};

export default function PasswordFields() {
    const { touched, errors } = useFormikContext<PasswordFieldsValues>();
    return (
        <>
            <Field
                name="password"
                render={(props: FieldProps) => (
                    <PasswordInput {...props} placeholder="Password" />
                )}
            />
            {touched['password'] && errors['password'] ? (
                <span className="text-[#d74b4a] m-1">{errors['password']}</span>
            ) : null}
            <span className="mb-1.5 mt-1.5" />
            <Field
                name="confirmPassword"
                component={PasswordInput}
                placeholder="Confirm password"
            />
            {touched['confirmPassword'] && errors['confirmPassword'] ? (
                <span className="text-[#d74b4a] m-1">
                    {errors['confirmPassword']}
                </span>
            ) : null}
        </>
    );
}
