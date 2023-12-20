import React, { Component } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { images } from '../utils/images';
import styled from 'styled-components';

const CarouselContainer = styled.section`
  max-width: var(--max-width);
  padding: 40px;
  margin: 0 auto;
  background-color: var(--yellow003);
  border-radius: var(--border-radius);
`;

const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  align-items: center;
`;

const TextSetting = styled.div`
  width: 45%;
  min-width: 300px;

  background-image: url(/banner-niveis-bg1.svg),url(/banner-niveis-bg2.svg);
  background-position: left,right;
  background-repeat: no-repeat;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;

`;



export default class SimpleSlider extends Component {
  state = {
    display: true,
    width: 600
  };
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <>
        <CarouselContainer>
          <Slider {...settings}>
            <div>
              <h3>Ensino Infantil</h3>

              <TextContainer>
                <Image
                  src={images.ensinoInfantil.src}
                  alt={images.ensinoInfantil.alt}
                  width={680}
                  height={438}
                />

                <TextSetting>
                  <h4>
                    Subtitulo
                  </h4>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </TextSetting>
              </TextContainer>
            </div>

            <div>
              <h3>Ensino Fundamental 1</h3>
              <TextContainer>
                <Image
                  src={images.ensinoFundamental.src}
                  alt={images.ensinoFundamental.alt}
                  width={680}
                  height={438}
                />

                <TextSetting>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </TextSetting>
              </TextContainer>
            </div>
          </Slider>
        </CarouselContainer>
      </>
    );
  }
}