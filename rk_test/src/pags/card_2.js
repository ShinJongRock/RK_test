import React from 'react'
import { render } from 'react-dom'
import Card from 'react-credit-cards'

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate
} from './utils'
import Box from '@mui/material/Box';
import 'react-credit-cards/es/styles-compiled.css'

export default class App extends React.Component {
  state = {
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    issuer: '',
    focused: '',
    formData: null
  }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer })
    }
  }

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    })
  }

  handleInputChange = ({ target }) => {
    if (target.name === 'number') {
      target.value = formatCreditCardNumber(target.value)
    } else if (target.name === 'expiry') {
      target.value = formatExpirationDate(target.value)
    } else if (target.name === 'cvc') {
      target.value = formatCVC(target.value)
    }

    this.setState({ [target.name]: target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    alert('You have finished payment!')
    this.form.reset()
  }

  render() {
    const { name, number, expiry, cvc, focused, issuer } = this.state

    return (


      <div key='Payment' style={{ backgroundColor: '#3c3c3c', height:'1100px'  ,display:'flex',alignItems:'center' }} >
       
          <Container component="main" maxWidth="md"  >
         
            <Box 
    
            
            sx={{
             
            justifyContent:'center',
            alignItems:'center',
            flexDirection: 'column',
            alignItems: 'center',
            border : '1px solid',
            boxShadow : " 1px 1px gray",
            backgroundColor: 'white',
            borderRadius: '15px',
            border:'white'
            
            }}>
              <Box
                sx={{
                
                  padding:10,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                 


                }}
              >
                <Card
                  number={number}
                  name={name}
                  expiry={expiry}
                  cvc={cvc}
                  focused={focused}
                  callback={this.handleCallback}
                />
                
                <div style={{ border :' 1px solid' ,width:'400px' , height:'400px' ,marginTop:'-100px' ,borderRadius: '15px',}}>

                <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}  style={{  margin:'120px'}}>
                 
                 
                <div  >
                    <div style={{marginLeft:'-180px' }}> Card Number:</div>

                    <input
                      type='tel'
                      name='number'
                      className='form-control'
                      placeholder='Card Number'
                      pattern='[\d| ]{16,22}'
                      maxLength='30'
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      style={{width:'300px',height:'30px' , marginLeft:'-70px', borderRadius: '10px',}}
                    />
                  </div>
                 
                  <div className='form-group'>
                    <div style={{marginLeft:'-180px' ,marginTop:'10px'}}>Name on card:</div>

                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Name'
                      pattern='[a-z A-Z-]+'
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      style={{width:'300px',height:'30px' , marginLeft:'-70px', borderRadius: '10px',}}
                    />
                  </div>

                  <table style={{marginLeft:'-73px' ,marginTop:'10px'}}>
                  <tr  >
                    <td>
                    <div className='form-group'>
                    <small>Expiration Date:</small>

                    <input
                      type='tel'
                      name='expiry'
                      className='form-control'
                      placeholder='Valid Thru'
                      pattern='\d\d/\d\d'
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      style={{width:'140px',borderRadius: '10px',height:'30px'}}
                    />
                  </div>
                    </td>
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                    <td>
                    <div className='form-group'>
                    <small>CVC: </small>

                    <input
                      type='tel'
                      name='cvc'
                      className='form-control'
                      placeholder='CVC'
                      pattern='\d{3}'
                      required
                      onChange={this.handleInputChange}
                      onFocus={this.handleInputFocus}
                      style={{width:'140px',borderRadius: '10px',height:'30px'}}
                    />
                  </div>
                  <input type='hidden' name='issuer' value={issuer} />

                    </td>
                  </tr>
                  </table>

                 
                 
                  <div style={{margin:'20px'}}>
                  <button type='submit'
                        style={{
                          backgroundColor:'#008080',
                          color:'white',
                          width:'100%',
                          height: '50px',
                          border: '1px solid white',
                          marginTop:'20px',
                          borderRadius: '5px',
                          display:'flex',
                          justifyContent:'center',
                          alignItems:'center'
                          }}>
                          <h3>등록</h3>
                        </button>
                  </div>
                </form>

                </div>


              </Box>
            </Box>

          </Container>




      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
