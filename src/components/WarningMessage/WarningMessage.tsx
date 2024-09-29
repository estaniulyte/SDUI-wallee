import React, { ReactNode } from 'react';
import './warning-message.scss';

interface WarningMessageProps {
    children: ReactNode;
}

const WarningMessage: React.FC<WarningMessageProps> = ({ children }) => {

    return (
        <div className='warning-message'>{children}</div>
    );
};

export default WarningMessage;
