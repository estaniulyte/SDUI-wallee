import React from 'react';
import { SvgSearch } from 'components/icons/Search';
import './search-input.scss';

interface SearchInputProps {
    placeholder?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onChange }) => {
    return (
        <div className='search-container'>
            <input
                className="search-container--input"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <SvgSearch className='search-container--icon' />
        </div>
    );
};

export default SearchInput;
