
export class Point{

    constructor(private _x?:number, private _y?:number){
    }

    draw(){
        //...
        console.log("X :" + this._x + ", Y: " + this._y);
    }
    get x(){
        return this._x;
    
    }
    set x(value){
        if (value<0){
            throw new Error('The Value cannot be less than "0".');

        }
        this._x=value;
    }
}
