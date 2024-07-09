import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Theme2.css'
import Dheader from "./Dheader";
import Footer from "./Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contactus(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        message: '',
      });
      
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
      const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          // Send form data to the server
          const response = await fetch('http://localhost:3001/api/quickEnquiry', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (response.ok) {
            // Handle successful form submission (optional)
            console.log('Form submitted successfully');
            toast.success('Form submitted successfully');

            setFormData({
                name: '',
                email: '',
                mobile: '',
                location: '',
                message: '',
              });
          } else {
            // Handle errors (optional)
            console.error('Form submission failed');
            toast.error('Form submission failed');
          }
        } catch (error) {
          console.error('Error submitting form', error);
          toast.error('Error submitting form');
        } 
      };

    return(
        <div>
            <Dheader />

            <section class="heading_banner about_us_banner" style={{backgroundImage: "url('Bannerbg.jpg')"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center">
                            <h4 class="cat_title">Contact Us</h4>
                            <div class="clearfix"></div>
                            <div class="cat_title2">Write to us or call us, get quick response</div>                     
                        </div>
                    </div>
                </div>
            </section>

            <div class="inner_breadcrumb hidden-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                            <ul class="breadcrumb">
                                <li><a href="/" title="Home">Home</a></li>
                                <li class="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section class="contact_page">
                <div class="container">
                    <div class="contact_form_grid1">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6 contact_details">
                                <h4>CONTACT DETAILS</h4>

                                <p>Write to us or call us, get quick response powered by our advanced customer support team .</p>
                                <ul class="address_list">
                                    <li><a href="tel:+91-8920193059"><span class="fa fa-phone"></span> +91-8920193059</a></li>
                                    <li><a href="tel:+91-8920193059"><span class="fa fa-phone"></span> +91-8920193059</a></li>
                                    <li><a href="mailto:Singhicycle@gmail.com"><span class="fa fa-envelope "></span>Singhicycle@gmail.com</a></li>
                                    <li><a href="https://www.google.com/maps/place/<b>Head Office : </b>431, Esplande Rd, Katra Mashru, Chandni Chowk, Delhi, 110006"><span class="fa fa-map-marker "></span> 
                                    <b>Head Office : </b>431, Esplande Rd, Katra Mashru, Chandni Chowk, Delhi, 110006</a></li>
                                                                    </ul>

                                <h4>Get in Touch</h4>
                                <ul class="social_list">
                                                                    </ul>
                            </div>

                            <div class="col-lg-6 col-md-6 col-sm-6 form_grid">
                                <h4>Contact Us</h4>
                                <form method="POST" onSubmit={handleSubmit} id="Send-message-Form" noValidate="">
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input tabindex="1" class="form-control" onChange={handleInputChange} type="text" value={formData.name} name="name" placeholder="Your Name*" required="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input tabindex="2" class="form-control" onChange={handleInputChange} type="email" value={formData.email} name="email" placeholder="Your Email ID*" required="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input tabindex="3" class="form-control" onChange={handleInputChange} type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="12" value={formData.phone} name="phone" placeholder="Your Phone No*" required="" />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div class="form-group">
                                                <input tabindex="4" class="form-control" onChange={handleInputChange} type="text" value={formData.location} name="location" placeholder="Your Location*" id="autocomplete" onfocus="geolocate()" required="" /> 
                                            </div>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <textarea tabindex="5" class="form-control" onChange={handleInputChange} value={formData.message} rows="5" placeholder="Your Comments Here*" name="message"></textarea>
                                            </div>
                                        </div>
                                       
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="form-group">
                                                <button class="modal_btn" type="submit" name="submit"><span class="txt">Submit</span></button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ToastContainer position="top-right"
                                 autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="contact_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14004.795237970582!2d77.2346546!3d28.6537653!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1bff957291%3A0x1c9566a6276db648!2sSinghi%20cycle%20co!5e0!3m2!1sen!2sin!4v1692980792518!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                </iframe>           
             </div>




            <Footer />
        </div>


    );
}

export default Contactus