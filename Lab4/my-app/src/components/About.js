import React from 'react'
import { Container,TextInput, Textarea, Icon, Button,Card } from 'react-materialize'
export default function About() {
   const handleSubmit =(e)=> {
      e.preventDefault()
    }
  
   return (
      <div className='About'>
         <Container  >
            <Card>
            <br/>
            <form onSubmit={handleSubmit}>
               <TextInput icon={<Icon>people</Icon>} id="TextInput-38" label="TEAM"/>
               <TextInput icon={<Icon>map</Icon>} id="TextInput-39" label="Nations"/>
               <Textarea icon={<Icon>favorite_border</Icon>} id="Textarea-28" label="Daily news"/>
               <Button>Submit</Button>
            </form>
            </Card> 
         </Container>
      </div>
   )

}