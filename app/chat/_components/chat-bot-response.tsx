import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { ReactNode } from "react";
interface ChatBotResponseProp {
	children?: ReactNode;
	data?: Array<string>;
}
export default function ChatBotResponse({
	children,

	data,
}: ChatBotResponseProp) {
	return (
		<div className={cn("flex items-center flex-shrink-0 gap-x-3 px-4")}>
			<Image
				src='/avatar.png'
				width={43}
				height={43}
				alt='profile picture'
				className='rounded-full object-contain self-end'
			/>

			{data ? (
				<div className='flex flex-col items-start flex-shrink-0 gap-y-2'>
					{data?.map((text) => {
						if (urlPattern.test(text))
							return (
								<div className='p-4 max-w-[280px] rounded-[18px] bg-[#F0F9FF] text-base text-pallete-picton-blue text-wrap'>
									<Image
										src={text}
										width={224}
										height={150}
										alt='image'
										objectFit='contain'
										className='overflow-hidden rounded-lg'
									/>
								</div>
							);
						else
							return (
								<p
									className={cn(
										"px-4 py-2 max-w-[280px] rounded-[18px] bg-[#F0F9FF] text-base text-pallete-picton-blue text-wrap",
									)}
								>
									{text}
								</p>
							);
					})}
				</div>
			) : (
				<p
					className={cn(
						"px-4 py-2 max-w-[280px] rounded-[18px] bg-[#F0F9FF] text-base text-pallete-picton-blue text-wrap",
					)}
				>
					{children}
				</p>
			)}
		</div>
	);
}

const urlPattern =
	/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
