import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AdminPanel = () => {
    const { user } = useAuth()
    const [allUsers, setAllUsers] = useState([])
    const [displayUsers, setDisplayUser] = useState([]);
    const [updated, setUpdated] = useState(false);

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const size = 10;

    useEffect(() => {
        fetch(`https://salty-mountain-15032.herokuapp.com/allUser?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setAllUsers(data.result)
                setDisplayUser(data.result)
                const count = data.count;
                const pageNumber = Math.ceil(count / 10);
                setPageCount(pageNumber)
            })
    }, [page, updated])

    const handleSearch = (event) => {
        const searchText = event.target.value;
        const matchedProduct = allUsers.filter(person => (person.phone === searchText) || (person.email.toLowerCase().includes(searchText.toLowerCase())) || (person.name.toLowerCase().includes(searchText.toLowerCase()))
        );
        setDisplayUser(matchedProduct);
    }

    const handleAgeRange = e => {

        if (e.target.value === "1") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 18 && parseInt(person.age) <= 25);
            setDisplayUser(matchedProduct);
        }
        else if (e.target.value === "2") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 26 && parseInt(person.age) <= 30);
            setDisplayUser(matchedProduct);
        }
        else if (e.target.value === "3") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 31 && parseInt(person.age) <= 50);
            setDisplayUser(matchedProduct);
        }
        else if (e.target.value === "4") {
            const matchedProduct = allUsers.filter(person => parseInt(person.age) >= 51 && parseInt(person.age) <= 90);
            setDisplayUser(matchedProduct);
        }
        else {
            setDisplayUser(allUsers)
        }
    }



    const [operator, setOperator] = useState({});

    const handleCheck = (id) => {
        fetch(`https://salty-mountain-15032.herokuapp.com/allUser/${id}`)
            .then((res) => res.json())
            .then((data) => setOperator(data));
        setOperator(operator.status = "blocked");

        fetch(`https://salty-mountain-15032.herokuapp.com/allUser/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(operator),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("User blocked successfully!");
                    setUpdated(!updated)
                }
            });
    }

    return (
        <div className="container">
            <div>
                <h1 className="text-center my-4 mx-auto">{user?.displayName}'s Dashboard</h1>
            </div>

            <div className="search-container">
                <input style={{height: '70px'}} type="text"
                    className="form-control w-50 mx-auto"
                    onChange={handleSearch}
                    placeholder="Search user..." />

                <select className="form-select w-25 mx-auto mt-2 mb-5" aria-label="Default select example" onChange={handleAgeRange}>
                    <option value="0" selected>Select Age Range</option>
                    <option value="1">18-25</option>
                    <option value="2">26-30</option>
                    <option value="3">31-50</option>
                    <option value="4">51-90</option>
                </select>
            </div>

            <div className="row">
                    {
                        displayUsers.filter(allUser => allUser.role !== 'admin').map(user =>
                            
                                <div class="col-lg-6">
                                <div class="card my-3 mx-auto" style={{ width: '18rem' }} >
                                    <img src={user?.profilePicture} style={{ height: '18rem' }} className="rounded-start" class="card-img-top" alt="..."/>
                                            <div class="card-body">
                                            <h5 className="card-title fw-bold">
                                                Name: {user?.name} {user?.status &&
                                                    <span className="card-title fs-6">({user?.status})</span>
                                                }

                                            </h5>
                                            <h5 className="card-title">Email: {user?.email}</h5>
                                            <h5 className="card-title">Phone: {user?.phone}</h5>
                                            <h5 className="card-title">Age: {user?.age} years</h5>
                                            <h5 className="card-title">Vehicle: {user?.vehicleType}</h5>
                                            <h5 className="card-title">User: {user?.role}</h5>
                                            <span className="d-flex align-items-center">
                                                <input type="checkbox" className="me-2"
                                                    onChange={() => handleCheck(`${user?._id}`)} />
                                                Block user
                                            </span>
                                            </div>
                                    </div>
                                </div>
                            


                           
                        )
                    }
               
                
            </div>
            <div className="pagination text-center">
                {
                    [...Array(pageCount).keys()]
                        .map(number => <button style={{backgroundColor: 'black'}} key={number} onClick={() => setPage(number)} className={page === number ? "selected" : ""}>{number + 1}
                        </button>)
                }
            </div>
        </div>
    );
};

export default AdminPanel;