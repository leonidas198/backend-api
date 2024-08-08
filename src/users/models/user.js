

export class User {

    /**
     * 
     * @param {Like<User>} userDataLike 
     */
    constructor( { id, isctive, balance, avatar, firstName,lastName, gender } ) {
        this.id        = id;
        this.isctive   = isctive;
        this.balance   = balance;
        this.avatar    = avatar;
        this.firstName = firstName;
        this.lastName  = lastName;
        this.gender    = gender;   
    }

}