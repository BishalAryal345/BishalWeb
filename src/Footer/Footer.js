import{Component} from "react";
import '../styles/responsive.css';
import '../styles/main_styles.css';
import '../plugins/OwlCarousel2-2.2.1/owl.carousel.css';
import '../plugins/OwlCarousel2-2.2.1/animate.css';
import '../plugins/OwlCarousel2-2.2.1/owl.theme.default.css';

class Footer extends Component{
    render(){
        return(          

            <footer class="footer">
            <div class="container">
                <div class="row">  
                   
                    <div class="col-lg-3 footer_column">
                        <div class="footer_col">
                            <div class="footer_content footer_about">
                                <div class="logo_container footer_logo">
                                    <div class="logo"><a href="#"><img src="Images/logo.png" alt=""/>ArtistChaiyo</a></div>
                                </div>
                                <p class="footer_about_text">The Best Artist You Wanted are here. Lets Browse your Artist</p>
                                <ul class="footer_social_list">
                                    <li class="footer_social_item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
                                    <li class="footer_social_item"><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                                    <li class="footer_social_item"><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li class="footer_social_item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li class="footer_social_item"><a href="#"><i class="fa fa-behance"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                  
                    <div class="col-lg-3 footer_column">
                        <div class="footer_col">
                            <div class="footer_title">blog posts</div>
                            <div class="footer_content footer_blog">
                                
                               
                                <div class="footer_blog_item clearfix">
                                    <div class="footer_blog_image"></div>
                                    <div class="footer_blog_content">
                                        <div class="footer_blog_title"><a href="blog.html">Your Hire</a></div>
                                        <div class="footer_blog_date">Nov 29, 2017</div>
                                    </div>
                                </div>
                                
                             
                                <div class="footer_blog_item clearfix">
                                    <div class="footer_blog_image"></div>
                                    <div class="footer_blog_content">
                                        <div class="footer_blog_title"><a href="blog.html">New Artist for you</a></div>
                                        <div class="footer_blog_date">Nov 29, 2017</div>
                                    </div>
                                </div>
    
             
                                <div class="footer_blog_item clearfix">
                                    <div class="footer_blog_image"></div>
                                    <div class="footer_blog_content">
                                        <div class="footer_blog_title"><a href="blog.html">JAM UP with us this year</a></div>
                                        <div class="footer_blog_date">Nov 29, 2017</div>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                    </div>
    
                    
                    <div class="col-lg-3 footer_column">
                        <div class="footer_col">
                            <div class="footer_title">tags</div>
                            <div class="footer_content footer_tags">
                                <ul class="tags_list clearfix">
                                    <li class="tag_item"><a href="#">Tabalist</a></li>
                                    <li class="tag_item"><a href="#">Flutist</a></li>
                                    <li class="tag_item"><a href="#">Singer</a></li>
                                    <li class="tag_item"><a href="#">Vocalist</a></li>
                                    <li class="tag_item"><a href="#">Gutarist</a></li>
                                    <li class="tag_item"><a href="#">Drummer</a></li>
                                    <li class="tag_item"><a href="#">Piano Master</a></li>
                                    <li class="tag_item"><a href="#">Music Aranger</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                   
                    <div class="col-lg-3 footer_column">
                        <div class="footer_col">
                            <div class="footer_title">contact info</div>
                            <div class="footer_content footer_contact">
                                <ul class="contact_info_list">
                                    <li class="contact_info_item d-flex flex-row">
                                        <div><div class="contact_info_icon"><img src="./Images/footer_blog_1.jpg" alt=""/></div></div>
                                        <div class="contact_info_text">Tarakeshwor -03 Kathmandu Nepal</div>
                                    </li>
                                    <li class="contact_info_item d-flex flex-row">
                                        <div><div class="contact_info_icon"><img src="Images/singer.jpg" alt=""/></div></div>
                                        <div class="contact_info_text">9863346414</div>
                                    </li>
                                    <li class="contact_info_item d-flex flex-row">
                                        <div><div class="contact_info_icon"><img src="Images/singer.jpg" alt=""/></div></div>
                                        <div class="contact_info_text"><a href="mailto:Siraj@siraj.com?Subject=Hello" target="_top">Siraj@siraj.com</a></div>
                                    </li>
                                    <li class="contact_info_item d-flex flex-row">
                                        <div><div class="contact_info_icon"><img src="Images/singer.jpg" alt=""/></div></div>
                                        <div class="contact_info_text"><a href="Artistchiyo.com">www.Artistchiyo.com</a></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>      
    
        <div class="copyright">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 order-lg-1 order-2  ">
                        <div class="copyright_content d-flex flex-row align-items-center">
                            <div>
    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |  <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="/" target="_blank">www.Artistchaiyo.com</a>
    </div>
                        </div>
                    </div>
                    <div class="col-lg-9 order-lg-2 order-1">
                        <div class="footer_nav_container d-flex flex-row align-items-center justify-content-lg-end">
                            <div class="footer_nav">
                                <ul class="footer_nav_list">
                                    <li class="footer_nav_item"><a href="index.html">home</a></li>
                                    <li class="footer_nav_item"><a href="#">about us</a></li>
                                    <li class="footer_nav_item"><a href="offers.html">offers</a></li>
                                    <li class="footer_nav_item"><a href="blog.html">news</a></li>
                                    <li class="footer_nav_item"><a href="contact.html">contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        </footer>
   
          
          
          
        )
    }
}
export default Footer