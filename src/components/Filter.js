import React from 'react'
import Rate from './Rate'
import {useState} from"react"
import {Form,Button,FormControl} from 'react-bootstrap'

function Filter({setSearch}) {
  



    return (
        <div>
            <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(ele)=>setSearch(ele.target.value)}
        />
        <Button variant="outline-success">Search</Button>
        <Rate/>
      </Form>
            
        </div>
    )
}

export default Filter
