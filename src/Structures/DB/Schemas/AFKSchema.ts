import {model, Schema} from 'mongoose';

module.exports = model(
    "AFKSystem",
    new Schema({
        GuildID: String,
        UserID: String,
        Status: String,
        Time: String
    })
)