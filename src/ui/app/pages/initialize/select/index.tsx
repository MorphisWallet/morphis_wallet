// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0
import cl from 'classnames';
import { Link } from 'react-router-dom';

import Logo from '_src/ui/app/components/logo';
import Button from '_src/ui/app/shared/button';

import st from './Select.module.scss';

const SelectPage = () => {
    return (
        <div className={st.container}>
            <Logo className={st.logo} />
            <p className={st['logo-text']}>Morphis</p>
            <p className={st.desc}>
                A friendly crypto wallet for your web3 journey
            </p>
            <Link to="../create" className="w-full">
                <Button mode="primary" className={cl(['w-full', 'mb-2'])}>
                    Create a new wallet
                </Button>
            </Link>
            <Link to="../import" className="w-full">
                <Button mode="secondary" className="w-full">
                    I already have a wallet
                </Button>
            </Link>
        </div>
    );
};

export default SelectPage;
