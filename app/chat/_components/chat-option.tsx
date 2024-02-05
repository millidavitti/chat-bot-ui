"use client";
import pipeline from "@/lib/pipeline";
import { cn } from "@/lib/utils";
import { GlobalStateContext } from "@/state/global.state";
import React, { ReactNode, useContext } from "react";

interface ChatOptionProp {
	children: ReactNode;
	id: string;
}
export default function ChatOption({ children, id }: ChatOptionProp) {
	const {
		globalRuntimeState: { chatOption },
		globalDispatch,
	} = useContext(GlobalStateContext);
	return (
		<button
			className={cn(
				"px-4 py-2 rounded-[18px] outline outline-1 outline-pallete-electric-indigo text-pallete-electric-indigo flex-grow flex-shrink-0 basis-[45%] active:scale-95 transition",
				chatOption === id && "bg-pallete-electric-indigo text-white",
			)}
			onClick={() => {
				globalDispatch({ type: "chat_option", id });
				pipeline(globalDispatch);
			}}
		>
			{children}
		</button>
	);
}
