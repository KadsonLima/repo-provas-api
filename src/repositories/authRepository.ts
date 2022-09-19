import {prisma} from '../config/database'

export interface SignUpBody{
    name:string,
    email:string,
    password:string
    
}
const getByEmail = async (email: string) => {
	return prisma.user.findUnique({ where: { email } })
}


export type SignInBody = Omit<SignUpBody, "name">

async function createUser(body:SignUpBody) {

    return await prisma.user.create({
        data:body
    })
}

async function findUser({email}:SignInBody) {

    return await prisma.user.findFirst({
        where: {email}
    })
}
export {createUser, findUser, getByEmail}