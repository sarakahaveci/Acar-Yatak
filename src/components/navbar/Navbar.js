import { useContext, useEffect, useState } from "react";
import { Nav, Button, Form, Navbar, NavDropdown } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, useHistory } from "react-router-dom";

import { SearchContext } from "../../searchContext";
import Downshift from "downshift";

//import Search from "../navbar/Search";
function NavBarComponent({ productsData }) {
  const history = useHistory();
  const { setSearchData } = useContext(SearchContext);
  const [tempInput, setTempInput] = useState("");

  let data;
  let unique;
  let fixedObject;
  let items;

  const onChange = (selectedItems) => {
    setSearchData(selectedItems.name);
  };

  useEffect(() => {
    if (productsData.data != null) {
      data = productsData.data.map((item) => item.name);
      unique = [...new Set(data)];
      fixedObject = unique.map((item) => ({ name: item }));
      items = fixedObject;
    }
  });

  const handleSearch = () => {
    history.push("/search");
  };

  return (
    <div style={{ position: "relative", zIndex: 99999999 }}>
      <Navbar className="p-3 mb-2 bg-light text-white" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            className="logo"
            src="https://i.imgur.com/DxLjgyB.jpg"
            width="140px"
            height="auto"
            alt="Acar Yatak logo"
          />
        </Navbar.Brand>
        <Navbar.Brand href="/">ACAR YATAK</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home Page</Nav.Link>
            <Nav.Link href="Salesoutlet"> Our Agents</Nav.Link>

            <NavDropdown title="Product" id="basic-nav-dropdown">
              <Dropdown.Item as={Link} to="OnePersonsBed">
                One Person Beds
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="TwoPersonsBed">
                Two Person Beds
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="OnePersonBase">
                One Person bed base
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="TwoPersonBase">
                Two Person bed base
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="Bunks">
                Bed Bunk
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="linens">
                Linens
              </Dropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="Products">Product</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="aboutus">About Us</Nav.Link>
            <Nav.Link href="contactus">Contact Us</Nav.Link>
          </Nav>
          <div id="google_translate_element"></div>
          <Form onSubmit={(e) => e.preventDefault()} inline>
            {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
            {productsData.data && (
              <div style={{ maxHeight: "40px" }}>
                <Downshift
                  onChange={onChange}
                  itemToString={(items) => (items ? items.name : "")}
                >
                  {({
                    getInputProps,
                    getItemProps,
                    isOpen,
                    inputValue,
                    highlightedIndex,
                    selectedItem,
                    highlightedItem,
                    getLabelProps,
                  }) => (
                    <div>
                      <input
                        style={{
                          height: "38px",
                          marginRight: "10px",
                          border: "1px solid grey",
                          paddingLeft: "10px",
                          borderRadius: "5px",
                        }}
                        {...getInputProps({ placeholder: "Search items" })}
                      />
                      {isOpen ? (
                        <div className="downshift-dropdown">
                          {items
                            .filter(
                              (item) =>
                                !inputValue ||
                                item.name
                                  .toLowerCase()
                                  .includes(inputValue.toLowerCase())
                            )
                            .map((item, index) => (
                              <div
                                className="dropdown-item"
                                {...getItemProps({
                                  key: item.name,
                                  index,
                                  item,
                                })}
                                style={{
                                  backgroundColor:
                                    highlightedIndex === index
                                      ? "lightgray"
                                      : "white",
                                  fontWeight:
                                    selectedItem === item ? "bold" : "normal",
                                }}
                              >
                                {item.name}
                              </div>
                            ))}
                        </div>
                      ) : null}
                    </div>
                  )}
                </Downshift>
              </div>
            )}
            <Button onClick={handleSearch} variant="outline-danger">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarComponent;
