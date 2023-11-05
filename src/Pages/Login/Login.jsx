import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

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
        onSubmit: (value) => {
            alert(JSON.stringify(value, null, 2))
        }
    })

    return (
        <div className='flex flex-col justify-center mt-20'>
            <h1 className='text-[32px] font-bold leading-6 text-center'>Sign in to your account</h1>
            <div className='flex flex-col items-center justify-center mt-4'>
                <form className='flex flex-col justify-evenly w-[400px] h-[250px]' onSubmit={formik.handleSubmit}>
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
                    <Button theme={theme} variant="contained" type="submit">
                        <span className='text-[16px] text-[#fff] py-[3px]'>Sign in</span>
                    </Button>
                </form>
                <h3 className='text-[18px] font-semibold leading-6 my-[54px]'>Don’t have an account?
                    <Link className='text-[18px] text-[#FF8C38] font-bold leading-6'> Create one now</Link>
                </h3>
            </div>
        </div>
    )
}

export default Login