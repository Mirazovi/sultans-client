import {useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// rating 
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SubTitle from "../../Shared/SubTitle";
import axios from "axios";

const Testimonials = () => {
    const [review, setReview] = useState([])
    axios.get('http://localhost:5000/reviews')
    .then(res =>{
        setReview(res.data)
    })
    return (
        <div className="my-10">

            <SubTitle subheading={'---What Our Clients Say---'} heading={'TESTIMONIALS'}></SubTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    review.map((item, idx) => <SwiperSlide key={idx}>
                        <div className=" text-center space-y-2 m-24">
                            <div className="flex justify-center text-7xl">
                                <IconParkOutlineMailReview/>
                            </div>
                            <div className="flex justify-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={item.rating}
                                readOnly
                            />
                            </div>
                            <p>{item.details}</p>
                            <h1 className="text-2xl text-orange-700">{item.name}</h1>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export function IconParkOutlineMailReview(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48" {...props}><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path d="M44 24v16.818C44 42.023 43.105 43 42 43H6c-1.105 0-2-.977-2-2.182V24l20 13z"></path><path strokeLinecap="round" d="m4 23.784l10-6.892m30 6.892l-10-6.892"></path><path d="M34 5H14v24.415a2 2 0 0 0 .91 1.677l8 5.2a2 2 0 0 0 2.18 0l8-5.2a2 2 0 0 0 .91-1.677z"></path><path strokeLinecap="round" d="M20 13h4m-4 6h8"></path></g></svg>
    )
  }
export default Testimonials;