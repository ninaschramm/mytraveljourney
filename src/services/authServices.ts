import * as userRepository from '../repositories/userRepository'
import * as bcrypt from 'bcrypt';
import { userData } from '../types/userTypes';

export async function createUser(user: userData) {

    const { email, username, password } = user;
    const ROUNDS = Number(process.env.ROUNDS);
    const crypted = bcrypt.hashSync(password, ROUNDS);

    await userRepository.insert(email, username, crypted)
}