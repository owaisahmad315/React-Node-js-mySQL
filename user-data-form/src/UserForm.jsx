import React, {useState} from "react";
import axios from 'axios';
import './UserForm.css'

const UserForm = () => {

    const [formData, setFormData ] = useState({
        name: '',
        fatherName: '',
        age: '',
        education: '',
        phoneNumber: '',
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
                fatherName: '',
                age: '',
                education: '',
                phoneNumber: '',
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
                <label>
                    Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Father Name:
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Age:
                    <input type="number" name="age" value={formData.age} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Education:
                    <input type="text" name="education" value={formData.education} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Phone Number:
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UserForm;