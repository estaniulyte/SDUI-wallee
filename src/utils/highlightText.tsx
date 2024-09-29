export const highlightText = (text: string, search: string, stylingClassName: string = "textHighlight") => {
    if (!search) return text;
    const regex = new RegExp(`(${search})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, index) =>
        regex.test(part) ? <span key={index} className={stylingClassName}>{part}</span> : part
    );
};
