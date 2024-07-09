import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Theme2.css'
import Dheader from "./Dheader";
import Footer from "./Footer";
import Clients from "./Clients";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Citybicycle(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        location: '',
        message: '',
        product: 'City-Bicycle', // Initialize the product here
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
          const response = await fetch('http://localhost:3001/api/quoteRequest', {
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

            <section class="heading_banner about_us_banner" style={{backgroundImage: "url('../Bannerbg.jpg')"}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 text-center">
                            <h4 class="cat_title">City Bicycle Manufacturers</h4>
                            <div class="clearfix"></div>
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
                                <li><a href="/gallery">Bicycle</a></li>
                                <li class="active">City Bicycle</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section class="about_page">
                <div class="container">
                    <div class="row">
                        <div class="noSidebarFull col-xxl-9 col-xl-9 col-lg-9 col-md-9 col-sm-9 col-md-push-3">
                            <div class="right_side">
                                <div class="title_holder_inner">
                                      <h1 class="cat-widget-title">City Bicycle Manufacturers in Delhi</h1>                                                                </div>

                                <div class="wps_right">
                                    <div class="product_right_image">
                                        <div class="gallery slick-initialized slick-slider"><div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: '400px', transform: 'translate3d(0px, 0px, 0px)'}}>
                                            <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style={{width: '400px'}}>
                                                <div><div class="service_item wow fadeInDown" data-wow-delay=".0.2s" style={{width: '100%', display: 'inline-block'}}>
                                                <div class="service-block">
                                                    <div class="inner-box">
                                                        <div class="image-box" data-imgsrc="">
                                                            <figure class="image">
                                                                <img class="product-img" src='../CityCycle.webp' alt="City Bicycle Manufacturers in Delhi" title="City Bicycle Manufacturers in Delhi" />
                                                            </figure>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div></div></div></div></div></div>

                                        <a class="detail_enq_btn " data-toggle="modal" data-target="#myModal" onclick="document.getElementById('course_name').value='City Bicycle';" title="Get A Quote">
                                            Get A Quote
                                        </a>

                                    </div>

                                    <p style={{ marginRight: '0px', marginBottom: '10px', marginLeft: '0px', lineHeight: '24px', textAlign: 'justify' }}
>
                                    <font color="#363636" face="Poppins, sans-serif">
                                    <span style={{fontSize: '15px'}}>As <b>City Bicycle Manufacturers In Delhi</b>, our team likes making cycles in new and cool ways. We have dedicated employees who think hard to make cycles that not only look awesome but also feel super comfy and work well when you ride them.&nbsp;</span></font>
                                    <span style={{fontSize: '15px', fontFamily: 'Poppins, sans-serif'}}>We make all kinds of bicycles. Some look old-fashioned and charming, while others look modern and smooth. We do this so that different people can find bicycles they really like.</span></p>
                                    <h3 style={{ fontFamily: 'Poppins, sans-serif', color: 'rgb(51, 51, 51)', marginTop: '10px', marginBottom: '5px', fontSize: '20px', fontWeight: '600', overflow: 'hidden', padding: '0', lineHeight: '30px' }}>City Bicycle Suppliers In Delhi</h3>
                                    <p style={{ marginRight: '0px', marginBottom: '10px', marginLeft: '0px', lineHeight: '24px', textAlign: 'justify' }}>
                                        <font color="#363636" face="Poppins, sans-serif"><span style={{fontSize: '15px'}}>We are proud <b>City Bicycle Suppliers In Delhi</b>, who put a lot of care into ensuring each bike is super strong and works great. We use excellent materials to make them last long and ride smoothly. We also check each cycle carefully to make sure it's good.&nbsp;</span></font>
                                        <font color="#363636" face="Poppins, sans-serif" style={{fontSize: '0.875rem'}}><span style={{fontSize: '15px'}}>Being one of the top <b>City Bicycle Wholesale Suppliers in Delhi</b>, our team is well-equipped to handle bulk orders. Whether it's a corporate initiative to promote cycling among employees or a requirement from a large retail chain, our company provides tailor-made solutions to meet the demand.&nbsp;</span></font>
                                        <span style={{ color: 'rgb(54, 54, 54)', fontFamily: 'Poppins, sans-serif', fontSize: '15px' }}>&nbsp;</span></p>
                                        <h3 style={{ fontFamily: 'Poppins, sans-serif', color: 'rgb(51, 51, 51)', marginTop: '10px', marginBottom: '5px', fontSize: '20px', fontWeight: '600', overflow: 'hidden', padding: '0', lineHeight: '30px' }}>City Bicycle Dealers In Delhi</h3>
                                        <p style={{ marginRight: '0px', marginBottom: '10px', marginLeft: '0px', lineHeight: '24px', textAlign: 'justify' }}
>
                                            <font color="#363636" face="Poppins, sans-serif">
                                                <span style={{fontSize: '15px'}}>We are special <b>City Bicycle Dealers In Delhi</b> because the people who work with us aren't just regular salespeople; they love bicycles and know a lot about them.&nbsp;</span></font>
                                                <span style={{fontSize: '15px', fontFamily: 'Poppins, sans-serif'}}>Because our employees already know so much about cycles, they can help you choose the exact right cycle for you. They will ask about what you like to do and how you want to use the bike so they can find the cycle that is just perfect for you.</span></p>                                    <div class="product-single">
                                        <table class="table table-striped" width="50%">
                                                                                                                                    
                                                                                                                                                                                                                                                                    </table>
                                        
                                    </div>
                                    <div class="categoryCTA">
                                        <div class="categoryCTA">
                                        <a class="ctaButtonPop popupEnqBtn" data-toggle="modal" data-target="#myModal" onclick="document.getElementById('course_name').value='City Bicycle';" title="Get A Quote">
                                            Yes, I am Interested
                                        </a>
                                    </div>
                                    </div>

                                    <div class="clearfix"></div>



                                    <div id="prodListingContainer">
                                                                               <div class="product_listing listpager">
                                            <div class="row">
                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12">
                                                    <div class="product">
                                                        <a href="/Bicycles/Ranger-Cycle" title="Ranger Bicycle Manufacturers">
                                                            <div class="image1" data-imgsrc="">
                                                                <img src="https://firecatcher.in/admin/uploads/category/subcategory-23-09-2023-1695465994-Bicycle Suppliers In Delhi (16).webp" title="Ranger Bicycle Manufacturers in Delhi" alt="Ranger Bicycle Manufacturers in Delhi" class="img-responsive product-img" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 col-12">
                                                    <div class="right-content">
                                                        <h4 class="title_h3"><a href="/Bicycles/Ranger-Cycle" title="Ranger Bicycle Manufacturers">Ranger Bicycle</a></h4>

                                                        <div class="blue-line1"></div>

                                                        <div class="product-show-desc1">
                                                            We are famous Ranger Bicycle Manufacturers In Delhi because our team makes cycles extra strong, looks really cool, and pays close attention to even the tiniest things. We make all kinds of cycles for different types of riding, like on the road, in the mountains, in the city, and just for fun. Every bike we make is carefully created using fancy materials and the newest technology. This ensures the bikes work well and last a long time.                                                        </div>

                                                        <a href="https://firecatcher.in/product/ranger-bicycle" class="read_more_product" title="Read More">Read More <i class="fa fa-long-arrow-right fa-1x"></i></a>

                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                                                <div class="product_listing listpager">
                                            <div class="row">
                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12">
                                                    <div class="product">
                                                        <a href="https://firecatcher.in/product/mountain-bicycle" title="Mountain Bicycle Manufacturers">
                                                            <div class="image1" data-imgsrc="">
                                                                <img src="https://firecatcher.in/admin/uploads/category/subcategory-23-09-2023-1695465758-Bicycle Suppliers In Delhi (10).webp" title="Mountain Bicycle Manufacturers in Delhi" alt="Mountain Bicycle Manufacturers in Delhi" class="img-responsive product-img" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 col-12">
                                                    <div class="right-content">
                                                        <h4 class="title_h3"><a href="https://firecatcher.in/product/mountain-bicycle" title="Mountain Bicycle Manufacturers">Mountain Bicycle</a></h4>

                                                        <div class="blue-line1"></div>

                                                        <div class="product-show-desc1">
                                                            As prominent Mountain Bicycle Manufacturers In Delhi, our team is super careful and tests each bicycle a lot to make sure it's awesome. We even look at every little part of the bicycle,
                                                            like the tiny screws and the special gears, very closely. We do all this to be sure the bicycles are as great as we want them to be. This dedication to make bicycles really good isn't only about selling. It's about making bicycles so awesome that it's even better than what you hoped for.                                                        </div>

                                                        <a href="https://firecatcher.in/product/mountain-bicycle" class="read_more_product" title="Read More">Read More <i class="fa fa-long-arrow-right fa-1x"></i></a>

                                                        <a class="read_more_product " data-toggle="modal" data-target="#myModal" onclick="document.getElementById('course_name').value='Mountain Bicycle';" title="Get A Quote">
                                                            Get A Quote
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                                                           
                                                                         
                                                                               
                                        <div class="product_listing listpager">
                                            <div class="row">
                                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12 col-12">
                                                    <div class="product">
                                                        <a href="https://firecatcher.in/product/racing-bicycle" title="Racing Bicycle Manufacturers">
                                                            <div class="image1" data-imgsrc="">
                                                                <img src="https://firecatcher.in/admin/uploads/category/subcategory-23-09-2023-1695465632-Bicycle Suppliers In Delhi (16).webp" title="Racing Bicycle Manufacturers in Delhi" alt="Racing Bicycle Manufacturers in Delhi" class="img-responsive product-img" />
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>

                                                <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-xs-12 col-12">
                                                    <div class="right-content">
                                                        <h4 class="title_h3"><a href="https://firecatcher.in/product/racing-bicycle" title="Racing Bicycle Manufacturers">Racing Bicycle</a></h4>

                                                        <div class="blue-line1"></div>

                                                        <div class="product-show-desc1">
                                                            As reliable Racing Bicycle Manufacturers In Delhi, our company likes coming up with new ideas and using smart ways to make cycles. We have intelligent employees who work together with cycling pros and excellent riders to make cycles that are fast, not too heavy, and very strong. We make racing bicycles using advanced stuff like super strong carbon fiber for their frames. Because we use cool materials, our bicycles can go super-fast, react quickly, and be easily controlled.                                                        </div>

                                                        <a href="https://firecatcher.in/product/racing-bicycle" class="read_more_product" title="Read More">Read More <i class="fa fa-long-arrow-right fa-1x"></i></a>

                                                        
                                                    </div>
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
                                                <a href="/bicycles/Ranger-Bicycle" title="Ranger Bicycle">Ranger Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a href="/bicycles/Mountain-Bicycle" title="Mountain Bicycle">Mountain Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                 
                                             <li class="cs_subm">
                                                <a href="/bicycles/Folding-Bicycle">Folding Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        
                                                                                        <li class="cs_subm">
                                                <a href="/bicycles/Racing-Bicycle" title="Racing Bicycle">Racing Bicycle 
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
                                                <a  title="Steel Ball">Steel Ball 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Mild Steel Ball">Mild Steel Ball 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Chrome Steel Ball">Chrome Steel Ball 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a title="Bicycle Air Pump">Bicycle Air Pump 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle Gear Parts">Bicycle Gear Parts 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle Alloy Rim">Bicycle Alloy Rim 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a title="Bicycle Gel Cover">Bicycle Gel Cover 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle Disc Brake Machine">Bicycle Disc Brake Machine 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle Meg Wheel">Bicycle Meg Wheel 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle Lock">Bicycle Lock 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle Spokes">Bicycle Spokes 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle Bells">Bicycle Bells 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                                                                        <li class="cs_subm">
                                                <a  title="Bicycle light">Bicycle light 
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
                                <form name="contact-form" id="Send-inquiry-Form2" method="POST" class="quick_form" onSubmit={handleSubmit} noValidate="">
                                    <div class="form-group">
                                        <input class="form-control" type="hidden" name="product" value="City-Bicycle" />
                                        <input tabindex="101" class="form-control" onChange={handleInputChange} type="text" name="name" value={formData.pname} id="name" placeholder="Your Name*"  pattern="[a-z A-Z]+" required="" />
                                    </div>

                                    <div class="form-group">
                                        <input tabindex="102" class="form-control" onChange={handleInputChange} type="email" name="email" id="email" value={formData.email} placeholder="Your Email ID*" required="" />
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



            <Clients />

            <Footer />
        </div>

    );
}

export default Citybicycle