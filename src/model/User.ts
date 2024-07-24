import mongoose,{Schema,Document} from "mongoose";

export interface Message extends Document{
    content:string;
    createdAt:Date;
}

const messageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        Default:Date.now
    }
});


export interface User extends Document{
    username:string;
    email:string;
    password:string;
    messages:Message[];
    verifyCode:string;
    isVerified:boolean;
    verifyCodeExpiry:Date;
    isAcceptingMessage:boolean;
}

const userSchema:Schema<User> = new Schema({
    username:{
        type:String,
        required:[true,'Username is required'],
        unique:true,
        trim:true,
    },
    email:{
    type:String,
    required:[true,'Email is required'],
    unique:true,
    match:[/.+\@.+\..+/,'Please enter a valid email address'],
    },
    password:{
        type:String,
        required:[true,'Password is required'],
    },
    verifyCode:{
        type:String,
        required:[true,'Verify code is required'],

    },

    verifyCodeExpiry:{
        type:Date,
        required:[true,'Verify code expiry is required'],
    },
    isVerified:{
        type:Boolean,
        default:false,
    },
    isAcceptingMessage:{
        type:Boolean,
        default:true,
    
    },
    messages:[messageSchema]
});

const userModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>('User',userSchema);
export default userModel;
