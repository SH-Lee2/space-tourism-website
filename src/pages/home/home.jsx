import React from "react";

const Home = () => {
	return (
		<section
			id="home"
			className=" h-screen object-cover bg-cover bg-no-repeat bg-center bg-home-m sm:bg-home-t lg:bg-home-d"
		>
			<div className="relative flex flex-col items-center justify-center h-full space-y-16 lg:flex-row lg:justify-between lg:items-center md:space-y-24 lg:space-y-40  md:pt-12 lg:px-40">
				<div className="flex flex-col justify-center text-center max-w-md  px-6 mt-[100px]  lg:pt-28 md:max-w-lg md:px-0 lg:self-end lg:pb-[8%]">
					<p className="text-base text-quartz tracking-wide md:text-xl lg:text-left lg:text-3xl">SO, YOU WANT TO TRAVEL TO</p>
					<h1 className="text-[80px] text-white mb-4 tracking-widest lg:text-[150px]">SPACE</h1>
					<p className="text-sm text-quartz mb-6 md:text-base md:px-2 lg:text-left lg:text-lg ">
						Let’s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</p>
				</div>
				<div className="lg:self-end lg:pb-[8%]">
					<button className="explore  bg-white w-[150px] h-[150px] rounded-full text-blackRussian text-xl lg:w-[242px] lg:h-[242px] lg:text-4xl">EXPLORE</button>
				</div>
			</div>
		</section>
	);
};

export default Home;
