import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    return (
        <div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="container col-lg-10">
                    <h2 className='header'>Contact Page</h2>
                    <h4 className='content'>This is a contact page. You can contact us if you wish and we
                            will provide you with prompt answers.</h4>
                    <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ea corrupti quisquam alias! Commodi obcaecati natus facere amet consequatur neque officiis. Libero hic vero cum atque placeat error neque. Sapiente.</h4>
                    <button className='btn-sm btn-success' onClick={handleClick}>Go Home</button>
                </div>
                <div className="col-lg-1"></div>
            </div>
        </div>
    )
}
