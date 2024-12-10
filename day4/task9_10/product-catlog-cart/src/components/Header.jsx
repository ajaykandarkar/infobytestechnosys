import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const Header = () => {
    const { cartCount} = useSelector((state) => state.cart);
    const navigate = useNavigate()
    const navigateToCart = ()=>{
        navigate("/cart")
    }
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-light rounded-pill m-4 p-3 sticky-top" style={{backgroundColor:"#36C2CE",boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}} >
            <div className="container-fluid">
                <a className="navbar-brand fs-6 fw-bolder" href="#">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                                className="nav-link active fs-6 fw-bolder"
                                aria-current="page"
                                href="/"
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-6 fw-bolder" href="#">
                                Link
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-6 fw-bolder" href="#">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-6 fw-bolder" href="#">
                                Feature
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-6 fw-bolder" href="#">
                                Service
                            </a>
                        </li>
                    </ul>
                    <div className="d-flex align-items-center">
                        <button
                            type="button"
                            className=" position-relative  text-decoration-none me-3"
                            style={{ background: "none", border: "none" }}
                            onClick={navigateToCart}
                        >
                            <i className="fas fa-shopping-cart fs-4"></i>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                               {cartCount}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
