import React from 'react';
import './footer.styles.css';

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
                        <a href='a' className='form-submit'>Submit</a>
                    </div>
                </form>
                <p>&copy; 2023 BookStore. All Rights Reserved</p>

             </div>
//         </section>
    )
}

export default Footer;

// import React from "react";
// import "./footer.styles.css"
// import PrivacyModal from "../ModalView/PrivacyModal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import {
// //     faYoutube,
// //     faGithub,
// //     faFacebook,
// // } from "@fortawesome/free-brands-svg-icons";
// // import { faCopyright } from "@fortawesome/free-solid-svg-icons";

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-container">
//                 <div className="item1">
//                     <PrivacyModal />
//                 </div>

//                 <div className="item2">
//                     <span style={{ paddingRight: 5 }}>Copyright </span>
//                     {/* <FontAwesomeIcon icon={faCopyright} />{" "} */}
//                     <span style={{ paddingLeft: 5 }}>
//                         {new Date().getFullYear()} YourCompany. All Rights
//                         Reserved.
//                     </span>
//                 </div>
//                 <a
//                     href="https://github.com/sudiptob2/simple-react-footer"
//                     target="_blank"
//                     className="item3"
//                 >
//                     {/* <FontAwesomeIcon icon={faGithub} /> */}
//                 </a>
//                 <a
//                     href="http://fb.com/sudiptob2"
//                     target="_blank"
//                     className="item4"
//                 >
//                     {/* <FontAwesomeIcon icon={faFacebook} /> */}
//                 </a>
//                 <a
//                     href="https://www.youtube.com/"
//                     target="_blank"
//                     className="item5"
//                 >
//                     {/* <FontAwesomeIcon icon={faYoutube} /> */}
//                 </a>

//                 {false && <PrivacyModal click={true} />}
//             </div>
//         </footer>
//     );
// };

// export default Footer;