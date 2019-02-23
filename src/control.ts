import { Node } from './node';
import { Input } from './input';

export class Control {

    key: string;
    data: any = {};
    parent: Node | Input | null = null;

    constructor(key: string) {
        if (this.constructor === Control)
            throw new TypeError('Can not construct abstract class');
        if (!key)
            throw new Error('The key parameter is missing in super() of Control ');

        this.key = key;
    }

    getNode() {
        if (this.parent === null)
            throw new Error('Control isn\'t added to Node/Input');   
        
        if(this.parent instanceof Node)
            return this.parent;
            
        if(!this.parent.node)
            throw new Error('Control hasn\'t be added to Input or Node');

        return this.parent.node;
    }

    getData(key: string) {
        return this.getNode().data[key];
    }

    putData(key: string, data: any) {
        this.getNode().data[key] = data;
    }  
}