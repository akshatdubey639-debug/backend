 import mongoose from "mongoose";
 import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";//we will use it to add  middleware.
 const Schema=mongoose.Schema;
 const videoSchema=new Schema(
    {
        videofile:{
            type: String,//cloudnary url
            required:true
        },
        thumbnail:{
            type: String,//cloudnary url
            required:true
        },
         tittle:{
            type: String,
            required:true
        },
         Discription:{
            type: String,
            required:true
        }, 
         duration:{
            type: Number,
            required:true
        },
         Views:{
            type: Number,
            default:0
        },
        IsPublished:{
            type: Boolean,
            default:true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"user"
        }

    },{timestaps:true}

)

 videoschema.plugin(mongooseAggregatePaginate``)
 export const video=model.Schema("video",videoSchema)