import { model, models, Schema } from "mongoose"
import bcrypt from 'bcrypt'
import { UserInterface } from "../interfaces/user_interface";

const userSchema = new Schema<UserInterface>({
    image: String,
    password: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    wishList:{
        type: Array,
        default: []
    },
    cart:{
        type: Array,
        default: []
    }
},
{ timestamps: true }
);


// ENCRYPTION 
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    this.password = await bcrypt.hash(this.password!, 10)
    next()
})

userSchema.methods.comparePassword = async function(enteredPassword: string){
    return await bcrypt.compare(enteredPassword, this.password)
}

const User = models.User || model('User', userSchema);

export default User;