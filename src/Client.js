import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Theme2.css'
import Dheader from "./Dheader";
import Footer from "./Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Client(){
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

            <section class="heading_banner about_us_banner" style={{backgroundImage: "url('Bannerbg.jpg')"}} >
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center">
                            <h4 class="cat_title">Our Brands</h4>
                            <div class="clearfix"></div>
                            <div class="cat_title2">Best Bicycel Manufacturing Company</div>                        
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
                                <li class="active">Our Brands</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <section class="about_page">
                <div class="container">
                    <div class="row">
                    <div class="noSidebarFull col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-lg-push-3 col-md-push-3 col-xs-12 col-12">
                            <div class="right_side">
                                <h1>Our Brands</h1>

                                <div class="wps_right">
                                    <div class="row">
                                                                                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="client_image">
                                                <div class="client_logo">
                                                    <img src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866690-white-black_cyclop_21kb_logo_png_100x.avif" title="Bicycle Manufacturers" alt="Bicycle Manufacturers" />
                                                </div>
                                            </div>
                                        </div>
                                                                                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="client_image">
                                                <div class="client_logo">
                                                    <img src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866913-l-02_1-removebg-preview.png" title="Bicycle Wholesale Suppliers" alt="Bicycle Wholesale Suppliers" />
                                                </div>
                                            </div>
                                        </div>
                                                                                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="client_image">
                                                <div class="client_logo">
                                                    <img src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866899-l-03-removebg-preview.png" title="Bicycle Suppliers" alt="Bicycle Suppliers" />
                                                </div>
                                            </div>
                                        </div>
                                                                                <div class="col-lg-3 col-md-3 col-sm-4 col-xs-6">
                                            <div class="client_image">
                                                <div class="client_logo">
                                                    <img src="https://firecatcher.in/admin/uploads/brands/brand-16-09-2023-1694866889-l-04_1-removebg-preview (1).png" title="Bicycle Dealers" alt="Bicycle Dealers" />
                                                </div>
                                            </div>
                                        </div>
                                                                            </div>
                                </div>
                            </div>
                        </div>
                        <div class="noSidebar col-md-3 col-md-pull-9">
                            <div class="left_sidebar">
                                <div class="left_title">Our Products</div>
                                <ul>
                                                                        <li class="cs_subm">
                                        <a href="javascript:void(0)" title="Bicycle">Bicycle</a>
                                                                                <ul class="cs_subdown">
                                                                                        <li class="cs_subm">
                                                <a href="/bicycles/City-Bicycle" title="City Bicycle">City Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/ranger-bicycle" title="Ranger Bicycle">Ranger Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/mountain-bicycle" title="Mountain Bicycle">Mountain Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/full-suspension-bicycle" title="Full Suspension Bicycle">Full Suspension Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="/bicycles/Folding-Bicycle" title="Folding Bicycle">Folding Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/fat-bicycle" title="Fat Bicycle">Fat Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/racing-bicycle" title="Racing Bicycle">Racing Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                    </ul>
                                                                            </li>
                                                                        <li class="cs_subm">
                                        <a href="javascript:void(0)" title="Bicycle Parts">Bicycle Parts</a>
                                                                                <ul class="cs_subdown">
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/steel-ball" title="Steel Ball">Steel Ball 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/mild-steel-ball" title="Mild Steel Ball">Mild Steel Ball 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/chrome-steel-ball" title="Chrome Steel Ball">Chrome Steel Ball 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-air-pump" title="Bicycle Air Pump">Bicycle Air Pump 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-gear-parts" title="Bicycle Gear Parts">Bicycle Gear Parts 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-alloy-rim" title="Bicycle Alloy Rim">Bicycle Alloy Rim 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-gel-cover" title="Bicycle Gel Cover">Bicycle Gel Cover 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-disc-brake-machine-104" title="Bicycle Disc Brake Machine">Bicycle Disc Brake Machine 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-meg-wheel" title="Bicycle Meg Wheel">Bicycle Meg Wheel 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-lock" title="Bicycle Lock">Bicycle Lock 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-spokes" title="Bicycle Spokes">Bicycle Spokes 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-bells" title="Bicycle Bells">Bicycle Bells 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="https://firecatcher.in/product/bicycle-light" title="Bicycle light">Bicycle light 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                    </ul>
                                                                            </li>
                                                                    </ul>
                            </div>

                            <div id="sticky-anchor"></div>
                            <div class="left_sidebar" id="sidebar">
                                <div class="left_title">Quick Contact</div>
                                <div class="alert alert-warning EmessageBox1" style={{display:'none'}}>
                                    <span class="Emessage1"></span>
                                </div>
                                <div class="alert alert-success SmessageBox1" style={{display:'none'}}>
                                    <span class="Smessage1"></span>
                                </div>
                                <form name="contact-form" id="Send-inquiry-Form2" method="POST" onSubmit={handleSubmit} class="quick_form" noValidate="">
                                    <div class="form-group">
                                        <input tabindex="101" class="form-control" onChange={handleInputChange} type="text" name="name" id="name" placeholder="Your Name*" value={formData.name} pattern="[a-z A-Z]+" required="" />
                                    </div>

                                    <div class="form-group">
                                        <input tabindex="102" class="form-control" onChange={handleInputChange} type="email" name="email" id="email" placeholder="Your Email ID*" value={formData.email} required="" />
                                    </div>

                                    <div class="form-group">
                                        <input tabindex="103" class="form-control" onChange={handleInputChange} type="tel" name="mobile" id="mobile" placeholder="Your Phone No*" maxlength="12" onkeyup="if (/\D/g.test(this.value))
                        this.value = this.value.replace(/\D/g, '')" value={formData.mobile} required="" />
                                    </div>
                                    <div class="form-group">
                                        <input tabindex="104" class="form-control locationLeft" onChange={handleInputChange} type="text" name="location" placeholder="Your Location*" value={formData.location} autocomplete="off" required="" />
                                    </div>
                                    <div class="form-group">
                                        <textarea tabindex="105" class="form-control" onChange={handleInputChange} name="message" id="message" placeholder="Your Message*" value={formData.message} required=""></textarea>
                                    </div>
                                    <div class="form-group" style={{marginBottom: '0'}}></div>

                                    <div class="form-group">
                                        <button class="modal_btn" type="submit" name="btn-Message" id="btn-Message" value="Submit">Submit</button>
                                    </div>
                                </form>
                                <ToastContainer position="top-right"
                                 autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                            </div>
                        </div>
                    </div>
                </div>
                </section>


            <Footer />
        </div>
    );
}

export default Client