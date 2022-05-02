import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchField, setSearchField] = useState("");

  const navigate = useNavigate();

  const fetchProduct = async () => {
    await fetch(
      "https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJYODFyX3hoZAWh4MUhYUk9HcXFscmNFSVg4eVRpalB3d3lLT3pIVWt3d25tbXUzbmVYaWpwbjBSVWNYLVlPemd5bGh0azF6Vlg5Uy1oa2tGNkVWb2JGSW8zZAG9vZA3FjeUhFdnJMTERnX2dfeEc2bgZDZD"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setProduct(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoading(false);
        }
      );
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };


  if (isLoading) {
    return "Loading....";
  } else {
    return (
      <div>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchField}
            onChange={handleChange}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
        <div className="product-grid">
          {
            product.data.filter(post => {
              if (searchField === '') {
                return post
              } else if (post.caption.toLowerCase().includes(searchField.toLowerCase())) {
                return post
              }
              return null
            }).map((post,index) => (
              
              <div
                  key={index}
                  onClick={() => navigate(`products/${post.id}`)}
                  className="product-container"
                >
                  <div className="product">
                    <a href="/">
                      <img src={post.media_url || post.thumbnail_url} alt="product" />
                    </a>
                  </div>

                  <div className="overlay">
                    <div className="overlay-container">
                      <div className="overlay-img">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g fill="none" fillRule="evenodd">
                            <path d="M1 0h22a1 1 0 011 1v22a1 1 0 01-1 1H1a1 1 0 01-1-1V1a1 1 0 011-1z"></path>
                            <path
                              d="M15.333 8.667v10h-10v-10h10zm3.334-3.334v10H17V7H8.667V5.333h10z"
                              fill="#FFF"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
              </div>
            ))
          
          }
        </div>
      </div>
    );
  }
};

export default Product;
