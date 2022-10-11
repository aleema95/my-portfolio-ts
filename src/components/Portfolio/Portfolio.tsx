import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import s from './Portfolio.module.scss'
import JobHub from '../../assets/images/JobHub.png'
import gameFlow from '../../assets/images/gameFlow.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PortfolioProps } from '../../types/types'
import { Carousel } from 'react-responsive-carousel';
import { useHover } from '../../hooks/hooks'

export default function Portfolio(props: PortfolioProps) {
  const { carouselSection } = props;
  const [t, i18n] = useTranslation<string>("global")
  const [hoverRef, isHovered] = useHover<HTMLParagraphElement>()

  useEffect(() => {
    console.log(isHovered);
    
  }, [isHovered])
  return (
    // <animated.div style={fadeIn}>
    //   <h1 className={s.Title}>Portfolio</h1>  
    // </animated.div>
      <div ref={carouselSection} className={s.mainContainer}>
        <h1 className={s.title}>{t('carousel.title')}</h1>
        <div className={s.carouselContainer}>
          <Carousel 
            emulateTouch={true} 
            infiniteLoop={true}
            >
            <div>
                <img src={JobHub} />
              <a href="https://jobhub.vercel.app/">
                <p className="legend">JobHub</p>
              </a>
            </div>
            <div>
              {isHovered ? 
                <div className={s.blur}>
                  <h1 className={s.onBlurText}>Not deployed yet!</h1>
                </div> 
                : null}
                <img src={gameFlow} />
                <p ref={hoverRef} className="legend">GameFlow</p>
            </div>
          </Carousel>
        </div>
      </div>
  )
}
