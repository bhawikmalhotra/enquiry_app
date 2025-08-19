import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const TableC = () => {
    const [enquiry, setEnquiry] = useState([]);

    const getdata = async () => {
        let res = await axios.get('http://localhost:8000/api/get')
        console.log(res.data)
        if (res.data.status === "success") {
            setEnquiry(res.data.data);
        }
    };

    const deldata = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This enquiry will be deleted permanently!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Confirm Delete!"
        }).then(async (e) => {
            if (!e.isConfirmed) {
                toast.error("Deletion cancelled.");
                return;
            }
            await axios.delete(`http://localhost:8000/api/del/${id}`)
            toast.success("Enquiry deleted successfully!");
            getdata();
        })
    }

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div>
            <ToastContainer />
            <h2 className="text-2xl font-bold text-center mb-5 text-gray-700">Enquiry List</h2>
            <div className='flex-1 overflow-y-auto max-h-[80vh]  rounded-md'>
                <Table striped>
                    <TableHead className="sticky top-0 z-10 ">
                        <TableRow>
                            <TableHeadCell>Sr. no</TableHeadCell>
                            <TableHeadCell>Reg. no</TableHeadCell>
                            <TableHeadCell>Name</TableHeadCell>
                            <TableHeadCell>Email</TableHeadCell>
                            <TableHeadCell>Phone</TableHeadCell>
                            <TableHeadCell>Message</TableHeadCell>
                            <TableHeadCell>Edit</TableHeadCell>
                            <TableHeadCell>Delete</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {enquiry.length >= 1 ?
                            enquiry.map((item, index) => (
                                <TableRow key={index} >
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{item.reg_no}</TableCell>
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.phone}</TableCell>
                                    <TableCell>{item.message}</TableCell>
                                    <TableCell><button className="bg-blue-600 font-medium text-white py-1 px-2 rounded-md hover:bg-blue-700">Edit</button></TableCell>
                                    <TableCell><button onClick={() => { deldata(item._id) }} className="bg-red-600 font-medium text-white py-1 px-2 rounded-md hover:bg-red-700">Delete</button></TableCell>
                                </TableRow>
                            )) :
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell colSpan={8} className="text-center">No data found</TableCell>
                            </TableRow>
                        }
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default TableC;