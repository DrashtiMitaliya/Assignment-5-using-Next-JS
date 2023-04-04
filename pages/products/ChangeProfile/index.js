// import from packages
import React, { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';
import { Button, Flex, useColorModeValue, Stack, Box, } from '@chakra-ui/react';
import {
    Formik,
    Form,
    Field,
    ErrorMessage,
} from 'formik';
// import from files
import { updateProfileValidations } from '../../../constants/Validation';
import { ProfileUpdate, ChangeProfile } from '../../../utils/ChangeProfile';
import { useRouter } from 'next/router';

const UpdateProfilePage = () => {
  
    const router = useRouter()
    const [data] = useState(ChangeProfile())

    /* Setting the initial values of the form. */
    const initialValues = {
        firstName: data[0].firstName,
        lastName: data[0].lastName,
        email: data[0].email,
        phoneNumber: data[0].phoneNumber,

    }
    // It takes the values from the form and checks if the email is already exists in the local storage
    //      or not. If it exists then it shows an error message and if it doesn't exist then it updates the
    //      profile with the new values

    const onSubmit = (values) => {
        if( ProfileUpdate(values)){
            router.push('/products')
        }
    }
    useEffect(() => {
        if ((JSON.parse(localStorage.getItem('isLogin')) === false) || (JSON.parse(localStorage.getItem('isLogin')) === null)) {
            router.push('/')
        }
    }, [])

    return (
        // code of update profile page
        
           <Formik
                initialValues={initialValues}
                validationSchema={updateProfileValidations}
                onSubmit={onSubmit}
            >
                <Form >
                    <Flex
                        minH={'100vh'}
                        align={'center'}
                        justify={'center'}
                        bg={useColorModeValue('gray.50', 'gray.800')}>
                        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                            <Stack align={'center'}>
                                <Heading fontSize={'4xl'}>Profile Page</Heading>

                            </Stack>
                            <Box
                                className='text-start'
                                rounded={'lg'}
                                bg={useColorModeValue('white', 'gray.700')}
                                boxShadow={'lg'}
                                p={8} >
                                <Stack spacing={4}>
                                    <div className="mb-3">
                                        <label htmlFor="fname" className="form-label" ><span className="text-danger fs-5">*</span> First Name</label>
                                        <Field type="text" className="form-control" aria-describedby="emailHelp" name='firstName' id='' />

                                        <p className='text-danger'><ErrorMessage name='firstName'></ErrorMessage></p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="lname" className="form-label"><span className="text-danger fs-5">*</span>Last Name </label>
                                        <Field type="text" className="form-control" aria-describedby="emailHelp" name='lastName' />
                                        <p className='text-danger'><ErrorMessage name='lastName' ></ErrorMessage></p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label"> <span className="text-danger fs-5">*</span>Email </label>
                                        <Field type="email" className="form-control" aria-describedby="emailHelp" name='email' />
                                        <p className='text-danger'> <ErrorMessage name='email'></ErrorMessage></p>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label"><span className="text-danger fs-5">*</span>Phone Number </label>
                                        <Field type="tel" className="form-control" aria-describedby="emailHelp" name='phoneNumber' />
                                        <p className='text-danger text-start'><ErrorMessage name='phoneNumber'></ErrorMessage></p>
                                    </div>


                                </Stack>
                                <Stack spacing={10} pt={2}>
                                    <Button
                                        type='submit'
                                        loadingText="Submitting"
                                        size="md"
                                        bg={'blue.400'}
                                        color={'white'}
                                        _hover={{
                                            bg: 'blue.500',
                                        }}>
                                        Update Profile Page
                                    </Button>
                                </Stack>
                            </Box>
                        </Stack>
                    </Flex>
                </Form>
            </Formik>
        

    )
}

export default UpdateProfilePage 