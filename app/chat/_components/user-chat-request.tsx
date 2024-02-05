import Image from "next/image";
import React, { ReactNode } from "react";

export default function UserChatRequest({ children }: { children: ReactNode }) {
	return (
		<div className='flex items-center flex-shrink-0 gap-x-3 self-end px-4'>
			<p className='px-4 py-2 max-w-[280px] rounded-[18px] bg-pallete-electric-indigo text-base text-white text-wrap'>
				{children}
			</p>
			<Image
				src='/user.png'
				width={43}
				height={43}
				alt='profile picture'
				className='rounded-full object-contain self-end'
			/>
		</div>
	);
}
