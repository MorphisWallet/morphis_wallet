import cl from 'classnames';

import Arrow from '_font-icons/svgs/arrow_short.svg';

import st from './initialize-stepper-bar.module.scss';

type InitializeStepperBarProps = {
    currentIndex: number;
    className?: string;
    onBack: () => void;
};

const InitializeStepperBar = ({
    currentIndex,
    className,
    onBack,
}: InitializeStepperBarProps) => (
    <div className={cl([st.container, className])}>
        <img
            alt="back"
            src={Arrow}
            height={14}
            width={14}
            className={st.back}
            onClick={onBack}
        />
        <div className={cl([st.dot, currentIndex === 0 && st.active])} />
        <div className={cl([st.dot, currentIndex === 1 && st.active])} />
        <div className={cl([st.dot, currentIndex === 2 && st.active])} />
    </div>
);

export default InitializeStepperBar;
