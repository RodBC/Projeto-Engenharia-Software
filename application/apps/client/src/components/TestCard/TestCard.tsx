import { useState, useEffect, useContext } from "react";
import { AuthContext, useAuth } from "../../contexts/auth/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestCard.css";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useMediaQuery } from "react-responsive";


export const TestCard = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [initiatives, setInitiatives] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getAllInitiatives, getUserLikes, getAllLikes } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllInitiatives();
        const userLikes = await getUserLikes();
        const allLikes = await getAllLikes(); 
        const userLikedInitiativeIds = userLikes.map((like) => like.initiativeId);

        const likesCountMap = {};

        allLikes.forEach((like) => {
          const { initiativeId } = like;
          if (likesCountMap[initiativeId]) {
            likesCountMap[initiativeId]++;
          } else {
            likesCountMap[initiativeId] = 1;
          }
        });

        const initiativesWithLikes = response.map((initiative) => ({
          ...initiative,
          liked: userLikedInitiativeIds.includes(initiative.id),
          likesCount: likesCountMap[initiative.id] || 0, 
        }));

        setInitiatives(initiativesWithLikes);
        setIsLoading(false);

      } catch (error) {
        console.error("Erro ao buscar iniciativas:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isSmallScreen ? 2 : 5,
    slidesToScroll: 1,
  };

  const toggleItem = (item: any) => {
    if (selectedItems.some((selectedItem) => selectedItem === item)) {
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const neighborhoods = initiatives.map((item) => item.neighborhood);
  const uniqueNeighborhoods = [...new Set(neighborhoods)];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="locations_buttons">
        <div
          style={{ width: "80%", margin: "auto", marginBottom: "100px", color: "black"}} className="Slider" >
          <h3 style={{ width: "100%", textAlign: "center", marginTop: "30px" }}>
            Bairros
          </h3>
          {isLoading ? (
            <Slider {...settings}>
              {Array.from({ length: 10 }, (_, index) => (
                <div key={index} className="neighborhood loading">
                  <p style={{ textAlign: "center" }}>Carregando...</p>
                </div>
              ))}
            </Slider>
          ) : (
            <Slider {...settings}>
              {uniqueNeighborhoods.map((neighborhood, index) => (
                <div key={index} onClick={() => 
                  toggleItem(neighborhood)} className={`neighborhood ${selectedItems.includes(neighborhood) ? "selected" : ""}`}>
                  <p style={{ textAlign: "center" }}>{neighborhood}</p>
                </div>
              ))}
            </Slider>
          )}
        </div>
      </div>
      <div className="space_for_cards">
        <div id="grid_div">
          {isLoading ? (
              <p>Carregando...</p>
            ) : 
            selectedItems.length > 0 ? 
              (initiatives.filter((data) => selectedItems.includes(data.neighborhood)).map((data, index) => 
              <CardItem key={index} data={data} />)
            ) : (
              initiatives.map((data, index) => (
              <CardItem key={index} data={data}  />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const CardItem = ({ data }: { data: any }) => {
  const [curtida, setCurtida] = useState(data.liked);
  const { createLike, deleteLike } = useAuth();
  const [localLikesCount, setLocalLikesCount] = useState(data.likesCount);
  const [isUpdating, setIsUpdating] = useState(false);
  const auht = useContext(AuthContext)

  const updateLikesCount = (newCount: number) => {
    setLocalLikesCount(newCount);
  };


  const muda_curtida = async () => {
    if (auht?.authenticated){
      try {
        setIsUpdating(true);
        if (curtida) {
          await deleteLike(data.id);
          updateLikesCount(localLikesCount - 1); 
        } else {
          await createLike(data.id);
          updateLikesCount(localLikesCount + 1); 
        }
        setCurtida(!curtida);

      } catch (error) {
        console.error("Erro ao mudar curtida:", error);
      } finally {
        setIsUpdating(false);
      }
    }else{
      return navigate("/login")
    }
  };

  const navigate = useNavigate();

  return (
    <Card style={{ width: "100%", height: "100%" }}>
      <Card.Img variant="top" src={data.icon} style={{ height: '250px' }} />
      <Card.Body
        style={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.neighborhood}</Card.Text>
        <div
          style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <Button variant="primary" onClick={() => { return navigate(`/Initiative/${data.id}`) }}>Saiba Mais</Button>
          <div/>
          <div>
          <span style={{marginRight: '10px'}}>{localLikesCount} Curtidas</span>
          <FontAwesomeIcon
            icon={faHeart}
            className="heart_button"
            color={isUpdating ? "grey" : curtida ? "red" : "grey"}
            onClick={muda_curtida}
            style={{ height: "25px", cursor: "pointer" }}
          />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

