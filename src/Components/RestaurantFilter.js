import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function RestaurantFilter({handlePriceFilter, priceValue, handleCuisineFilter, cuisineName, handleRatingFilter, ratingValue}){

   return(
        <Container>
            <Row>
            <Col>
                <DropdownButton 
                    title={cuisineName} 
                    onClick={(e)=> handleCuisineFilter(e.target)}
                    >
                    <Dropdown.Item name="All">All</Dropdown.Item>
                    <Dropdown.Item name="4">American</Dropdown.Item>
                    <Dropdown.Item name="3">Indian</Dropdown.Item>
                    <Dropdown.Item name="1">Italian</Dropdown.Item>
                    <Dropdown.Item name="2">Mexican</Dropdown.Item>
                    <Dropdown.Item name="5">Thai</Dropdown.Item>
                </DropdownButton>
            
            {/* <select name="type" id="cuisine" aria-label="cuisine"
                onChange={(e)=> handleCuisineFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="4">American</option>
                <option value="3">Indian</option>
                <option value="1">Italian</option>
                <option value="2">Mexican</option>
                <option value="5">Thai</option>
            </select> */}
            </Col>
            <Col>
            <DropdownButton title={priceValue} onClick={(e)=> handlePriceFilter(e.target)}>
                    <Dropdown.Item name="All">All</Dropdown.Item>
                    <Dropdown.Item name="1">$</Dropdown.Item>
                    <Dropdown.Item name="2">$$</Dropdown.Item>
                    <Dropdown.Item name="3">$$$</Dropdown.Item>
                    <Dropdown.Item name="4">$$$$</Dropdown.Item>
                    <Dropdown.Item name="5">$$$$$</Dropdown.Item>
                </DropdownButton>
                {/* <h4>Filter By Price</h4>
            <select id="price"  aria-label="price"
                onChange={(e)=> handlePriceFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
                <option value="5">$$$$$</option>
            </select> */}
            </Col>
            <Col>
            <DropdownButton title={ratingValue} onClick={(e)=> handleRatingFilter(e.target)}>
                    <Dropdown.Item name="All">All</Dropdown.Item>
                    <Dropdown.Item name="1">★</Dropdown.Item>
                    <Dropdown.Item name="2">★★</Dropdown.Item>
                    <Dropdown.Item name="3">★★★</Dropdown.Item>
                    <Dropdown.Item name="4">★★★★</Dropdown.Item>
                    <Dropdown.Item name="5">★★★★★</Dropdown.Item>
                </DropdownButton>
                {/* <h4>Filter By Rating</h4>
            <select id="rating" aria-label="rating"
                onChange={(e)=>handleRatingFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="1">★</option>
                <option value="2">★★</option>
                <option value="3">★★★</option>
                <option value="4">★★★★</option>
                <option value="5">★★★★★</option>
            </select> */}
            </Col>
            </Row>
        </Container>
   )
}

export default RestaurantFilter