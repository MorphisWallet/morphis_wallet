import cl from 'classnames';

import LogoIcon from '_font-icons/svgs/logo.svg';

import st from './Logo.module.scss';

type LogoProps = React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
>;

const Logo = ({ className, ...restProps }: LogoProps) => (
    <img
        alt="logo"
        className={cl([st.logo, className])}
        height={55}
        src={LogoIcon}
        width={58}
        {...restProps}
    />
);

export default Logo;
