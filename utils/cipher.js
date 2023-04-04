// import from packages
import CryptoJS from "crypto-js";
const cipherKey = 'mnop2356LM'

// for encrypt password
const encryptedText = (text) => {
    const data = CryptoJS.AES.encrypt(
        JSON.stringify(text),
        cipherKey
    ).toString();
    return data
};

// for decrypt password
const decryptedText = (text) => {
    const bytes = CryptoJS.AES.decrypt(text, cipherKey);
    const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return data
};


export { encryptedText, decryptedText }