
export const capitalizeAll =(text) => {
    return text.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
}

export const capitalizeOne = (text) => {
    return text.trim().replace(/^\w/, (c) => c.toUpperCase());
}