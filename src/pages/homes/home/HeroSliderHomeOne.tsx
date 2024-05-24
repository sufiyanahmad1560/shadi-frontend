'use client'
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import VideoPopup from '../../../modals/VideoPopup';
import { HOSPITAL } from '../../../utils/constant';

const setting = {
	autoplay: false,
	autoplaySpeed: 10000,
	dots: false,
	fade: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				arrows: false
			}
		}
	]
}
interface SliderDataType {
	id: number;
	bg_img: string;
	sub_title: string;
	title: string;
	sm_info: string;
}
const hero_slider_data: SliderDataType[] = [
	{
		id: 1,
		bg_img: "slider_bg_1",
		sub_title: "Matrimonial Search.",
		title: "Best Matching Couples.",
		sm_info: "We believe in the power of natural healing through homeopathy. Our dedicated team of experienced homeopathic practitioners is committed to providing personalized and effective healthcare that goes beyond just treating symptoms.",
	},
	{
		id: 2,
		bg_img: "slider_bg_2",
		sub_title: "We are here for your care.",
		title: "Best Care & Better Doctor.",
		sm_info: "Discover the healing power of homeopathy at " + HOSPITAL.NAME + ". Schedule a consultation with our experts and take the first step towards a healthier, balanced life.",
	},
]

const HeroSliderHomeOne = () => {
	const sliderRef = useRef<Slider | null>(null);
	const [isVideoOpen, setIsVideoOpen] = useState(false);

	const handlePrev = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};
	const handleNext = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	}

	return (
		<>
			<section className="hero-area">
				<div className="hero-slider">
					<div className="slider-active slick-initialized slick-slider">
						<button type="button" className="d-none d-md-block slick-prev slick-arrow" onClick={handlePrev}>
							<i className="fas fa-arrow-left"></i>
						</button>
						<button type="button" className="d-none d-md-block slick-next slick-arrow" onClick={handleNext}>
							<i className="fas fa-arrow-right"></i>
						</button>

						<button type="button" className="d-block d-md-none slick-prev slick-arrow" onClick={handlePrev}>
							<i className="fas fa-chevron-left"></i>
						</button>
						<button type="button" className="d-block d-md-none slick-next slick-arrow" onClick={handleNext}>
							<i className="fas fa-chevron-right"></i>
						</button>

						<Slider {...setting} ref={sliderRef} >
							{hero_slider_data.map((item, i) =>
								<div key={i} style={{ width: "100vw", position: "relative" }} className={`single-slider slider-height d-flex align-items-center ${item.bg_img}`}>
									<div className='glossy'></div>
									<div className="container">
										<div className="row">
											<div className="col-xl-6 col-lg-8 col-md-10">
												<div className="hero-text">
													<div className="hero-slider-caption d-none d-sm-block">
														<h5 data-animation="fadeInUp" data-delay=".2s" style={{ color: "white" }} >{item.sub_title}</h5>
														<h1 data-animation="fadeInUp" data-delay=".4s" style={{ color: "white" }}>{item.title}</h1>
														<p data-animation="fadeInUp" data-delay=".6s" style={{ color: "white" }}>{item.sm_info}</p>
													</div>
													<div className="hero-slider-btn">
														<Link data-animation="fadeInLeft"
															data-delay=".6s" to="/register" className="btn btn-icon ml-0"><span>+</span>Register</Link>
														<Link data-animation="fadeInRight"
															data-delay="1.0s"
															to={""}
															onClick={() => setIsVideoOpen(true)}
															style={{ cursor: "pointer" }}
															className="play-btn popup-video"><i className="fas fa-play"></i></Link>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</Slider>
					</div>
				</div>
			</section>
			{/* video modal start */}
			<VideoPopup
				isVideoOpen={isVideoOpen}
				setIsVideoOpen={setIsVideoOpen}
				videoId={'UBdUpt6oTOE'}
			/>
			{/* video modal end */}

		</>
	);
};

export default HeroSliderHomeOne;