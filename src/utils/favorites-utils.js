export const getValue = (data) => {
    const value = data.split('/');
    return value[3];
}