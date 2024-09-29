import React from 'react';
import './button.scss';

export enum ButtonStyle {
    Primary = 'primary',
    Text = 'text',
}

interface ButtonProps {
    text: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    styleType?: ButtonStyle;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', disabled = false, className, styleType = ButtonStyle.Primary }) => {
    const buttonClassName = `button ${styleType} ${className}`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={buttonClassName}
        >
            {text}
        </button>
    );
};

export default Button;
