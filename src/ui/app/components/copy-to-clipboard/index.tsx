// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import Tooltip from '@mui/material/Tooltip';
import cl from 'classnames';
import { memo, useCallback, useEffect, useState } from 'react';

import CopyIcon from '_font-icons/svgs/copy.svg';

import type { ReactNode, MouseEventHandler } from 'react';

import st from './CopyToClipboard.module.scss';

const COPY_CHECKMARK_MILLIS = 600;

export type CopyToClipboardProps = {
    txt: string;
    children: ReactNode;
    className?: string;
    mode?: 'normal' | 'highlighted' | 'plain';
};

function CopyToClipboard({
    txt,
    children,
    className,
    mode = 'normal',
}: CopyToClipboardProps) {
    const [copied, setCopied] = useState(false);
    const copyToClipboard = useCallback<MouseEventHandler<HTMLElement>>(
        async (e) => {
            e.stopPropagation();
            e.preventDefault();
            if (!txt) {
                return;
            }
            await navigator.clipboard.writeText(txt);
            setCopied(true);
        },
        [txt]
    );
    useEffect(() => {
        let timeout: number;
        if (copied) {
            timeout = window.setTimeout(
                () => setCopied(false),
                COPY_CHECKMARK_MILLIS
            );
        }
        return () => {
            if (timeout) {
                clearTimeout(timeout);
            }
        };
    }, [copied]);
    return (
        <span className={cl(st.container, className)}>
            <Tooltip open={copied} placement="right" title="copied">
                <div
                    className="inline-flex items-center	cursor-pointer"
                    onClick={copyToClipboard}
                >
                    <img
                        alt="copy"
                        height={14}
                        width={14}
                        src={CopyIcon}
                        className="mr-2"
                    />
                    {children}
                </div>
            </Tooltip>
        </span>
    );
}

export default memo(CopyToClipboard);
