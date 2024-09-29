import WarningMessage from 'components/WarningMessage';
import React from 'react';
import { PageTitleComponent } from 'types/dynamicComponents/PageTitleComponent';
import './page-title.scss'

interface PageTitleProps {
    component: PageTitleComponent;
}

const PageTitle: React.FC<PageTitleProps> = ({ component }) => {
    if (!component.label) {
        const errorMessage = 'Missing label for page-title component';

        console.error(errorMessage);

        if (process.env.NODE_ENV === 'development') {
            return <WarningMessage>{errorMessage}</WarningMessage>;
        }
        return <></>
    }
    return <h1 className='page-title'>{component.label}</h1>;
};

export default PageTitle;
