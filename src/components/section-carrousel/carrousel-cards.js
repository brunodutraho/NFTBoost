'use client'
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import { CardNFT } from "../card-nft";
import Arrow from '@/assets/arrow-slide.svg'


import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);



export function CarrouselCards({ data }) {
    const swiperRef = useRef()

    const areaSlideRef = useRef(null)

    useEffect(() => {
        const areaSlide = areaSlideRef.current;

        gsap.fromTo(areaSlide, {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            ease: 'power3.out',
            duration: 2,
            scrollTrigger: {
                trigger: areaSlide,
                start: 'top-=400 center-=300',

            }
        })
    }, [])

    return (
        <div ref={areaSlideRef} className='relative w-full'>
            <button className='absolute top-arrow-slide -left-8 z-10 rotate-180 w-12 h-12 bg-blue-primary rounded-full hidden @desktop:flex items-center justify-center hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5'

                onClick={() => {
                    swiperRef.current?.slidePrev()
                }}
            >

                <Image
                    src={Arrow}
                    alt='Arrow Previous'
                />
            </button>
            <Swiper
                slidesPerView={4}
                spaceBetween={33}
                speed={800}
                loop={true}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                breakpoints={{
                    270: {
                        slidesPerView: 1.3,
                        spaceBetween: 20,
                    },
                    320: {
                        slidesPerView: 1.4,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 2.5,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                    1100: {
                        slidesPerView: 3.5,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 33,
                    },
                }}
                className="!px-3"

            >
                {
                    data.map(({ name, thumbnail, value, value_brl }, index) => (
                        <SwiperSlide key={index}>
                            <CardNFT
                                name={name}
                                thumbnail={thumbnail}
                                value={value}
                                value_brl={value_brl}
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>

            <button className='absolute top-arrow-slide -right-8 z-10 w-12 h-12 bg-blue-primary rounded-full hidden @desktop:flex items-center justify-center hover:bg-gray-hover-btn-slide transition-all ease-linear border border-white border-opacity-5'

                onClick={() => {
                    swiperRef.current?.slideNext()
                }}
            >
                <Image
                    src={Arrow}
                    alt='Arrow Previous'
                />
            </button>

        </div>
    )
}