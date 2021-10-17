import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useParams } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import data from '../../fakeData/data';
console.log(data);

const Booking = () => {
    const { foodsId } = useParams();
    const detail = data.filter(food => food.id === foodsId);
    console.log(detail);
    const [finalPrice, setFinalPrice] = useState();
    const [products, setProducts] = useState({
        count: 0
    })

    const { name, img, description, price } = detail[0];

    ///////////
    const handlePrice = () => {
        const foodPriceNum = parseFloat(price);
        setFinalPrice(foodPriceNum * products);
    }

    const handleChange = (e) => {

        setProducts({ count: parseInt(e.target.value) })
    }

    const decrease = (e) => {
        if (products.count <= 0) {
            return
        }
        setProducts({ count: products.count - 1 })
    };
    //////////
    return (
        <div className="container mt-5 pt-5">
            <div className="my-5 text-center">
                <HashLink to="/home#foods"><button className="btn btn-outline-secondary mx-2 fs-5 border-0">Breakfast</button></HashLink>
                <HashLink to="/home#foods"><button className="btn btn-outline-secondary mx-2 fs-5 border-0">Lunch</button></HashLink>
                <HashLink to="/home#foods"><button className="btn btn-outline-secondary mx-2 fs-5 border-0">Dinner</button></HashLink>
            </div>

            <div className="row d-flex align-items-center text-start">
                <div className="col-sm-12- col-md-5">
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <div className="d-flex align-items-center">
                        <h2 className="">$ <span className="text-danger">{price}</span></h2>

                        <div className=" w-25 mx-auto bg-light">
                            <div className="d-flex align-items-center px-2 rounded ">
                                <span style={{ cursor: 'pointer' }} onClick={decrease} className=" fw-bold"><i className="fas fa-minus"></i></span>
                                <input type='text' value={products.count} onChange={handleChange} className="text-center border-0 bg-light form-control d-inline" />
                                <span style={{ cursor: 'pointer' }} onClick={() => setProducts({ count: products.count + 1 })} className=" fw-bold "><i className="fas fa-plus fs-5"></i></span>
                            </div>
                        </div>
                    </div>
                    <Link to="/addtocart"><button className="btn btn-danger mt-5 rounded-pill px-3"><i className="fas fa-cart-plus "></i> Add to cart</button></Link>

                </div>
                <div className="col-sm-12 col-md-7">
                    <div className="container">
                        <img className="img-fluid p-5" src={img} alt="" />
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Booking;