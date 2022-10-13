import React from 'react'
import { Container,TextInput, Textarea, Icon, Button } from 'react-materialize'
export default function Contact() {
   const handleSubmit =(e)=> {
      e.preventDefault()
    }
  
   return (
      <div className='Contact'>
         <Container>
            <h3>Contact us</h3>
            <br/>
            <form onSubmit={handleSubmit}>
               <TextInput icon={<Icon>person</Icon>} id="TextInput-38" label="Your name"/>
               <TextInput icon={<Icon>phone</Icon>} id="TextInput-39" label="Your phone"/>
               <TextInput icon={<Icon>email</Icon>} email id="TextInput-41" label="Your email" validate/>
               <Textarea icon={<Icon>mode_edit</Icon>} id="Textarea-28" label="Your content"/>
               <Button>Submit</Button>
            </form> 
         </Container>
      </div>
   )

}