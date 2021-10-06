import { Channel } from "amqplib";
import { Subjects } from "./subjects";
interface Event {
    subject: Subjects;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract subject: T["subject"];
    abstract queueGroupName: string;
    abstract onMessage(msg: any): void;
    protected client: Channel;
    protected ackWait: number;
    constructor(client: Channel);
    listen(): void;
    parseMessage(msg: any): any;
}
export {};
