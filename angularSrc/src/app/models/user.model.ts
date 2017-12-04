
export class User {
    _id: string;
    _username: string;
    _firstName: string;
    _lastName: string;
    _email: string;
    _password: string;

    constructor(_username: string, _firstName: string, _lastName: string, _email: string, _password: string, _id?: string) {
        this._username = _username;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._password = _password;
        this._id = _id;
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
            id: this._id,
            username: this._username,
            firstname: this._firstName,
            lastname: this._lastName,
            email: this._email,
            password: this._password
        };
    }
}