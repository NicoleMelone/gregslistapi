import mongoose from "mongoose";
const Schema = mongoose.Schema;

const House = new Schema(
    {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        levels: { type: Number, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        imgUrl: { type: String, required: true, default: '//placehold.it/300x300' }
    },
    { timestamps: true, toJSON: { virtuals: true } }
);

export default House;


// this.id = id
//         this.bedrooms = bedrooms
//         this.bathrooms = bathrooms
//         this.levels = levels
//         this.price = price
//         this.description = description
//         this.imgUrl = imgUrl