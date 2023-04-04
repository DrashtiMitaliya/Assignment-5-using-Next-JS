// import from packages
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import { RotatingLines } from 'react-loader-spinner';
import { useRouter } from 'next/router';
import { PageNav } from '../../component/PageNav';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { RiLogoutBoxRFill } from 'react-icons/ri';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Button } from '@chakra-ui/react';
import { logout } from '../../utils/LogOut'


// import from files
import { fetchProducts } from '../../Redux/Reducers/ProductSlice';




const ProductCard = () => {
    const router = useRouter();

    const [login, setLogin] = useState(false)
    const productsData = useSelector((state) => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
        setLogin(JSON.parse(localStorage.getItem('isLogin')))
    }, [dispatch, login])

    useEffect(() => {
        if ((JSON.parse(localStorage.getItem('isLogin')) === false) || (JSON.parse(localStorage.getItem('isLogin')) === null)) {
            router.push('/')
        }
    }, [])


    return (
        <>
            {login && (
                <div className='container-fluid'>
                    <div className='row mt-3'>
                        <div className='col-4 d-flex'>
                            <BsFillCartCheckFill size={40} />
                            <h3>ZigCart</h3>
                        </div>
                        <div className='d-flex justify-content-end col-8'>

                            <Link href='/products/ChangeProfile' className='px-3 mx-3 btn btn-dark d-flex'>Update Profile</Link>
                            <Link href='/products/ChangePassword' className=' px-3 mx-3 btn btn-dark d-flex'  > <RiLockPasswordFill /> Change Password</Link>
                            <Link href='/' className=' px-3   btn btn-dark d-flex' onClick={logout}>
                                <RiLogoutBoxRFill /> Logout</Link>
                        </div>

                    </div>
                    <div className="row  ">
                        {
                            productsData.products ? productsData.products.map((data, index) => {
                                if (data === undefined) {
                                    return (
                                        <div key={index} className=' d-flex justify-content-center '><RotatingLines

                                            strokeColor="grey"
                                            strokeWidth="5"
                                            animationDuration="0.75"
                                            width="96"
                                            visible={true}

                                        /> </div>
                                    )
                                }
                                return (

                                    <div className='p-2 col-xl-3 col-lg-4 col-md-6 col-sm-6'  >
                                        <div style={{ height: '650px' }} className='my-3  bg-light card'  >
                                            <div className='p-0 card-header'>
                                                <img src={data.thumbnail} style={{ height: '250px', margin: 'auto' }} alt="" />

                                            </div>
                                            <div className='p-0 card-header' >

                                                <div className='text-center p-3 fw-bold'>  {data.title}</div>

                                            </div>
                                            <div className='card-body p-1 text-center' >
                                                <div className=' card-title fw-bold'  > Price : {data.price} $</div>
                                                <hr />
                                                <div className='card-title'> Brand  : {data.brand}</div>
                                                <hr />
                                                <div className='card-title '> Desription : {data.description}</div>
                                                <hr />
                                                <div className='d-flex justify-content-center'>
                                                    <div className='card-title  '> Rate : {data.rating} </div>
                                                    <div className='mt-1 px-2  '><AiFillStar /></div>
                                                </div>

                                            </div>

                                            <Button className=" text-center    "><Link href={`/products/${data.id}`}>  <Button> Show More </Button> </Link></Button>
                                        </div>
                                    </div>

                                )
                            }) :
                                /* A loading spinner. */
                                <div className=' d-flex justify-content-center'><RotatingLines
                                    strokeColor="grey"
                                    strokeWidth="5"
                                    animationDuration="0.75"
                                    width="96"
                                    visible={true}

                                /> </div>
                        }

                    </div>
                    <PageNav />

                </div>
            )}
        </>
        /* A React component that renders a card for each product in the products array. */

    )
}



export default ProductCard