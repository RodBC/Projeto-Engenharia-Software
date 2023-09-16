import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import montanha from "../../assets/fotoCool.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestCard.css";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export const TestCard = () => {

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [initiatives, setInitiatives] = useState([]);
  const { getAllInitiatives } = useAuth()

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const toggleItem = (item: any) => { 
    if (selectedItems.some((selectedItem) => selectedItem.bairro === item.bairro)) {
      setSelectedItems(selectedItems.filter((selectedItem) => selectedItem.bairro !== item.bairro));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <div className="locations_buttons">
        <div style={{width: "80%", margin: "auto", marginBottom: "100px", color: "black",}} className="Slider">
          <h3 style={{ width: "100%", textAlign: "center", marginTop: "30px" }}>
            Bairros
          </h3>
          <Slider {...settings}>
            {initiatives.map((item, index) => (
              <div key={index} onClick={() => toggleItem(item)} className={`bairro ${selectedItems.some((selectedItem) => selectedItem.bairro === item.bairro) ? "selected" : ""}`}>
                <p style={{ textAlign: "center" }} >{item.bairro}</p>
              </div>
            ))}
          </Slider>
      </div>
    </div>
    <div className="space_for_cards">
        <div id="grid_div">
          {selectedItems.length > 0 ? (
          selectedItems.map((data, index) => <CardItem key={index} data={data} />)
          ) : (
          initiatives.map((data, index) => <CardItem key={index} data={data} />)
          )}
        </div>
      </div>
    </div>
  );
};

const CardItem = ({ data }: { data: any }) => {
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
        <Card.Text>{data.bairro}</Card.Text>
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
