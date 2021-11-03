import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

import './footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Descubre junto a nosotros un amanecer diferente.
                </p>
                <p className='footer-subscription-text'>
                    Puedes quitar tu subscripción en cualquier momento.
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                        className='footer-input'
                        name='email'
                        type='email'
                        placeholder='Tu Email'
                        />
                        <Button buttonStyle='btn--outline'>Crear Subscripción</Button>
                    </form>
                </div>
            </section>
            <div className='footer-links'>
                <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Sobre Nosotros</h2>
                    <Link to='/sign-up'>Cómo trabajamos</Link>
                    <Link to='/'>Testimonios</Link>
                    <Link to='/'>Carreras</Link>
                    <Link to='/'>Inversiones</Link>
                    <Link to='/'>Términos del Servicio</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contactáctanos</h2>
                    <Link to='/'>Contacto</Link>
                    <Link to='/'>Soporte</Link>
                    <Link to='/'>Destinos</Link>
                    <Link to='/'>Patrocinadores</Link>
                </div>
                </div>
                <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Redes Sociales</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                        FINCAR
                        <i className='fab fa-typo3' />
                        </Link>
                    </div>
                    <small className='website-rights'>FINCAR © 2020</small>
                    <div className='social-icons'>
                        <Link
                            className='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link
                            className='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link
                            className='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link
                            className='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;
