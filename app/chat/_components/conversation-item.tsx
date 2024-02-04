"use client";
import { cn } from "@/lib/utils";
import { GlobalStateContext } from "@/state/global.state";
import Image from "next/image";
import React, { useContext } from "react";

export default function ConversationItem({ children, id }: any) {
	const {
		globalDispatch,
		globalRuntimeState: { currentConversation },
	} = useContext(GlobalStateContext);
	return (
		<div
			className={cn(
				"flex justify-between items-center p-2 h-14 w-full rounded-[6px] bg-pallete-platinum",
				id === currentConversation && "bg-pallete-electric-indigo",
			)}
			id={id}
			onClick={() => globalDispatch({ type: "select_conversation", id })}
		>
			<p className='text-base'>{children}</p>
			<button className='outline-none'>
				<Image src='/delete.svg' width={24} height={24} alt='delete button' />
			</button>
		</div>
	);
}
