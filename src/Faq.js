import React, {useState, useEffect} from "react";
// import $ from 'jquery';
import "bootstrap/dist/css/bootstrap.min.css";
import './Theme2.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Dheader from "./Dheader";
import Footer from "./Footer";
import Clients from "./Clients";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Faq(){
    // useEffect(() => {
    //     $('.toggle').on('click', function () {
    //       // Toggle the icon class between 'fa-plus' and 'fa-minus'
    //       $(this).find('.icon').toggleClass('fa-plus fa-minus');
    
    //       // Toggle the color of the question
    //       $(this).toggleClass('question-active');
    
    //       // Toggle a class that controls the visibility of the content
    //       $(this).next('.content').toggleClass('content-visible');
    //     });
    
    //     // Cleanup the event handler when the component is unmounted
    //     return () => {
    //       $('.toggle').off('click');
    //     };
    //   }, []);

      
    

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
                            <h4 class="cat_title">Faq</h4>
                            <div class="clearfix"></div>
                            <div class="cat_title2">Singhi Cycle - Bicycle Manufacturers In Delhi</div>                        
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
                                <li class="active">FAQ</li>
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
                                <h1>Faq</h1>

                                <div className="wps_right">
                                        <div className="containerwidth">
                                            <div className="wrapper">
                                                <button className="toggle" style={{color: 'rgb(0, 132, 233)'}}>Who Are The Best Playschools Leather Manufacturers In Delhi?
                                                <i className="fa fa-plus icon"></i></button>
                                                <div className="content" style={{height: '60px'}}>
                                                    We at Maskeen Overseas in Delhi are one of the most reputed and dignified companies that offer a wide range of Leather  at the best affordable price range.                                                </div>
                                            </div>

                                            <div class="wrapper">
                                                <button className="toggle" style={{color: 'rgb(0, 132, 233)'}}>What Components Drive A Good Educational Toy Product In Delhi ?
                                                <i class="fa fa-plus icon"></i></button>
                                                <div class="content" style={{height: '60px'}}>
                                                    Maskeen Overseas in Delhi, one of the most trusted and reliable companies that manufactured robust quality and safety along with enjoyable kids products in Delhi. These aspects help to develop vital skills and knowledge in kids' growth.1                                                </div>
                                            </div>
                                                                                        <div class="wrapper">
                                                <button class="toggle" style={{color: 'rgb(0, 132, 233)'}}>What Toys Do Preschoolers Play With In Delhi?<i class="fa fa-plus icon"></i></button>
                                                <div class="content" style={{height: '60px'}}>
                                                    Whether it's a playschool or kindergarten in Delhi, kids usually play and are fascinated with playschool toys, playground slides, playground swings, kids rockers, multiplay station, and a few more.                                                </div>
                                            </div>
                                                                                        <div class="wrapper">
                                                <button class="toggle" style={{color: 'rgb(0, 132, 233)'}}>What Makes A Playschool Toy Attractive For Kids In Delhi?<i class="fa fa-plus icon"></i></button>
                                                <div class="content" style={{height: '60px'}}>
                                                    Contact Maskeen Overseas in Delhi as we are widely known for our attractive set of kids' toys and school furniture products. Additionally, our manufactured kid's products in Delhi are manufactured with the latest design and vibrant colors that are easy to pull, push, and build.                                                </div>
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
                                                <a href="/bicycles/City-Bicycle" title="City Bicycle">City Bicycle </a>    
                                                <ul class="cs_subdown"></ul>  
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
                                                <a href="/bicycles/Folding-Bicycle" title="Folding Bicycle">Folding Bicycle 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                            
                                            <li class="cs_subm">
                                                <a href="/bicycles/Racing-Bicycle" title="Racing Bicycle">Racing Bicycle  </a>
                                                <ul class="cs_subdown"></ul>  
                                            </li>
                                                                                    </ul>
                                                                            </li>
                                                                        <li class="cs_subm">
                                        <a title="Bicycle Parts">Bicycle Parts</a>
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
                                                <a title="Bicycle Gear Parts">Bicycle Gear Parts 
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
                                                <a  title="Bicycle Gel Cover">Bicycle Gel Cover 
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
                                                <a title="Bicycle Spokes">Bicycle Spokes 
                                                                                                </a>
                                                
                                                <ul class="cs_subdown">
                                                                                                    </ul>
                                                
                                            </li>
                                            <li class="cs_subm">
                                                <a  title="Bicycle Bells">Bicycle Bells </a>
                                                <ul class="cs_subdown"></ul>  
                                            </li>

                                            <li class="cs_subm">
                                                <a  title="Bicycle light">Bicycle light  </a> 
                                                <ul class="cs_subdown"> </ul>   
                                            </li>
                                         </ul>
                                    </li>
                                </ul>
                            </div>

                            <div id="sticky-anchor"></div>
                            <div class="left_sidebar" id="sidebar">
                                <div class="left_title">Quick Contact</div>
                                <div class="alert alert-warning EmessageBox1" style={{display: 'none'}}>
                                    <span class="Emessage1"></span>
                                </div>
                                <div class="alert alert-success SmessageBox1" style={{display: 'none'}}>
                                    <span class="Smessage1"></span>
                                </div>
                                <form name="contact-form" id="Send-inquiry-Form2" method="POST" class="quick_form" onSubmit={handleSubmit} noValidate="" >
                                    <div class="form-group">
                                        <input class="form-control" type="hidden" name="url" value="https://firecatcher.in/product/folding-bicycle" />
                                        <input tabindex="101" class="form-control" onChange={handleInputChange} type="text" name="name" id="name" placeholder="Your Name*" value={formData.name} pattern="[a-z A-Z]+" required="" />
                                    </div>

                                    <div class="form-group">
                                        <input tabindex="102" class="form-control" onChange={handleInputChange} type="email" name="email" id="email" placeholder="Your Email ID*" value={formData.email} required="" />
                                    </div>

                                    <div class="form-group">
                                        <input tabindex="103" class="form-control" onChange={handleInputChange} type="tel" name="mobile" value={formData.mobile} id="mobile" placeholder="Your Phone No*" maxlength="12" onkeyup="if (/\D/g.test(this.value))
                        this.value = this.value.replace(/\D/g, '')"  required="" />
                                    </div>
                                    <div class="form-group">
                                        <input tabindex="104" class="form-control locationLeft" onChange={handleInputChange} type="text" name="location" value={formData.location} placeholder="Your Location*"  autocomplete="off" required="" />
                                    </div>
                                    <div class="form-group">
                                        <textarea tabindex="105" class="form-control" onChange={handleInputChange} name="message" id="message" value={formData.message} placeholder="Your Message*" required=""></textarea>
                                    </div>
                                    
                                    <div class="form-group" style={{marginBottom: 0}}></div>

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

export default Faq