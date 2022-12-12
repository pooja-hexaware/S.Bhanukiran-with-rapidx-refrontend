import { Breadcrumb, SimpleCard } from 'components'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { editSampleentity } from './store/sampleentity.action'
import { Button, Icon, Grid, MenuItem } from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'components/Typography'
import React, { useState } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

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

const EditSampleentity = () => {
    const { id: sampleentityId } = useParams()

    const sampleentity = useSelector((state) =>
        state.sampleentity.entities.find(
            (sampleentity) =>
                sampleentity._id.toString() === sampleentityId.toString()
        )
    )

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [name, setName] = useState(sampleentity.name)
    const [idno, setIdno] = useState(sampleentity.idno)
    const [email, setEmail] = useState(sampleentity.email)
    const [mobile, setMobile] = useState(sampleentity.mobile)
    const [address, setAddress] = useState(sampleentity.address)

    const handleName = (e) => setName(e.target.value)
    const handleIdno = (e) => setIdno(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handleMobile = (e) => setMobile(e.target.value)
    const handleAddress = (e) => setAddress(e.target.value)

    const handleClick = (e) => {
        e.preventDefault()
        dispatch(
            editSampleentity({
                id: sampleentityId,
                name,
                idno,
                email,
                mobile,
                address,
            })
        )
        navigate('/sampleentity')
    }

    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'EditSampleentity', path: '/sampleentity' },
                        { name: 'Form' },
                    ]}
                />
            </div>
            <SimpleCard title="Edit Form">
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
                        <Icon>send</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Save
                        </Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </Container>
    )
}

export default EditSampleentity
