import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function MenuFilter({onGoBack, handleCategoryFilter}){
    return(
        <Row>
            <Col>
                <DropdownButton title="Filter By Category" onClick={(e)=> handleCategoryFilter(e.target.name)}>
                    <Dropdown.Item name="All">All</Dropdown.Item>
                    <Dropdown.Item name="1">Appetizers</Dropdown.Item>
                    <Dropdown.Item name="2">Main Course</Dropdown.Item>
                    <Dropdown.Item name="3">Sides</Dropdown.Item>
                    <Dropdown.Item name="4">Dessert</Dropdown.Item>
                    <Dropdown.Item name="5">Drinks</Dropdown.Item>
                </DropdownButton>
            </Col>
            {/* <h2>Filter By Category</h2>
            <select name="category" id="category">
                <option value="all">All</option>
                <option value="1">Appetizers</option>
                <option value="2">Main Course</option>
                <option value="3">Sides</option>
                <option value="4">Dessert</option>
                <option value="5">Drinks</option>
            </select> */}
            <Col>
                <Button type="button"className="btn" onClick={onGoBack}>Back To Restaurants</Button>
            </Col>
        </Row>
    )
}

export default MenuFilter