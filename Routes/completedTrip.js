import express from "express";
import {
  getCompletedTrips,
  getFaultCountByTripId,
  getTripDataById,
} from "../Controller/CompletedTripController.js";

const CompletedTripRoute = express.Router();

CompletedTripRoute.get("/getTripById/:id", getTripDataById);
CompletedTripRoute.get("/getFaultsByTripId/:id", getFaultCountByTripId);
CompletedTripRoute.get("/getCompletedTrips/", getCompletedTrips);

export default CompletedTripRoute;
