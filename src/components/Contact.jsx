const Contact = () => {
    return(
      <section id='contact' className='content-section' >
        <div className="contact-form_container">

            <div className="email-container" id="email-container">

                <div className="email-box">
                    <header className="email-header">
                    <h1>New Message</h1>
                    </header>
                    <div className="email-content">
                        <form action="https://formsubmit.co/arshaaqj@gmail.com" method="POST" className="contact-form_input">
                                
                                <span className="input-container">
                                    <div className="input-subject">
                                        <h1>subject:</h1>
                                        <input className="form input" type="text" id="subject" name="subject" placeholder="" required/>
                                    </div>
                                    
                                    <div className="input-email">
                                        <h1>email:</h1>
                                        <input className="form input" type="email"  id="email" name="email" placeholder="" required/>
                                    </div>
                                </span>
                                <textarea className="form text" name="message" id="textarea" placeholder="Please include name and/or company!" required></textarea>

                                <button type="submit" className="send-button">send</button>


                                <input type="hidden" name="_subject" value="New submission!"></input>
                                <input type="hidden" name="_captcha" value="true"></input>


                        </form>
                    </div>
                </div>


            </div>
        </div>
      </section>
    );
  };
  
  export default Contact;