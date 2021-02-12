import React from 'react'
import Title from 'components/Title/Title';

interface ILogo {
    className?: string
}
export const Logo:React.FC<ILogo> = ({className}) => {
    return <Title className={className}>join.tsh.io</Title>

};

export default Logo
