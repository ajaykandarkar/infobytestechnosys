export const AddressStep = ({ onNext, onBack, address, setAddress }) => {
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress({ [name]: value });
    };
    
    return (
        <>
            <div className='container mt-4 w-50'>
                <form className='p-4 card shadow-lg'>
                    <div className=' card-title text-center'><h2>Address</h2></div>
                    <div className="mb-3">
                        <label htmlFor="street" className="form-label">street</label>
                        <input type="text"
                            className="form-control"
                            id="street" name='street'
                            onChange={handleChange}
                            value={address.street} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City </label>
                        <input type="text"
                            className="form-control"
                            id="city" name='city'
                            onChange={handleChange}
                            value={address.city} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="zip" className="form-label">Zip</label>
                        <input type="number"
                            className="form-control"
                            id="zip" name='zip'
                            onChange={handleChange}
                            value={address.zip} />
                    </div>
                    <div className="card-footer text-end">
                        <button className="btn btn-secondary me-2" onClick={onBack} >Back</button>
                        <button className="btn btn-primary" onClick={onNext} >Next</button>
                    </div>
                </form>
            </div>
        </>
    )
}
