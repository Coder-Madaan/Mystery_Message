import {Message} from "@/model/User";

export interface ApiResponse {
    success: boolean;
    message: string;
    isAcceptingMessage?:boolean;
    Message?:Array<Message>;
}
