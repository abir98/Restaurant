const Reservation = require("../models/reservation")
const express = require('express')
const router = express.Router()


//create a reservation

router.post("/newreservation", async (req, res) => {
  const newreservation = new Reservation(req.body);
  try {
    const savedreservation = await newreservation.save();
    res.status(200).json("reservation created successfully",savedreservation);
  } catch (err) {
    res.status(500).json(err);
  }
});
//get a reservation

router.get("/:id", async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    res.status(200).json(reservation);
  } catch (err) {
    res.status(500).json(err);
  }
});
// delete a reservation  :
router.delete('/:id' , async(req,res)=>{
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (!reservation ){
res.status(403, 'not found with such id ')
    }
    else {
      await reservation.remove();

  res.status(200).json({
    success: true,
  });
    }
  }
  catch(err) {
    res.status(500).json(err);
  }
})
//update a reservation

router.put(" /:id", async (req, res) => {
  try {
    const reservation = await Reservation.findById(req.params.id);
    if (reservation) {
      await reservation.updateOne({ $set: req.body });
      res.status(200).json("the reservation has been updated");
    } else {
      res.status(403).json("you cant update with such id  ");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
