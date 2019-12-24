export declare class MessageListService {
    messages: {
        userId: number;
        name: string;
        img: string;
        msg: string;
    }[];
    getAll(): {
        userId: number;
        name: string;
        img: string;
        msg: string;
    }[];
}
