import React from 'react';
import PageTemplate from '../../component/Template/PageTemplate';

import './styles/contact.scss';
import ReactWOW  from 'react-wow';

function ContactPage(){
    return (
        <PageTemplate>
            <section className="contact-page">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 order-1 order-md-2 contact-image">
                        <ReactWOW animation="bounceInTop">
                                <img className="contact-image-mobile img-responsive" alt="illustration Contact" src="images/contact-illustration-m.png"/>
                        </ReactWOW>
                        <ReactWOW animation="bounceInRight">
                            <img className="wow bounceInRight contact-image-desktop img-responsive" alt="illustration Contact" src="images/contact-illustration.png"/>
                        </ReactWOW>
                        </div>
                        <div className="col-md-6 form-side order-2 order-md-1">
                            <h2 className="contact-title">Contact Us</h2>
                            <h1 className="contact-tagline">Kami Senang<br/>Berkomunikasi<br/>Dengan Anda</h1>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nama">Nama</label>
                                    <input type="text" className="form-control" id="nama" name="nama" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="pesan">Pesan</label>
                                    <textarea className="form-control" id="pesan" name="pesan" rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-kirim">Kirim</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </PageTemplate>
    )
}

export default ContactPage;