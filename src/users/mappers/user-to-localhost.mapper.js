import { User } from '../models/user';


/**
 * 
 * @param {User} user 
 */
export const userModelToLocalhost = ( user ) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isctive,
        lastName,
    } = user;

    return {
        avatar,
        balance,
        first_name: firstName,
        gender,
        id,
        isctive,
        last_name: lastName,
    }

}