export const isPassword = (password: string): boolean => {
    const passwordLength = password.length;
    return passwordLength >= 6 && passwordLength <= 25; // eslint-disable-line
};