import mongoose, {Schema} from 'mongoose';

const UserSchema = mongoose.Schema(
    {
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        },
        userName : {
            type : String,
            required : true,
            unique : true
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true
        },
        profileImage : {
            type : String,
            required : false,
            default : "https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
        },
        isAdmin : {
            type : Boolean,
            default : false
        },
        roles : {
            type : [Schema.Types.ObjectId],
            required : true,
            ref : "Role"
        },
    },
    {
        timestamps : true
    }
);

export default mongoose.model("User", UserSchema);