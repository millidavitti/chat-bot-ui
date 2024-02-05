"use client";
import Logo from "@/components/logo";
import withAuthentication from "@/hoc/withAuthentication";
import { LocalStorageManager } from "@/state/localStorageManager";
import { useRouter } from "next/navigation";

import React, { ReactNode } from "react";

function ChatLayout({ children }: { children: ReactNode }) {
	const router = useRouter();
	return (
		<div className='h-full flex flex-col'>
			<header className='px-4 h-20 flex justify-between items-center shadow'>
				<Logo />

				<button
					onClick={() => {
						new LocalStorageManager("chat_session").deleteState();
						router.replace("/");
					}}
					className='w-[98px] h-9 rounded text-white bg-pallete-electric-indigo active:scale-95 transition'
				>
					Log Out
				</button>
			</header>
			{children}
		</div>
	);
}

export default withAuthentication(ChatLayout);
