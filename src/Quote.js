import React, { useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Theme2.css'
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quote = () => {
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
        <div class="modal fade in" id="myModal1" tabindex="-1" role="dialog" style={{display: 'block', paddingRight: '15px'}}>
            <div class="modal-dialog modal-sm">
                <div class="modal-content">
                    <div class="modal-header">
                        <Link to="/">
                            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"> ×</button>
                        </Link>
                        <h6 class="modal-title">Quick Enquiry</h6>
                    </div>
                    <div class="modal-body">
                        <p class="send_p">If you have a urgent requirement please fill the form or dial contact number: +91 8920193059</p>

                        <form role="form" name="contact-form" method="POST" onSubmit={handleSubmit} id="Send-inquiry-Form1" noValidate="">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input class="form-control" type="hidden" name="url" value="/clients" />
                                        <input tabindex="1" class="form-control" type="text" onChange={handleInputChange} value={formData.name} name="name" placeholder="Your Name*" required="" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input tabindex="2" class="form-control" type="email" onChange={handleInputChange} value={formData.email} name="email" placeholder="Your Email ID*" required="" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input tabindex="3" class="form-control" type="text" value={formData.mobile} onChange={handleInputChange} oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" maxlength="12" name="mobile" placeholder="Your Phone No*" required="" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <input tabindex="4" class="form-control" type="text" onChange={handleInputChange} value={formData.location} name="location" placeholder="Your Location*" id="autocomplete" onfocus="geolocate()" required="" />
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <textarea tabindex="5" class="form-control" onChange={handleInputChange} value={formData.message} rows="5" placeholder="Your Comments Here*" name="message"></textarea>
                                    </div>
                                </div>

                                <div class="col-lg-12">
                                    <div class="form-group">
                                        {/* <!--<button tabindex="7" class="modal_btn" type="submit" name="submit" value="Submit" data-submit="...Sending">Submit</button>--> */}
                                        <button class="modal_btn" type="submit" name="btn-Message" id="btn-Message"><span class="txt">Submit</span></button>
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


    );
}

export default Quote