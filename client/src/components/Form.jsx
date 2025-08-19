import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
import { ToastContainer, toast } from 'react-toastify';

const Formcom = () => {

    const [formData, setformData] = useState({
        name: '',
        reg_no: '',
        email: '',
        phone: '',
        message: ''
    })

    let saveEnquiry = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/insert', formData)
        .then((res) => {
            setformData({
                name: '',
                reg_no: '',
                email: '',
                phone: '',
                message: ''
            })
        })
        toast.success("Enquiry submitted successfully!",);
    }; 

    let getvalue = (e) => {
        let inputName = e.target.name;
        let inputValue = e.target.value;
        let oldData = { ...formData };
        oldData[inputName] = inputValue;
        setformData(oldData);
    }
    
    return (
        <div>
            <ToastContainer />                   
            <h2 className="text-2xl font-bold text-center">Enquiry Form</h2>
            <form action="" onSubmit={saveEnquiry}>
                <div className="p-2">
                    <Label htmlFor="name">Name</Label>
                    <TextInput type="text" value={formData.name} onChange={getvalue} name="name" placeholder="Enter name" required />
                </div>
                <div className="p-2">
                    <Label htmlFor="number">Registation No.</Label>
                    <TextInput type="text" value={formData.reg_no} onChange={getvalue} name="reg_no" placeholder="Enter registation no." required />
                </div>
                <div className="p-2">
                    <Label htmlFor="email">Email</Label>
                    <TextInput type="email" value={formData.email} onChange={getvalue} name="email" placeholder="Enter email" required />
                </div>
                <div className="p-2">
                    <Label htmlFor="phone">Phone</Label>
                    <TextInput type="text" value={formData.phone} onChange={getvalue} name="phone" placeholder="Enter phone" required />
                </div>
                <div className="p-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea  name="message" value={formData.message} onChange={getvalue} placeholder="Message...." required rows={5} />
                </div>
                <div className="p-2 ">
                    <Button type="submit" >Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Formcom;