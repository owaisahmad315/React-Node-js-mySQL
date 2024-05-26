import React, {useState} from "react";
import axios from 'axios';

const UserForm = () => {


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name='name' value={FormData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Father Name:</label>
                <input type="text" name='fatherName' value={FormData.fatherName} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name='age' value={FormData.age} onChange={handleChange} required />
            </div>
            <div>
                <label>Education:</label>
                <input type="text" name='education' value={FormData.education} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="number" name='phoneNumber' value={FormData.phoneNumber} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name='email' value={FormData.email} onChange={handleChange} required />
            </div>
            <button type="submit" >Submit</button>
        </form>
    )
}