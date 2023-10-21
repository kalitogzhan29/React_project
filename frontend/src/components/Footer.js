import React from 'react';
import './footer.styles.css';
import { Container,Segment } from 'semantic-ui-react';
import { FacebookShareButton,WhatsappShareButton } from 'next-share';
import { FacebookIcon,WhatsappIcon
 } from 'react-share';

const Footer = () =>{
    return(
        <section className='footer-container'>
            <div className='container'>
                <h2>If you have any questions feel free to ask</h2>

                <form className='footer-form'>
                    <div className='form-group'>
                        <label htmlFor="name" className='form-label'>Name: </label>
                        <input type='text' id="name" className='form-input' placeholder='Enter your name'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='email' className='form-label' >Email: </label>
                        <input type='email' id="email" className='form-input' placeholder='Enter your email'/>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='Question' className='form-label'>Question: </label>
                        <textarea className='form-input' id="Question" placeholder='Type your Question'>

                        </textarea>
                    </div>

                    <div className='form-group'>
                        <button  className='form-submit'>Submit</button>
                    </div>
                </form>
                <Container>
                    <Segment>
                      <FacebookShareButton url="https://youtu.be/0XqSujRgVXI"
                      quote={'Facebook'}
                      hashtag='#React'
                      >
                        
                        <FacebookIcon  logoFillColor="white" round={true}>
                            </FacebookIcon>
                            </FacebookShareButton> 
                            < WhatsappShareButton
                            url="https://youtu.be/0XqSujRgVXI"
                            quote={'Facebook'}
                            hashtag='#React'>
                            <WhatsappIcon logoFillColor="white" round={true}>

                            </WhatsappIcon>
                            </WhatsappShareButton>
                    </Segment>
                </Container>
                <p  >&copy; 2023 BookStore. All Rights Reserved</p>

            </div>
        </section>
    )
}

export default Footer;