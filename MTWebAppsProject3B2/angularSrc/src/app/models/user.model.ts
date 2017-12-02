

export class User {
    private _id : string;
    private _username : string;
    private _firstName: string;
    private _lastName: string;
    private _email: string;

    constructor(_username: string,_firstName: string,_lastName: string,_email: string) {
        this._username = _username;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
    }

    setUserName(username: string) {
        this._username = username;
    }
    setFirstName(firstname: string) {
        this._firstName = firstname;
    }
    setLastName(lastname: string) {
        this._lastName = lastname;
    }
    setEmail(email: string) {
        this._email = email;
    }
    
    toJSON() {
        return {
            id : this._id,
            username : this._username,
            firstname: this._firstName,
            lastname : this._lastName,
            email : this._email
        };
    }
}