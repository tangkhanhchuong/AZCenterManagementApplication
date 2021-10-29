import React from 'react'
import {
  Button,
  Grid,
  TextField,
} from '@material-ui/core'

import { Breadcrumb, SimpleCard } from 'app/components'
import StudentTable from './StudentTable'

const Student = () => {
  return (
    <div className='m-sm-30'>
      <div className='mb-sm-30'>
        <Breadcrumb
          routeSegments={[
            { name: 'Profiles', path: '/profiles/students' },
            { name: 'Students' },
          ]}
        />
      </div>
      <SimpleCard title='Advanced Search'>
        <Grid container spacing={6}>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={6}>
            <TextField className='mb-1 w-full' id='outlined-basic' label='Outlined' size='small' variant='outlined' />
          </Grid>
        </Grid>
        <Grid container spacing={6}>
          <Grid item lg={9} md={9} sm={6} xs={18}></Grid>
          <Grid justifyContent="flex-end" container item lg={3} md={3} sm={6} xs={6}>
            <Button variant='contained' color='primary' onClick={() => { }}>Search</Button>
          </Grid>
        </Grid>
      </SimpleCard>
      <div className='py-3' />
      <StudentTable />
    </div>
  )
}

export default Student
