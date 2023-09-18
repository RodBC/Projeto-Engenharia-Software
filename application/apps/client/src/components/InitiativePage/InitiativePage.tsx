import { useState, useEffect, useContext} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { NavBar } from '../Navbar/navbar';
import { Footer } from '../Footer/Footer';
import './InitiativePage.css';
import TestImg from '../../assets/rec_antigo.jpg'
import ProfileImg from '../../assets/profile.png'
import { BsFillGeoAltFill } from "react-icons/bs";
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'  
import {AiFillTwitterCircle} from 'react-icons/ai'
import{BiSolidPin} from 'react-icons/bi'
import { useParams } from 'react-router-dom';
import{SlUserFollow} from 'react-icons/sl'
import {SlUserFollowing} from 'react-icons/sl'
import { AuthContext, useAuth } from '../../contexts/auth/AuthContext';


export const InitiativePage= ()=> {

  let link_text = window.location.href;

  const { id } = useParams()
  const auth = useContext(AuthContext)

  const { getOneInitiative } = useAuth()
  const [follow, setFollow] = useState(false);
  const [initiative, setInitiative] = useState([]);
 

  const handleFollow = () => setFollow(!follow);

  const CopyText = () => navigator.clipboard.writeText(link_text);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getOneInitiative(Number(id));
        console.log(response)
        setInitiative(response.data);
      } catch (error) {
        console.error("Erro ao buscar iniciativas:", error);
      }
    };

    fetchData();
  }, []);

  const checkUser = () => {
    return auth?.user?.id == Number(initiative.ownerId) ? true : false;
  }

  return (

    <>
      <NavBar/>

            <h2 id='ini_name'>{initiative.name}</h2>

            <div id='copy_link_div'>
                <span id='link_text'>{link_text}</span>
                <span id='copy_text' onClick={()=>{CopyText()}}>copiar link</span>
            </div>
            {/* <div id='edit_button_div'>
                <span> <AiFillEdit/> editar </span>
            </div> */}
          
               
                    {checkUser() ?  
                    null
                    :
                    follow ? 
                    <>
                    <div id='follow_button_div'>
                        <span onClick={handleFollow}> 
                            <><SlUserFollowing>Seguindo</SlUserFollowing></> 
                            : 
                            <><SlUserFollow>Seguir</SlUserFollow></>
                        </span>
                    </div>
                    </> : null
                    }  
            

            <div  id='tabcontainer'>  
            <Tabs defaultActiveKey={'sobre'} id='Tab_Bar'>
                <Tab title='sobre' eventKey='sobre'>
                    <div id='icons_div'>
                        <AiFillFacebook className='social_icons'/>
                        <AiFillInstagram className='social_icons'/>
                        <AiFillTwitterCircle className='social_icons'/>
                    </div>
                    <div id='locationtext'>
                        <span> <BsFillGeoAltFill/>{initiative.neighborhood}</span>
                    </div>
                    <div id='aboutext'>
                        {initiative.description}
                    </div>
                </Tab>

                <Tab title='imagens' eventKey='imagens'>
                    {/* aqui vem um grid de imagens */}
                    <div id='imagegrid-container'>
                        <div id='imagegrid'>
                            <img src={initiative.icon} alt="" className='Ini_Images'/>
                        </div>
                    </div>
                </Tab>

                <Tab title='seguidores' eventKey='seguidores'>
                    <div id='followersgrid-div'>
                        <div id='followersgrid'>
                            <img src={ProfileImg} alt="" className='' style={{height: '100px'}}/>
                        </div>
                    </div>
                </Tab>

                <Tab title='mural' eventKey='mural'>
                    <div id='mural_text1'>Atualizações</div>
                    <div id='muralgrid'>
                        <div className='msg_div'>
                            <h6 className='post_title'> <BiSolidPin/> titulo do post</h6>
                            <span>aumentamos a quantidade de cachorros com chupeta na região do grande recife</span>
                        </div>
                    </div>
                </Tab>

            </Tabs>
            </div>
        <Footer/>
    </>

  )
}