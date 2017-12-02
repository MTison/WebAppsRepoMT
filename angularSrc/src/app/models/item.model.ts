
export class Item {
    private _id: string;
    private _productName: string;
    private _mark: string;
    private _productKind: string;
    private _inShops: string[] = [];

    constructor (productName: string,mark: string,productKind: string,inShops: string[]) {
        this._productName = productName;
        this._mark = mark;
        this._productKind = productKind;
        this._inShops = inShops;
    }

    toJSON() {
        return {
            id : this._id,
            productname : this._productName,
            mark: this._mark,
            productkind : this._productKind,
            inshops : this._inShops
        };
    }
}