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



export const InitiativePage= ()=> {

  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);




  return (

    <>
      <Navbar/>

        <h3 id='ini_name'>/placeholder for title/</h3>
        <div  id='tabcontainer'>
          <Tabs defaultActiveKey={'sobre'} id='Tab_Bar'>

              <Tab title='sobre' eventKey='sobre'>

                  <div id='icons_div'>
                      <AiFillFacebook className='social_icons'/>
                      <AiFillInstagram className='social_icons'/>
                      <AiFillTwitterCircle className='social_icons'/>
                  </div>

                  <div id='locationtext'>
                      <span>/ local da iniciativa /<BsFillGeoAltFill/> </span>
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



              <Tab title='comentarios' eventKey='comentarios'>


              </Tab>


          </Tabs>
        </div>
        <Footer/>
    </>

  )
}