import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: {
        type: [String],//array of id who liked
        default: [],
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})
var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;