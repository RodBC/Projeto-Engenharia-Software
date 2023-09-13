import {Footer} from '../Footer/Footer.tsx'
import {Main,About,Socials,UserImg,Button} from './formStyles.tsx'
import Form from 'react-bootstrap/Form';
import { NavBar } from '../Navbar/navbar.tsx';
import {AiFillFacebook} from 'react-icons/ai'
import {useState} from 'react'

import {AiFillInstagram} from 'react-icons/ai'  

import {AiFillTwitterCircle} from 'react-icons/ai'



export const InitiativeForm = () =>{

   const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);
   const [textarea, setTextArea] = useState("")

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]; 

        if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result;
            if (result) {
            setSelectedImage(result as string | ArrayBuffer | null);
            }
        };
        reader.readAsDataURL(file);
        }
  };

    return(
        <>
            <NavBar/>

            <Main>
                <div>  
                    <UserImg src={typeof selectedImage === 'string' ? selectedImage : 'https://via.placeholder.com/150'} alt="Selected" />
                </div>
                
                <div>
                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Control type="file" accept="image/*" onChange={handleImageChange}/>
                 </Form.Group>

                    <div style={{'display':'flex','flexDirection':'column','textAlign':'start', marginBottom: '20px'}}>
                        
                        <p style={{'marginBottom':'0px'}}>Fale mais sobre você :)</p>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} style={{maxHeight: '200px'}} 
                             onChange={(e)=>{[setTextArea(e.target.value)]}}
                             value={textarea}/>
                        </Form.Group>
                    
                    <div style={{'display':'flex','flexDirection':'column','textAlign':'start',}}>
                        <p style={{'marginBottom':'0.32em'}}>Redes Sociais</p>

                        <label htmlFor="">
                            <AiFillFacebook style ={{'width':'2rem', 'height':'2rem'}}/> <Socials className='form-control' placeholder="Link..."/> 
                        </label>

                        <label htmlFor="">
                            <AiFillInstagram style ={{'width':'2rem', 'height':'2rem'}}/> <Socials className='form-control' placeholder="Link..."/> 
                        </label>

                        <label htmlFor="">
                            <AiFillTwitterCircle style ={{'width':'2rem', 'height':'2rem'}}/> <Socials className='form-control' placeholder="Link..."/> 
                        </label>
                    </div>

                    </div>

                    <Button className='btn btn-primary' onClick={()=>console.log(textarea, selectedImage)}>Prosseguir</Button>
                </div>
            </Main>

            <Footer/>
        </>
    );
}