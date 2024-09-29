import React from 'react';
import './checkbox-list-item.scss';
import { CheckboxOption } from 'types/dynamicComponents/CheckboxListPanelComponent';
import { highlightText } from 'utils/highlightText';

interface CheckboxListItemProps {
    component: CheckboxOption;
    checked: boolean;
    onChange: (checked: boolean) => void;
    searchTerm?: string;
}

const CheckboxListItem: React.FC<CheckboxListItemProps> = ({ component, checked, onChange, searchTerm = "" }) => {

    const { disabled: isDisabled, title, subtitle, imageUrl, value } = component;

    if (!value || !title) {
        const errorMessage = `Missing required fields in 'checkbox-list-panel' schema for option item: ${!value ? 'value' : ''
            }${!value && !title ? ' and ' : ''}${!title ? 'title' : ''}.`;

        console.error(errorMessage);
        return <></>
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <label className={`checkbox-item-container ${isDisabled ? 'checkbox-item-container--disabled' : ''}`}>
            <div className='checkbox-item-container--main-information'>
                <input
                    type="checkbox"
                    checked={checked}
                    aria-checked={checked}
                    disabled={isDisabled}
                    onChange={handleChange}
                    id={value}
                    aria-label={title}
                />
                <span className="checkmark"></span>
                <div className='checkbox-item-container--main-information--text-container'>
                    <div className='checkbox-item-container--main-information--title'>
                        {highlightText(title, searchTerm, 'textHighlight')}
                    </div>
                    {subtitle && <div className='checkbox-item-container--main-information--subtitle'>{subtitle}</div>}
                </div>
            </div>
            {imageUrl && <img className="checkbox-item-container--image" src={imageUrl} alt={title} />}
        </label>
    );
};

export default CheckboxListItem;
