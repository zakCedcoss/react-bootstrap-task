import { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardImg,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Bootstrap() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [showMore, setShowMore] = useState(0);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <h1 className="text-center">Responsive Grid</h1>
      <p className="text-center">
        <u>This is to show the grid system using bootstrap</u>
      </p>
      <div
        style={{
          width: "90%",
          marginInline: "auto",
        }}
      >
        <Alert show={isLoading} variant="info">
          <Alert.Heading>Loading Products</Alert.Heading>
        </Alert>
        <ToastContainer position="middle-center">
          <Toast show={isError} bg="danger" className="w-100">
            <Toast.Body className="fs-3">
              An Error Occurred ! Unable to Fetch !
            </Toast.Body>
          </Toast>
        </ToastContainer>
        {products.length > 0 && !isError && (
          <Container className="d-flex flex-wrap gap-3">
            {products.map((item) => (
              <Card style={{ width: "350px" }} key={item.id}>
                <CardImg
                  className="w-50 h-75 align-self-center"
                  variant="top"
                  src={item.image}
                />
                <Card.Body className="my-3">
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>
                    {showMore !== item.id
                      ? item.description.slice(0, 50)
                      : item.description}
                    <span
                      className="text-primary cursor-pointer"
                      onClick={() =>
                        setShowMore((prev) => {
                          if (prev === item.id) return 0;
                          else return item.id;
                        })
                      }
                    >
                      {showMore !== item.id ? "...show more" : "...hide"}
                    </span>
                  </Card.Text>
                  <Link to={`/${item.id}`}>
                    <Button variant="info">View Product</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </Container>
        )}
      </div>
    </>
  );
}

export default Bootstrap;
