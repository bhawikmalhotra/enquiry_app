import express from 'express';
import { check } from '../../middleware/check.js';
import { s_insert, s_get, s_del, delall, s_update } from '../../controller/web/enquirycontroller.js';

let enquiryroute = express.Router();

enquiryroute.post('/insert', s_insert)
enquiryroute.get('/get', s_get)
enquiryroute.delete('/del/:id', s_del);
enquiryroute.get('/delall', check, delall);

export default enquiryroute;