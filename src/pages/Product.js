import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
 
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

  if (isLoading) {
    return "Loading....";
  } else {
    return (
      <div className="product-grid">
        {product.data.map((item) => {
          const { id, media_url, thumbnail_url } = item;
          console.log(media_url)
          return (
            <div
              key={id}
              onClick={() => navigate(`products/${id}`)}
              className="product-container"
            >
              <div className="product">
                <a href="/">
                  <img src={media_url || thumbnail_url} alt="product" />
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
          );
        })}
      </div>
    );
  }
};

export default Product;
