import { Component } from "react";
import '../CSS/style.css';
import '../styles/contact_styles.css'
import '../styles/contact_responsive.css'
import '../plugins/font-awesome-4.7.0/css/font-awesome.min.css'

class Hire extends Component {
    render() {
        return (
            <div class="contact_form_section">
            <div class="container">
                <div class="row">
                    <div class="col">
    
                             <div class="contact_form_container">
                            <div class="contact_title text-center">Sending Request To Artist</div>
                            <form action="#" id="contact_form" class="contact_form text-center">
                                <input type="text" id="contact_form_name" class="contact_form_name input_field" placeholder="Name" required="required" data-error="Name is required."/>
                                <input type="text" id="contact_form_email" class="contact_form_email input_field" placeholder="E-mail" required="required" data-error="Email is required."/>
                                <input type="text" id="contact_form_subject" class="contact_form_subject input_field" placeholder="Subject" required="required" data-error="Subject is required."/>
                                <textarea id="contact_form_message" class="text_field contact_form_message" name="message" rows="4" placeholder="Message" required="required" data-error="Please, write us a message."></textarea>
                                <button type="submit" id="form_submit_button" class="form_submit_button button trans_200">Send Request<span></span><span></span><span></span></button>
                            </form>
                        </div>
    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Hire