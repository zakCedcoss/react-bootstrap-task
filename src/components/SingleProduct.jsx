import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Alert,
  Card,
  CardImg,
  Container,
  Toast,
  ToastContainer,
} from "react-bootstrap";

function SingleProduct() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((err) => {
        setIsError(true);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <h1 className="text-center">Single Element</h1>
      <p className="text-center">
        <u>This is to show the single element using bootstrap</u>
      </p>
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
      {product && !isError && (
        <Container className="d-flex flex-wrap gap-3">
          <Card>
            <CardImg
              className="w-50 h-75 align-self-center"
              variant="top"
              src={product.image}
            />
            <Card.Body className="my-3">
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        </Container>
      )}
    </div>
  );
}

export default SingleProduct;
