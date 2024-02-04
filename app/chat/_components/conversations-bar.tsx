import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export default function ConversationsBar({
	className,
}: {
	className?: string;
}) {
	return (
		<div
			className={cn(
				"flex items-center flex-grow w-12 gap-x-3 justify-between z-[99]",
				className,
			)}
		>
			<p className='text-base text-white'>Conversations</p>
			<Image src='/plus.svg' width={24} height={24} alt='add converastion' />
		</div>
	);
}
