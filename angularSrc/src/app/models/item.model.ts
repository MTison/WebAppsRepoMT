
export class Item {
     _id: string;
     productname: string;
     mark: string;
     kind: string;
     inShop: string;

    constructor (productName: string,mark: string,kind: string,inShop: string,_id?: string) {
        this.productname = productName;
        this.mark = mark;
        this.kind = kind;
        this.inShop = inShop;
        this._id = _id;
    }

    toJSON() {
        return {
            id : this._id,
            productname : this.productname,
            mark: this.mark,
            productkind : this.kind,
            shop : this.inShop
        };
    }
}