import { client } from '../database/prisma'

export async function insert(email: string, username: string, password: string) {
    await client.users.create({
        data: {
            email,
            username,
            password
        }
    });
}

export async function checkUser(username: string) {
    const user = await client.users.findUnique({
        where: {
            username
        }
    })
    return user
}