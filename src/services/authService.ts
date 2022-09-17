import bcrypt from 'bcrypt';
import { SignUpBody, SignInBody } from '../repositories/authRepository';
import * as authRepository from '../repositories/authRepository'
const BCRYPT_SECRET = Number(process.env.BCRYPT_SECRET)
import jwt from 'jsonwebtoken';


async function signUp({ name, email, password }:SignUpBody) {

    const passwordCrypt = bcrypt.hashSync(password, BCRYPT_SECRET)
    
    const dataUser = {
        name,
        password:passwordCrypt,
        email
    }

    await authRepository.createUser(dataUser)

}

async function signIn({ email, password }:SignInBody) {

    
    const findUser = await authRepository.findUser({email, password})

    const passwordVerify = findUser&&bcrypt.compareSync(password, findUser.password)

    if( !findUser || !passwordVerify ) throw {code:401, message:"Password or email Incorret !!"}

    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';

    const token = jwt.sign({userId:findUser.id}, SECRET, {expiresIn:'7d'})

    return {token}
}

export {signUp, signIn}