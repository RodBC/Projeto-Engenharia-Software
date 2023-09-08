import React from 'react'
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Navbar } from '../Navbar/navbar';
import { Footer } from '../Footer/Footer';
import './InitiativePage.css';
import TestImg from '../../assets/rec_antigo.jpg'
import ProfileImg from '../../assets/profile.png'
import { BsFillGeoAltFill } from "react-icons/bs";
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'  
import {AiFillTwitterCircle} from 'react-icons/ai'
import{BiSolidPin} from 'react-icons/bi'
import {AiFillEdit} from 'react-icons/ai'

import{SlUserFollow} from 'react-icons/sl'
import {SlUserFollowing} from 'react-icons/sl'


// -------------descrição da iniciativa:

let link_text = 'https://www.cachorrochupetones.com.br'

// -------------


export const InitiativePage= ()=> {



  const[follow, setFollow] = useState(false);

  const handleFollow = () =>{
    setFollow(!follow);
  }

  const CopyText = () =>{
    navigator.clipboard.writeText(link_text);
  }

  return (

    <>
      <Navbar/>

            <h2 id='ini_name'>Cachorro Chupetones</h2>

            <div id='copy_link_div'>

                    <span id='link_text'>{link_text}</span>
                    <button id='copy_text' onClick={()=>{CopyText()}}>copiar link</button>

            </div>

            {/* <div id='edit_button_div'>
                <span> <AiFillEdit/> editar </span>
            </div> */}
            <div id='follow_button_div'>
                <span onClick={handleFollow}> 
                    {follow ? <><SlUserFollowing /> seguindo</> : <><SlUserFollow /> seguir</>} 
                </span>
            </div>

            <div  id='tabcontainer'>
                
            <Tabs defaultActiveKey={'sobre'} id='Tab_Bar'>

                <Tab title='sobre' eventKey='sobre'>

                    <div id='icons_div'>
                        <AiFillFacebook className='social_icons'/>
                        <AiFillInstagram className='social_icons'/>
                        <AiFillTwitterCircle className='social_icons'/>
                    </div>

                    <div id='locationtext'>
                        <span> <BsFillGeoAltFill/> local da iniciativa </span>
                    </div>

                    <div id='aboutext'>
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Commodi, beatae nam quidem adipisci 
                        enim facilis voluptates tempore corrupti 
                        officiis, deleniti deserunt rerum perspiciatis 
                        sint aut optio id dolorum consequatur similique?
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Commodi, beatae nam quidem adipisci 
                        enim facilis voluptates tempore corrupti 
                        officiis, deleniti deserunt rerum perspiciatis 
                        sint aut optio id dolorum consequatur similique?
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Commodi, beatae nam quidem adipisci 
                        enim facilis voluptates tempore corrupti 
                        officiis, deleniti deserunt rerum perspiciatis 
                        sint aut optio id dolorum consequatur similique?
                        Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. 
                        Commodi, beatae nam quidem adipisci 
                        enim facilis voluptates tempore corrupti 
                        officiis, deleniti deserunt rerum perspiciatis 
                        sint aut optio id dolorum consequatur similique?
                    </div>


                </Tab>





                <Tab title='imagens' eventKey='imagens'>
                    {/* aqui vem um grid de imagens */}

                    <div id='imagegrid'>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                        <img src={TestImg} alt="" className='Ini_Images'/>
                    </div>
                </Tab>

                <Tab title='seguidores' eventKey='seguidores'>
                
                    <div id='followersgrid'>
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
                    <img src={ProfileImg} alt="" className='follower_image' />
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