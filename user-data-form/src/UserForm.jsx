import React, {useState} from "react";
import axios from 'axios';
import './UserForm.css'

const UserForm = () => {

    const [formData, setFormData ] = useState({
        name: '',
        father_name: '',
        age: '',
        education: '',
        phone_number: '',
        email: ''
    })


    const handleChange = (e) => {
        const {name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/users', formData)
        .then(Response => {
            alert('User Data Added to Database Successfully!');
            setFormData({
                name: '',
                father_name: '',
                age: '',
                education: '',
                phone_number: '',
                email: '' 
            });
        })
        .catch(error => {
            console.log('There was an ', error)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name='name' value={formData.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Father Name:</label>
                <input type="text" name='fatherName' value={formData.father_name} onChange={handleChange} required />
            </div>
            <div>
                <label>Age:</label>
                <input type="number" name='age' value={formData.age} onChange={handleChange} required />
            </div>
            <div>
                <label>Education:</label>
                <input type="text" name='education' value={formData.education} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone Number:</label>
                <input type="number" name='phoneNumber' value={formData.phone_number} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name='email' value={formData.email} onChange={handleChange} required />
            </div>
            <button type="submit" >Submit</button>
        </form>
    )
}


export default UserForm;