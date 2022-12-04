import React from "react";
import me from "./image/me.png";
import github from "./image/github.png";
import "./style.scss";

const About = () => {
  return (
    <div className='about'>
      <div className='about-info'>
        <div className='about-info_me'>
          <h3>About me</h3>
          <div className='about-info_me_text'>
            <p className='about-info_me_name'>Camilo Pimentel</p>
            <p>Descripción</p>
            <p className='about-info_me_email'>cpimentel.0325@gmail.com</p>
            <div className='about-info_me_text_github'>
              <a
                href='https://github.com/cpimentel25'
                target='_blank'
                rel='noreferrer'
              >
                <img
                  className='about-info_me_text_github_icon'
                  alt='github'
                  src={github}
                />
              </a>
            </div>
          </div>
        </div>
        <div className='about-info_img'>
          <img className='about-info_img_me' alt='img-me' src={me} />
        </div>
      </div>
      <div className='about-smart'>
        <h3>Cosas que hayas aprendido en este programa:</h3>
        <div className='about-smart_list'>
          <p>1. Redux/useContext y ReduxToolkit.</p>
          <p>2. Base de Datos (Mongo).</p>
          <p>3. React router doom.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
