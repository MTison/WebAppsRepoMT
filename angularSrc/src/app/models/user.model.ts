
export class User {
    _id: string;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;

    constructor(username: string, firstName: string, lastName: string, email: string, role: string, _id?: string, password?: string) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.role = role;
        this._id = _id;
    }

    setUserName(username: string) {
        this.username = username;
    }
    setFirstName(firstname: string) {
        this.firstName = firstname;
    }
    setLastName(lastname: string) {
        this.lastName = lastname;
    }
    setEmail(email: string) {
        this.email = email;
    }

    toJSON() {
        return {
            id: this._id,
            username: this.username,
            firstname: this.firstName,
            lastname: this.lastName,
            email: this.email,
            password: this.password
        };
    }
}