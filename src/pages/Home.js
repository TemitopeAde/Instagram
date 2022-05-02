import React from "react";
import { useEffect, useState} from "react";
import Product from "./Product";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const navigate = useNavigate();

  const image =
    "https://scontent-iad3-2.xx.fbcdn.net/v/t51.2885-15/278836735_315314444046057_1720596797538092646_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=86c713&_nc_eui2=AeEKo5XIb06gqXF_gLYl11M4_HFFgNO50z78cUWA07nTPnf8mCEBu-MgxS-NMzlXNiDDlaHJAGc29CdokcmHUIBY&_nc_ohc=Lzfl5sFjxe4AX_kHVG3&_nc_ht=scontent-iad3-2.xx&edm=AL-3X8kEAAAA&oh=00_AT86cH8US3yUdVCcI3dwn78jJjWR2DRvyUjvWaVYT3zrSw&oe=62728B4D";
  
    const fetchProduct = async () => {
    await fetch(
      "https://graph.instagram.com/me/media?fields=id,caption,media_url&access_token=IGQVJYODFyX3hoZAWh4MUhYUk9HcXFscmNFSVg4eVRpalB3d3lLT3pIVWt3d25tbXUzbmVYaWpwbjBSVWNYLVlPemd5bGh0azF6Vlg5Uy1oa2tGNkVWb2JGSW8zZAG9vZA3FjeUhFdnJMTERnX2dfeEc2bgZDZD"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoading(false);
          setProduct(result);
          console.log(result);
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

  return (
    <div className="container">
      <div className="grid-box">
        <div className="grid-one">
          <img src={image} alt="logo" />
          <div className="flex-column">
            <h4>bnf.sale</h4>
            <div className="flex-box">
              <div>
                <h6>{ isLoading? 0: product.data.length}  Posts</h6>
              </div>
              <div>
                <h6>1470 Followers</h6>
              </div>
              <div>
                <h6>7 Followers</h6>
              </div>
            </div>
            <h4>BRANDNAMEFEVER SALE</h4>
            <h4>Carefully selected by @brandname.fever @shop.bnf</h4>
            <h4>Authentic only</h4>
            <h4>FREE POSTING UNTIL END OF APRIL</h4>
            <h4>Contact line: 7772285 for consignment/list your items</h4>
          </div>
        </div>
        <div className="grid-two">
          <button id="follow-btn" className="btn btn-primary">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="FollowBtn158509262__InstagramIcon"
            >
              <path
                d="M13.156.008c2.223.004 2.677.021 3.786.072 1.277.058 2.15.26 2.912.557a5.88 5.88 0 012.125 1.384 5.88 5.88 0 011.384 2.125c.296.763.499 1.635.557 2.912.055 1.194.07 1.63.072 4.331v1.23c-.002 2.701-.017 3.137-.072 4.33-.058 1.278-.26 2.15-.557 2.913a5.88 5.88 0 01-1.384 2.125 5.88 5.88 0 01-2.125 1.383c-.763.297-1.635.5-2.912.558-1.194.054-1.63.07-4.331.072h-1.23c-2.701-.002-3.137-.018-4.33-.072-1.278-.058-2.15-.261-2.913-.558a5.88 5.88 0 01-2.125-1.383A5.88 5.88 0 01.63 19.862c-.297-.763-.5-1.635-.558-2.912-.05-1.11-.068-1.564-.071-3.786v-2.32C.004 8.62.02 8.167.072 7.058.13 5.78.333 4.908.63 4.146A5.88 5.88 0 012.013 2.02 5.88 5.88 0 014.138.637C4.901.341 5.773.138 7.05.08 8.16.03 8.614.012 10.836.008zm-.28 2.161h-1.76c-2.408.003-2.829.018-3.967.07-1.17.053-1.805.249-2.228.413-.56.218-.96.478-1.38.897-.419.42-.679.82-.897 1.38-.164.422-.36 1.058-.413 2.227-.052 1.139-.067 1.56-.07 3.968v1.76c.003 2.408.018 2.829.07 3.967.054 1.17.25 1.805.413 2.228.218.56.478.96.898 1.38.42.419.82.679 1.38.897.422.164 1.057.36 2.227.413 1.096.05 1.527.065 3.708.069h2.279c2.18-.004 2.612-.02 3.708-.07 1.17-.053 1.805-.248 2.227-.412.56-.218.96-.478 1.38-.898.42-.42.68-.82.897-1.38.164-.422.36-1.057.413-2.227.05-1.096.066-1.527.07-3.708v-2.279c-.004-2.18-.02-2.611-.07-3.708-.053-1.17-.249-1.805-.413-2.227a3.716 3.716 0 00-.897-1.38c-.42-.42-.82-.68-1.38-.897-.422-.164-1.058-.36-2.227-.413-1.139-.052-1.56-.067-3.968-.07zm-.88 3.675a6.16 6.16 0 110 12.32 6.16 6.16 0 010-12.32zm0 2.161a3.999 3.999 0 100 7.998 3.999 3.999 0 000-7.998zM18.4 4.161a1.44 1.44 0 110 2.879 1.44 1.44 0 010-2.88z"
                fill="current"
                fillRule="evenodd"
              ></path>
            </svg>
            <span style={{ color: "black", marginLeft: "4px" }}>Follow</span>
          </button>
        </div>
      </div>

      <div className="">
        <Product />
      </div>
    </div>
  );
};

export default Home;
