import React, { useState, useEffect } from 'react';
import { handleAction } from 'utils/actionHandlers';
import { CheckboxListPanelComponent, CheckboxOption } from 'types/dynamicComponents/CheckboxListPanelComponent';
import SearchInput from 'components/SearchInput';
import CheckboxListItem from 'components/CheckboxListItem';
import WarningMessage from 'components/WarningMessage';
import Button from 'components/Button';
import { ButtonStyle } from 'components/Button/Button';
import './checkbox-list-panel.scss';

interface CheckboxListPanelProps {
    component: CheckboxListPanelComponent;
}

const CheckboxListPanel: React.FC<CheckboxListPanelProps> = ({ component }) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [filteredOptions, setFilteredOptions] = useState(component.options);
    const [selectedOptions, setSelectedOptions] = useState<CheckboxOption[]>(
        component.options.filter(option => option.checked)
    );

    useEffect(() => {
        const filtered = component.options.filter(option =>
            option?.title?.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOptions(filtered);
    }, [searchTerm, component.options]);

    if (!component.options || component.options.length === 0) {
        const errorMessage = `Missing options for 'checkbox-list-panel' component`;

        console.error(errorMessage);

        if (process.env.NODE_ENV === 'development') {
            return <WarningMessage>{errorMessage}</WarningMessage>;
        }
        return <></>
    }

    const handleCheckboxChange = (option: CheckboxOption) => {
        let updatedSelectedOptions;

        if (selectedOptions.includes(option)) {
            updatedSelectedOptions = selectedOptions.filter(selected => selected.value !== option.value);
        } else {
            updatedSelectedOptions = [...selectedOptions, option];
        }

        setSelectedOptions(updatedSelectedOptions);
    };

    const handleReset = () => {
        setSelectedOptions([]);
    };

    const handleSubmit = () => {

        if (component.onSubmit) {
            handleAction(component.onSubmit, selectedOptions);
        } else {
            console.error("Missing onSubmit action for checkbox-list-panel type component")
        }

        setSelectedOptions([]);
        setSearchTerm('');
    };

    return (
        <div className='container'>
            <SearchInput
                placeholder='Search for Payment Method'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className='container--scrollable-container'>
                {filteredOptions.length > 0 ? (
                    filteredOptions.map((option, index) => (
                        <CheckboxListItem
                            key={option.value}
                            component={option}
                            checked={selectedOptions.includes(option)}
                            onChange={() => handleCheckboxChange(option)}
                            searchTerm={searchTerm}
                        />
                    ))
                ) : (
                    <WarningMessage>No matches found. Try to modify your search.</WarningMessage>
                )}
            </div>
            <div className='container--action-buttons'>
                <Button text='Reset' onClick={handleReset} styleType={ButtonStyle.Text} />
                <Button text='Submit' disabled={!selectedOptions.length} onClick={handleSubmit} />
            </div>
        </div>
    );
};

export default CheckboxListPanel;
