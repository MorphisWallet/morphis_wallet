// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';

import { createMnemonicValidation } from './validation';
import Button from '_app/shared/button';
import ExternalLink from '_components/external-link';
import Loading from '_components/loading';
import { useAppDispatch } from '_hooks';
import PasswordFields from '_pages/initialize/shared/password-fields';
import { createVault } from '_redux/slices/account';
import { ToS_LINK } from '_shared/constants';

import st from './Create.module.scss';

const CreatePage = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div className={st.container}>
            <p className={st.h2}>Create a password</p>
            <p className={st.desc}>We will use this to unlock your wallet</p>
            <Formik
                initialValues={{
                    terms: false,
                    password: '',
                    confirmPassword: '',
                }}
                validationSchema={createMnemonicValidation}
                validateOnMount={true}
                onSubmit={async (values) => {
                    try {
                        await dispatch(
                            createVault({ password: values.password })
                        ).unwrap();
                        navigate('../backup');
                    } catch (e) {
                        // Do nothing
                    }
                }}
            >
                {({ isValid, isSubmitting, errors, touched }) => (
                    <Form className={st.matchParent}>
                        <div className={st.matchParent}>
                            <fieldset
                                disabled={isSubmitting}
                                className={st.fieldset}
                            >
                                <PasswordFields />
                                <div className={st.space} />
                                <label className={st.terms}>
                                    <Field name="terms" type="checkbox" />
                                    <span className={st.checkBox}></span>
                                    <span className={st.checkboxLabel}>
                                        I agree to the{' '}
                                        <ExternalLink
                                            href={ToS_LINK}
                                            showIcon={false}
                                        >
                                            Terms of Service
                                        </ExternalLink>{' '}
                                    </span>
                                </label>
                            </fieldset>
                        </div>
                        <Button
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            mode="primary"
                            size="large"
                        >
                            <Loading loading={isSubmitting}>Unlock</Loading>
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default CreatePage;
