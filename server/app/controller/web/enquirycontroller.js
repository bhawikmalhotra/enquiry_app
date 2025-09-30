import express from 'express';
import mydb from '../../models/db.js';

let s_insert = async (req, res) => {
    let dataobj = req.body;
    let inserdata = await mydb.insertOne(dataobj);
    res.json({
        status: "success",
        message: "Data inserted successfully",
        data: dataobj,
    });
}

let s_get = async (req, res) => {
  let data = await mydb.find();
  res.json({
        status: "success",
        message: "Data fetched successfully",
        data,
    });
};

let delall = async (req, res) => {
  await mydb.deleteMany({});
  res.json({ status: "1", message: "All data deleted successfully" });
};

let s_del = async (req, res) => {
  let id = req.params.id;
  await mydb.deleteOne({ _id: id });
  res.json({ status: "success", message: `${id} deleted successfully` });
};

let s_update = async (req, res) => {
  let id = req.params.id;
  let { name } = req.body;
  await mydb.updateOne({ _id: id }, { $set: { name } });
  res.json({
    status: "success",
    message: `${id} updated successfully`,
    data: req.body,
  });
};

export { s_insert, s_get, s_del, delall, s_update };

// {
//     "reg_no": 123456,
//     "name": "test", 
//     "email": "abc@gmail.com",
//     "phone": 1234567890,
//     "message": "This is a test message"
// }