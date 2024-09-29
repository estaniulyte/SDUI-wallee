import { logToConsole } from "./logToConsole";

export const actionHandlers: Record<string, (data: any) => void> = {
    logToConsole,
};

export const handleAction = (actionType: string, data: any) => {
    const action = actionHandlers[actionType];
    if (action) {
        action(data);
    } else {
        console.warn(`No action handler found for action type: ${actionType}`);
    }
};