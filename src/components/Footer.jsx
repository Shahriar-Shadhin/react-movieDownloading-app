import React from 'react'
import '../fontawesome.min.css'

const Footer = () => {
   return (
      <>
         <div className="footer-dark" style={{ marginTop: "12.3rem" }}>
            <footer>
               <div className="container">
                  <div className="row">
                     <div className="col-12 text-center text-muted py-3"><strong>Follow Me In</strong></div>
                     <div className="col item social">
                        <a href="https://www.facebook.com/shahriar.shadhin.7">
                           <i className="fa fa-facebook"></i>
                        </a>
                        <a href="https://www.instagram.com/shahriarshadin/">
                           <i className="fa fa-instagram"></i>
                        </a>
                        <a href="https://github.com/Shahriar-Shadhin">
                           <i className="fa fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/shahriar-shadhin-4b313a171/">
                           <i className="fa fa-linkedin"></i>
                        </a>
                     </div>
                  </div>
                  <p className="copyright">© All Rights Reserved by Shadhin</p>
               </div>
            </footer>
         </div>
      </>
   )
}

export default Footer
