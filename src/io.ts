import { Connection } from './connection';
import { Socket } from './socket';
import { Node } from './node';

export class IO {

    node: Node | null = null;
    multipleConnections: boolean;
    connections: Connection[] = [];
   
    key: string;
    name: string;
    socket: Socket;

    constructor(key: string, name: string, socket: Socket, multiConns: boolean) {
	    this.node = null;
        this.multipleConnections = multiConns;
        this.connections = [];
	   
        this.key = key;
        this.name = name;
        this.socket = socket;
    }
    
    removeConnection(connection: Connection) {
        this.connections.splice(this.connections.indexOf(connection), 1);
    }

    removeConnections() {
        this.connections.map(connection => this.removeConnection(connection));
    }
}