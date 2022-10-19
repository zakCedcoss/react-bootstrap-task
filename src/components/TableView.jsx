import { useEffect, useState } from "react";
import { Alert, Table, Toast, ToastContainer } from "react-bootstrap";

function TableView() {
  const url = "https://jsonplaceholder.typicode.com/users/";
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
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
      <h1 className="text-center">Table View</h1>
      <p className="text-center">
        <u>This is to show the table using bootstrap</u>
      </p>
      <div>
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
        {users.length !== 0 && (
          <Table className="mx-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <a href={user.website}>{user.website}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
}

export default TableView;
