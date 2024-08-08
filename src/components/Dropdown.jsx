
import Dropdown from 'react-bootstrap/Dropdown';

const NavDrop = () => {
    return (
        <Dropdown data-bs-theme="dark">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
               Challenges
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Conversions</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Longest Word</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Array Arithmetic</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item eventKey="4">Developer Notes</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default NavDrop;