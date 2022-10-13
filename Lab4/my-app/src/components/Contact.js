import { Link } from 'react-router-dom'
import { Icon, CardTitle, Row, Col, Card, Container, TextInput, Select, Textarea } from 'react-materialize'
export default function Contact () {
    const handleSubmit =(e)=> {
        e.preventDefault()
      }    
    return (
        <Container className='contact_us'>
            <h3>Contact us</h3>
            <form className='contact' onSubmit={handleSubmit}>
                <TextInput id='TextInput-38' placeholder='Your Name' />
                <TextInput id='TextInput-39' placeholder='Your Phone' />
                <TextInput email id='TextInput-41' placeholder='Email' validate />
                <Select id='Select-46' multiple={false} onChange={function noRefCheck() {}}value=''>
                    <option disabled value=''>
                        Choose your favorite nation
                    </option>
                    <option value='1'>
                        England 
                    </option>
                    <option value='2'>
                        France
                    </option>
                    <option value='3'>
                        Spain
                    </option>
                </Select>
                <Textarea id='Textarea-28' placeholder='Your content' />
                <button>Submit</button>
            </form>
        </Container>
)}