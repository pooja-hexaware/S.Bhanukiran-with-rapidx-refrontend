import { Breadcrumb, SimpleCard } from 'components'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addSampleentity } from './store/sampleentity.action'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AddSampleentity = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [idno, setIdno] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')

    const handleName = (e) => setName(e.target.value)
    const handleIdno = (e) => setIdno(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleMobile = (e) => setMobile(e.target.value)
    const handleAddress = (e) => setAddress(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            addSampleentity({
                name,
                idno,
                email,
                mobile,
                address,
            })
        )
        navigate('/sampleentity')
    }

    useEffect(() => {
        return () => {
            setName('')
            setIdno('')
            setEmail('')
            setMobile('')
            setAddress('')
        }
    }, [])

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'AddSampleentity', path: '/sampleentity' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Add Form">
                <ValidatorForm onSubmit={handleClick} onError={() => null}>
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                type="text"
                                name="name"
                                id="nameInput"
                                onChange={handleName}
                                value={name}
                                validators={['required']}
                                label="Name"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="idno"
                                id="idnoInput"
                                onChange={handleIdno}
                                value={idno}
                                validators={['required']}
                                label="Idno"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="email"
                                id="emailInput"
                                onChange={handleEmail}
                                value={email}
                                validators={['required']}
                                label="Email"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="mobile"
                                id="mobileInput"
                                onChange={handleMobile}
                                value={mobile}
                                validators={['required']}
                                label="Mobile"
                                errorMessages={['this field is required']}
                            />

                            <TextField
                                type="text"
                                name="address"
                                id="addressInput"
                                onChange={handleAddress}
                                value={address}
                                validators={['required']}
                                label="Address"
                                errorMessages={['this field is required']}
                            />
                        </Grid>
                    </Grid>
                    <Button type="submit" color="primary" variant="contained">
                        <Icon>add</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Add
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default AddSampleentity
