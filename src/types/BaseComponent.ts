import { CheckboxListPanelComponent } from "./dynamicComponents/CheckboxListPanelComponent";
import { PageTitleComponent } from "./dynamicComponents/PageTitleComponent";

export interface BaseComponent {
    type: string;
}

export type Component = PageTitleComponent | CheckboxListPanelComponent;