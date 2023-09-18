import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBTextArea, MDBFile } from 'mdb-react-ui-kit';
import { useAuth } from '../../contexts/auth/AuthContext';
import { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { v4 } from "uuid";

export const InitiativeForm = () => {

    const { createInitiative } = useAuth()

    const [description, setDescription] = useState("");
    const [name, setName] = useState("")
    const [neighborhood, setNeighborhood] = useState("")
    const [image, setImage] = useState(null)


    const create = async() => {

        if (image == null) return;

        const imageRef = ref(storage,`images/initiative/icon/${image.name + v4()}`);
        
        try {
            // Upload the image and get the URL
            const snapshot = await uploadBytes(imageRef, image);
            const url = await getDownloadURL(snapshot.ref);
    
            await createInitiative(name, description, neighborhood, url, null, null)
        } catch (error) {
            console.error("Error uploading image:", error);
        }
          
    }

    return (
        <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center'>
            <MDBCol lg='9' className='my-5'>
            <h1 className="text-black mb-4">Crie sua Iniciativa</h1>
            <MDBCard>
                <MDBCardBody className='px-4'>
                <MDBRow className='align-items-center pt-4 pb-3'>
                    <MDBCol md='3' >
                    <h6 className="mb-2">Nome da Iniciativa</h6>
                    </MDBCol>
                    <MDBCol md='9'>
                    <MDBInput 
                    label='Nome' 
                    size='lg' 
                    id='form1' 
                    type='text'
                    onChange={(e)=> {setName(e.target.value)}}/>
                    </MDBCol>
                </MDBRow>

                <MDBRow className='align-items-center pt-4 pb-3'>
                    <MDBCol md='3' >
                    <h6 className="mb-2">Bairro da iniciativa</h6>
                    </MDBCol>
                    <MDBCol md='9'>
                    <MDBInput 
                    label='Bairro' 
                    size='lg' 
                    id='form1' 
                    type='text'
                    onChange={(e)=> {setNeighborhood(e.target.value)}}/>
                    </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                <MDBRow className='align-items-center pt-4 pb-3'>
                    <MDBCol md='3' >
                    <h6 className="mb-2">Descrição da iniciativa</h6>
                    </MDBCol>
                    <MDBCol md='9'  >
                    <MDBTextArea label='Descrição'
                    id='textAreaExample' 
                    rows={3} 
                    style={{minHeight: '45px'}}
                    onChange={(e)=> {setDescription(e.target.value)}}/>
                    </MDBCol>
                </MDBRow>

                <hr className="mx-n3" />
                <MDBRow className='align-items-center pt-4 pb-3'>
                    <MDBCol md='3'>
                    <h6 className="mb-2">Foto para iniciativa</h6>
                    </MDBCol>
                    <MDBCol md='9' >
                    <MDBFile 
                    size='lg' 
                    id='customFile' 
                    onChange={(event) => {setImage(event.target.files[0]);}}/>
                    </MDBCol>
                </MDBRow>
                <hr className="mx-n3" />

                <MDBBtn className='my-4' onClick={create} size='lg'>Criar Iniciativa</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBCol>
        </MDBRow>

        </MDBContainer>
    );
}
