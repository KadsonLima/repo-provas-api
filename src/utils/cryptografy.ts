import Cryptr from 'cryptr';

const cryptr = new Cryptr('myTotallySecretKey')


function encryptPassword(password:string) {
    
    return cryptr.encrypt(password);
}

function decryptPassword(password:string) {
    
    return cryptr.decrypt(password);
}

export {encryptPassword, decryptPassword}