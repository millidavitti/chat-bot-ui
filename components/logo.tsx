import Image from "next/image";
import React from "react";

export default function Logo() {
	return (
		<div className='w-fit h-fit rounded'>
			<Image src='/logo.svg' width={54} height={55} alt='chatbot logo' />
		</div>
	);
}
