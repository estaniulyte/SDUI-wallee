import { Component } from '../types/BaseComponent';
import PageTitle from '../components/PageTitle';
import CheckboxListPanel from '../components/CheckboxListPanel';
import WarningMessage from 'components/WarningMessage';

export const renderComponent = (component: Component) => {
    switch (component.type) {
        case 'page-title':
            return <PageTitle component={component} />;

        case 'checkbox-list-panel':
            return <CheckboxListPanel component={component} />;

        default:
            if (process.env.NODE_ENV === 'development') {
                return <WarningMessage>Unknown component type</WarningMessage>;
            }
            return null;
    }
};
