
export const toUpperCase = palabra => {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
};
export const toLowerCase = palabra => {
    return palabra.toUpperCase();
};
