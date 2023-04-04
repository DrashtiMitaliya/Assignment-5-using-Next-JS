// import from packages
import { GrLinkPrevious } from 'react-icons/gr';
import Carousel from 'react-bootstrap/Carousel';
import { RotatingLines } from 'react-loader-spinner';
import { Card, CardBody, Stack, Heading, Text, Divider, Button, ButtonGroup, CardFooter } from '@chakra-ui/react';
import Link from "next/link"




const ProductDetails = ({ data }) => {

    // const [data, setData] = useState([])

    return (

        <div>
            {data.images ?
                /* The code that displays the products all details. */
                <div className='container '>
                    <div >
                        <Link href='/products'><Button variant='bold' colorScheme='light' >
                            <GrLinkPrevious />
                        </Button></Link>
                    </div>
                    <div className="row mt-5 m-auto bg-light">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 m-auto">
                            <Carousel>
                                {data.images.map((id) => {
                                    return (
                                        <Carousel.Item  >
                                            <img

                                                className="d-block w-100 "
                                                src={id}
                                                alt="First slide"
                                            />

                                        </Carousel.Item>
                                    )
                                })
                                }

                            </Carousel>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12  m-auto   ">
                            <Card maxW='sm' padding={15} className='m-auto'>
                                <CardBody>
                                    <Stack className='m-auto' >
                                        <Heading size='md' color='blue.700'>{data.title}</Heading>
                                        <Text >
                                            {data.description}
                                        </Text>

                                    </Stack>
                                </CardBody>

                                <CardBody className='bg-light text-dark '>
                                    <Stack className='text-start' fontSize={15} fontFamily="Arial" >

                                        <Text fontSize={15}>
                                            Stock : {data.stock} <br />
                                            Discount : {data.discountPercentage} % <br />
                                            Rating :{data.rating} <br />
                                            Brand : {data.brand} <br />
                                            Category : {data.category} <br />


                                        </Text>
                                    </Stack>
                                </CardBody>


                                <CardFooter className='m-auto'>

                                    <ButtonGroup spacing='5'>
                                        <Text color='blue.500' fontSize='2xl'>
                                            {data.price}$
                                        </Text>
                                        <Button variant='solid' colorScheme='blue'>
                                            Buy now
                                        </Button>

                                    </ButtonGroup>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                </div>
                :

                /* A spinner(loading) that is displayed when the data is being fetched from the API. */
                <div className=' d-flex justify-content-center'><RotatingLines
                    strokeColor="grey"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="96"
                    visible={true}

                /> </div>
            }
        </div>


    )
}
export async function getServerSideProps(context) {
    const { query } = context
    const productId = query.productId
    const response = await fetch(`https://dummyjson.com/products/${productId}`)
    const data = await response.json()

    return {
        props: {
            data
        }
    }
}
export default ProductDetails





