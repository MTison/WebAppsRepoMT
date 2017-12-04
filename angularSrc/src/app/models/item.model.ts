
export class Item {
     _id: string;
     _productName: string;
     _mark: string;
     _productKind: string;
     _inShops: string[] = [];

    constructor (productName: string,mark: string,productKind: string,inShops: string[],id?: string) {
        this._productName = productName;
        this._mark = mark;
        this._productKind = productKind;
        this._inShops = inShops;
        this._id = id;
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