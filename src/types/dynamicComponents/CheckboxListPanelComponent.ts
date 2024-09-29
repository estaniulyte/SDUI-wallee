import { BaseComponent } from "../BaseComponent";

export interface CheckboxListPanelComponent extends BaseComponent {
    type: 'checkbox-list-panel';
    onSubmit: string;
    options: CheckboxOption[];
}

export interface CheckboxOption {
    value: string;
    title: string;
    subtitle?: string;
    imageUrl?: string;
    checked?: boolean;
    disabled?: boolean;
}