const mongoose = require("mongoose");

const { Schema } = mongoose;
const reservationSchema = new Schema({


  user: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "Client",
  },
checkin: {
    type: Boolean,
    default: false,
  },
 name : {
type : String ,
required : true
  } ,
email : {
    type : String ,
    required : true
      } ,
 PhoneNumber : {
        type : Number ,
        required : true
          } ,
restaurant : {
  type : Number ,
  required : true
} ,

date : {
  type : String ,
  required : true

} ,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
