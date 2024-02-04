import Logo from "@/components/logo";
import React, { ReactNode } from "react";

export default function ChatLayout({ children }: { children: ReactNode }) {
	return (
		<div className='h-full flex flex-col'>
			<header className='px-4 h-20 flex justify-between items-center shadow'>
				<Logo />
				<button className='w-[98px] h-9 rounded text-white bg-pallete-electric-indigo'>
					Log Out
				</button>
			</header>
			{children}
		</div>
	);
}
