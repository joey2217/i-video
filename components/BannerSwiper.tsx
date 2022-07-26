import React, { memo } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper'
import { Banner } from '../types'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

interface Props {
  bannerData: Banner[]
}

const BannerSwiper: React.FC<Props> = ({ bannerData }) => {
  const router = useRouter()
  return (
    <Swiper
      navigation={true}
      autoplay
      loop
      pagination={{ clickable: true }}
      modules={[Pagination, Navigation, Autoplay]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {bannerData.map((v) => (
        <SwiperSlide
          key={v.id}
          className="cursor-pointer"
          onClick={() => router.push(`/v/${v.id}`)}
        >
          <BannerSlide {...v} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const BannerSlide: React.FC<Banner> = (banner) => (
  <div className="relative max-h-[600px]">
    <Image
      src={banner.banner}
      width={1920}
      height={670}
      layout="responsive"
      alt={banner.name}
    />
    <div className="absolute left-28 bottom-16 w-full text-white">
      <div className="text-2xl font-bold">{banner.name}</div>
      <div className="text-base">{banner.intro}</div>
    </div>
  </div>
)

export default memo(BannerSwiper)
