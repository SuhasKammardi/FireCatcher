import React from "react";
import "./Theme2.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Safety(){

    return(
        <section class="footer-top" style={{background: '#cc0e10'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 hidden-sm hidden-xs pull-left img-box">
                            <img class="wow fadeInLeft" data-wow-delay=".2s" src="https://firecatcher.in/admin/uploads/section/banner-23-09-2023-1695466980-Untitled__364___218_px_-removebg-preview.webp" alt="Footer Image" title="Footer Image" />
                        </div>
                        <div class="col-md-8 right-text pull-right">
                            <div class="box">
                                <div class="text-box wow fadeInRight text-center" data-wow-delay=".4s">
                                    <h5 class="top_footer_title">Complete safety &amp; analysis</h5>
                                    <h5 class="top_footer_title">OR</h5>
                                    <p>
                                       <a href="/contact">Contact Now <i class="fa fa-angle-right"></i></a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

    );
}

export default Safety