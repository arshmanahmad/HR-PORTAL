import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import visaCardLogo from '../../assets/images/all-img/visa-card-bg.png'
// @ts-ignore
import { EffectCards } from 'swiper';

const cardLists = [
  {
    bg: "from-[#1EABEC] to-primary-500",
    cardNo: "****  ****  **** 3945",
  },
  {
    bg: "from-[#4C33F7] to-[#801FE0]",
    cardNo: "****  ****  **** 3945",
  },
  {
    bg: "from-[#FF9838] to-[#008773]",
    cardNo: "****  ****  **** 3945",
  },
];

const CardSlider: React.FC = () => {
  return (
    <div className="relative">
      <Swiper
        effect="cards"
        grabCursor={true}
        // modules={[EffectCards]}
        className="mySwiper"
      >
        {cardLists.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`${item.bg} h-[200px] bg-gradient-to-r relative rounded-md z-[1] p-4 text-white`}
            >
              <div className="overlay absolute left-0 top-0 h-full w-full -z-[1]">
                <img
                  src={visaCardLogo}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
              <img src="/assets/images/logo/visa.svg" alt="" />
              <div className="mt-[18px] font-semibold text-lg mb-[17px]">
                {item.cardNo}
              </div>
              <div className="text-xs text-opacity-75 mb-[2px]">Card balance</div>
              <div className="text-2xl font-semibold">$10,975</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardSlider;
