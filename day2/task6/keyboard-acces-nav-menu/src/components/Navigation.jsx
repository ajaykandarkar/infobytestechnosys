import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export const Navigation = () => {

    const menuItems = [
    {
        name: 'Home',
        to: "/"
    },
    {
        name: 'Pricing',
        to: "pricing"
    },
    {
        name: 'Servecies',
        to: "service"
    },
    {
        name: "Features",
        to: "feature"
    },
   
    ]

    const [focusedIndex, setFocusedIndex] = useState(-1);
    const navRefs = useRef([]);

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowDown') {
            setFocusedIndex((prevIndex) =>
                prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1
            );
        } else if (e.key === 'ArrowUp') {
            setFocusedIndex((prevIndex) =>
                prevIndex <= 0 ? menuItems.length - 1 : prevIndex - 1
            );
        } else if (e.key === 'Tab') {
            setFocusedIndex(-1);
        }
    };

    React.useEffect(() => {
        if (focusedIndex >= 0 && navRefs.current[focusedIndex]) {
            navRefs.current[focusedIndex].focus();
        }
    }, [focusedIndex]);

    return (
        <nav
            className="navbar navbar-expand-md shadow-lg sticky-top custom-navbar"
            onKeyDown={handleKeyDown}
        >
            <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img
                        src="https://www.seoclerk.com/pics/677755-210axC1562182518.jpg"
                        alt="Logo"
                        width="50"
                        height="50"
                        className="d-inline-block align-text-top rounded-circle"
                    />
                    <h5 className="ms-2 text-primary fs-3">React with Ajay</h5>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fa-solid fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`nav-item ${focusedIndex === index ? 'focused' : ''
                                    }`}
                                role="menuitem"
                            >
                                <Link
                                    to={item.to}
                                    className={`nav-link ${focusedIndex === index
                                            ? 'text-light bg-primary'
                                            : 'text-dark'
                                        }`}
                                    tabIndex="0"
                                    ref={(el) =>
                                        (navRefs.current[index] = el)
                                    }
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
