// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import Tooltip from '@mui/material/Tooltip';
import cl from 'classnames';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '_app/shared/button';
import { useLockedGuard } from '_app/wallet/hooks';
import CopyToClipboard from '_components/copy-to-clipboard';
import Loading from '_components/loading';
import { useAppDispatch } from '_hooks';
import { loadEntropyFromKeyring } from '_redux/slices/account';
import { entropyToMnemonic, toEntropy } from '_shared/utils/bip39';
import InitializeStepperBar from '_src/ui/app/components/initialize-stepper-bar';

import commonSt from '../InitializePage.module.scss';
import st from './Backup.module.scss';

export type BackupPageProps = {
    mode?: 'created' | 'imported';
};

const BackupPage = ({ mode = 'created' }: BackupPageProps) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const guardsLoading = useLockedGuard(false);

    const [loading, setLoading] = useState(true);
    const [mnemonic, setLocalMnemonic] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            if (guardsLoading || mode !== 'created') {
                return;
            }
            setLoading(true);
            try {
                setLocalMnemonic(
                    entropyToMnemonic(
                        toEntropy(
                            await dispatch(loadEntropyFromKeyring({})).unwrap()
                        )
                    )
                );
            } catch (e) {
                setError(
                    (e as Error).message ||
                        'Something is wrong, Recovery Phrase is empty.'
                );
            } finally {
                setLoading(false);
            }
        })();
    }, [dispatch, mode, guardsLoading]);

    return (
        <Loading loading={guardsLoading}>
            <div className={commonSt['center-container']}>
                <InitializeStepperBar
                    currentIndex={1}
                    className="mb-16"
                    onBack={() => navigate('./create')}
                />
                <p className={commonSt.h2}>Write down your recovery phrase</p>
                <p className={cl([commonSt.desc, 'mb-[30px]'])}>
                    Make sure to store it&nbsp;
                    <span className="font-bold">in a safe place</span>
                </p>
                {mode === 'created' ? (
                    <>
                        <Loading loading={loading}>
                            {mnemonic ? (
                                <div className={st.mnemonic}>
                                    {mnemonic.split(' ').map((ph, i) => (
                                        <div
                                            className={st['ph-wrapper']}
                                            key={ph}
                                        >
                                            <span className={st['ph-index']}>
                                                {`${i + 1}`.padStart(2, '0')}
                                            </span>
                                            <Tooltip
                                                PopperProps={{
                                                    modifiers: [
                                                        {
                                                            name: 'offset',
                                                            options: {
                                                                offset: [
                                                                    0, -14,
                                                                ],
                                                            },
                                                        },
                                                    ],
                                                }}
                                                title={ph}
                                            >
                                                <span className={st.ph}>
                                                    {ph}
                                                </span>
                                            </Tooltip>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <span>{error}</span>
                            )}
                        </Loading>
                    </>
                ) : null}
                <CopyToClipboard txt={mnemonic || ''} mode="plain">
                    COPY
                </CopyToClipboard>
                <div className={st.fill} />
                <Button
                    type="button"
                    size="large"
                    mode="primary"
                    onClick={() => navigate('/')}
                >
                    I saved my recovery phrase
                </Button>
            </div>
        </Loading>
    );
};

export default BackupPage;
