import { useTranslation } from 'react-i18next'
import s from './Portfolio.module.scss'
import JobHub from '../../assets/images/JobHub.png'
import gameFlow from '../../assets/images/gameFlow.png'
import msForm from '../../assets/images/multistep-form.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { PortfolioProps } from '../../types/types'
import { Carousel } from 'react-responsive-carousel';
import { useHover } from '../../hooks/hooks'
import { motion } from 'framer-motion';

export default function Portfolio(props: PortfolioProps) {
  const { carouselSection } = props;
  const [t, i18n] = useTranslation<string>("global")
  const [hoverRef, isHovered] = useHover<HTMLParagraphElement>()

  return (
      <motion.div
         ref={carouselSection} 
         className={s.mainContainer}
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{duration: 0.8, delay: 1}}
         >
        <h1 className={s.title}>{t('carousel.title')}</h1>
        <div className={s.carouselContainer}>
          <Carousel 
            emulateTouch={true} 
            infiniteLoop={true}
            >
              <div className={s.test}>
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
              <div className={s.test}>
                  <img src={msForm} />
                <a href="https://multistep-form-ts.vercel.app/">
                  <p className="legend">Multistep Form</p>
                </a>
              </div>
          </Carousel>
        </div>
      </motion.div>
  )
}
