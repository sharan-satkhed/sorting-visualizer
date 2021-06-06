import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import 'bootstrap/dist/css/bootstrap.min.css';

var Header = function (props) {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <Nav.Link onClick={props.reset}>Sorting Visualizer</Nav.Link>
                </Navbar.Brand>

                <Navbar.Collapse  className="container-fluid">

                    <Nav onClick={props.addArray}>
                        <Nav.Link>Add data set</Nav.Link>
                    </Nav>

                    <Nav>
                        <Nav.Link >Sorting speed</Nav.Link>
                        <input type="range" step="0.5" value={1000 - props.sortSpeed} onChange={props.sortSpeedChange} min="0" max="1000" />
                    </Nav>

                    <Nav onClick={() => props.sort('bubbleSort')}>
                        <Nav.Link >Bubble sort</Nav.Link>
                    </Nav>

                    <Nav onClick={() => props.sort('quickSort')}>
                        <Nav.Link>Quick sort</Nav.Link>
                    </Nav>

                    <Nav onClick={() => props.sort('heapSort')}>
                        <Nav.Link >Heap sort</Nav.Link>
                    </Nav>

                    <Nav onClick={() => props.sort('mergeSort')}>
                        <Nav.Link >Merge sort</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </Container>

    );
}

export default Header;