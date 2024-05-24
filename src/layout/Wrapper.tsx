"use client"


import { useEffect } from "react";
import ScrollTop from "../compoments/common/ScrollTop";
import { animationCreate } from "../utils/utils";

if (typeof window !== "undefined") {
	require("bootstrap/dist/js/bootstrap");
}

const Wrapper = ({ children }: any) => {
	useEffect(() => {
		// animation
		const timer = setTimeout(() => {
			animationCreate();
		}, 100);

		return () => clearTimeout(timer);
	}, []);
	return (
		<>
			{children}
			<ScrollTop />
		</>
	);
};

export default Wrapper;