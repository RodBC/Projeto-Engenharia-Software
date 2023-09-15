import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import montanha from "../../assets/fotoCool.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../contexts/auth/AuthContext";

interface CardItemData {
  name: string;
  description: string;
}

export const TestCard = () => {
  const { getAllInitiatives } = useAuth();
  const [initiatives, setInitiatives] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllInitiatives();
        setInitiatives(response);
      } catch (error) {
        console.error("Erro ao buscar iniciativas:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {initiatives.map((data, index) => (
        <CardItem key={index} data={ data } />
      ))}
    </>
  );
};

const CardItem = ({ data }: { data: CardItemData }) => {
  const [curtida, setCurtida] = useState(false);

  const muda_curtida = () => {
    setCurtida(!curtida);
  };

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img variant="top" src={montanha} />
      <Card.Body
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.description}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Button variant="primary">Saiba Mais</Button>
          <FontAwesomeIcon
            icon={faHeart}
            className="heart_button"
            color={curtida ? "red" : "grey"}
            onClick={muda_curtida}
            style={{ height: "25px", cursor: "pointer" }}
          />
        </div>
      </Card.Body>
    </Card>
  );
};
