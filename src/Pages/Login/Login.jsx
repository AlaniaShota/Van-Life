import React, { useState } from 'react'
import { Link, useLoaderData, Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, Popover, TextField, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { loginUser } from '../../utils/api';

export function loader({ request }) {
    return new URL(request.url).searchParams.get('message')
}

export async function action({ request }) {

    const formData = await request.formData()

    const email = formData.get("email")
    const password = formData.get("password")

    try {
        const data = await loginUser({ email, password })
        localStorage.setItem("loggedin", true)
        return redirect("/host")
    } catch (err) {
        return err.message
    }
}

const validationSchema = yup.object({
    email: yup
        .string('Email address')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required')
})

const Login = () => {
    const message = useLoaderData()
    let errorMessage = useActionData()
    const navigation = useNavigation()

    const [anchorEl, setAnchorEl] = useState(null);

    const theme = createTheme({
        palette: {
            primary: { main: '#FF8C38' }
        },
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema,
        //ვტესტავ action 
        // onSubmit: async (values, { setSubmitting, resetForm }) => {
        //     try {
        //         const response = await fetch('/api/login', {
        //             method: 'POST',
        //             headers: {
        //                 'Content-Type': 'application/json',
        //             },
        //             body: JSON.stringify(values),
        //         });

        //         if (response.ok) {
        //             console.log('Success');
        //             navigate('/host', { replace: true })
        //             resetForm();
        //         } else {
        //             console.error('Error');
        //         }
        //     } catch (error) {
        //         console.error(error);
        //     } finally {
        //         setSubmitting(false);
        //     }
        // },
    })

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div className='flex flex-col justify-center items-center mt-20'>
            <div className='flex justify-center items-center border border-black rounded-full ml-[377px] w-[20px] h-[20px] cursor-pointer'>
                <Typography
                    aria-owns={open ? 'mouse-over-popover' : undefined}
                    aria-haspopup="true"
                    onMouseEnter={handlePopoverOpen}
                    onMouseLeave={handlePopoverClose}
                >
                    <span className='text-[16px] font-semibold'>?</span>
                </Typography>
                <Popover
                    id="mouse-over-popover"
                    sx={{
                        pointerEvents: 'none',
                    }}
                    open={open}
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    onClose={handlePopoverClose}
                    disableRestoreFocus
                >
                    <Typography sx={{ p: 1, display: 'flex', justifyContent: 'space-around', width: '230px' }}>
                        <span className='ml-7'>
                            Email:
                        </span>
                        <span>
                            test@test.com
                        </span>
                    </Typography>
                    <Typography sx={{ p: 1, display: 'flex', justifyContent: 'space-around', width: '200px', }}>
                        <span>
                            Password:
                        </span>
                        <span>
                            123456655
                        </span>
                    </Typography>
                </Popover>
            </div>
            <h1 className='text-[32px] font-bold leading-6 text-center'>Sign in to your account</h1>
            {message && <h3 className='text-[21px] text-[#ff0000] font-bold leading-6 text-center mt-5'>{message}</h3>}
            {errorMessage?.email &&
                <h3 className='text-[21px] text-[#ff0000] font-bold leading-6 text-center mt-5'>
                    {errorMessage.email}
                </h3>}
            {errorMessage?.email &&
                <h3 className='text-[21px] text-[#ff0000] font-bold leading-6 text-center mt-5'>
                    {errorMessage.email}
                </h3>}
            <div className='flex flex-col items-center justify-center mt-4'>
                <Form
                    method="post"
                    className='flex flex-col justify-evenly w-[400px] h-[250px]'
                    replace
                // onSubmit={formik.handleSubmit}
                >
                    <TextField
                        id='email'
                        name='email'
                        label='Email address'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email} />
                    <TextField
                        id='password'
                        name='password'
                        type='password'
                        label='Password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password} />
                    <Button theme={theme} disabled={!formik.isValid} variant="contained" type="submit">
                        <span className='text-[16px] text-[#fff] py-[3px]'>
                            {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                        </span>
                    </Button>
                </Form>
                <h3 className='text-[18px] font-semibold leading-6 my-[54px]'>Don’t have an account?
                    <Link className='text-[18px] text-[#FF8C38] font-bold leading-6'> Create one now</Link>
                </h3>
            </div>
        </div>

    )
}

export default Login