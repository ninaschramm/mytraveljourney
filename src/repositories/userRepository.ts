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