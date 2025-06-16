import { addReasonForNotUsingDb } from "../../models/reason.model.js";
import { DateForCreated } from "../../utils/dateForCreated.js";

export const addReason = async (req, res) => {
  const { reason } = req.body;

  if (!reason) {
    return res.status(400).send("You must add the reason ");
  }

  const dateForCreated = DateForCreated();

  let fullData;

  try {
    fullData = await addReasonForNotUsingDb({ dateForCreated, reason });
  } catch (error) {
    return res.status(500).send("Server error!");
  }

  res.status(201).send(fullData);
};

// PrlqidLE9Emp9tPZ
