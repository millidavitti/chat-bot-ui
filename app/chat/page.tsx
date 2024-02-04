"use client";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import ConversationItem from "./_components/conversation-item";
import ChatBar from "./_components/chat-bar";
import ConversationsBar from "./_components/conversations-bar";
import { ConverationSheet } from "./_components/conversation-sheet";
import { GlobalStateContext } from "@/state/global.state";
import ChatOption from "./_components/chat-option";

export default function Chatbot() {
	const [container, setContainer] = useState(null);
	const ref = useRef(null);
	const {
		globalRuntimeState: { isConversationSheetOpen },
	} = useContext(GlobalStateContext);
	useEffect(() => {
		setContainer(ref.current);
		console.log(container);
	}, []);

	return (
		<div className='flex flex-col items-center gap-y-2 h-full lg:px-2 py-2'>
			<div className='flex h-full w-full gap-x-6'>
				<div className='hidden lg:flex flex-col w-[350px] gap-y-2 bg-pallete-seasalt rounded-lg overflow-hidden'>
					{/* Converations Bar */}
					<ChatBar className='mt-0'>
						<ConversationsBar className='w-full' />
					</ChatBar>
					<div className='flex flex-col gap-y-3 px-2'>
						<ConversationItem id='one'>Conversation 1</ConversationItem>
						<ConversationItem id='two'>Conversation 2</ConversationItem>
						<ConversationItem id='three'>Conversation 3</ConversationItem>
					</div>
				</div>

				<div className='w-full flex flex-col gap-y-4 pb-0 lg:rounded-lg overflow-hidden'>
					{/* Mobile: Conversation Sheet */}
					<ChatBar className='mt-0'>
						{!isConversationSheetOpen ? (
							<div className='flex items-center gap-x-3'>
								<Image
									src='/avatar.png'
									width={43}
									height={43}
									alt='profile picture'
									className='rounded-full object-contain'
								/>
								<p className='text-base text-white'>Chatbot</p>
							</div>
						) : (
							<ConversationsBar />
						)}
						<ConverationSheet container={container} />
					</ChatBar>
					<div
						ref={ref}
						className='w-full flex flex-col items-center self-stretch gap-y-5 relative h-full'
					>
						{/* Chat Screen */}
						<p className='text-xs text-[#171A1F] flex-shrink-0'>
							Jan 27, 12:53 PM
						</p>

						{/* Reply */}
						<div className='flex items-center flex-shrink-0 gap-x-3 self-stretch px-4'>
							<Image
								src='/avatar.png'
								width={43}
								height={43}
								alt='profile picture'
								className='rounded-full object-contain'
							/>
							<p className='px-4 py-2  rounded-[18px] bg-[#F0F9FF] text-base text-pallete-picton-blue text-wrap'>
								What can I help you with?
							</p>
						</div>

						{/* Options & chat bar*/}
						<div className='h-full flex flex-col w-full justify-end gap-y-3 px-4'>
							<div className='flex flex-wrap gap-3'>
								<ChatOption id='A'>Option A</ChatOption>
								<ChatOption id='B'>Option B</ChatOption>
								<ChatOption id='C'>Option C</ChatOption>
								<ChatOption id='D'>Option D</ChatOption>
							</div>

							<form className='h-14 flex items-center justify-between px-3 lg:outline rounded-full outline-1 outline-pallete-platinum overflow-hidden'>
								<input
									className='text-[#9095A1] text-base p-4 outline-none'
									placeholder='Reply to Chatbot'
								/>
								<button className='overflow-hidden rounded-full' type='submit'>
									<Image
										src='/send.svg'
										width={44}
										height={44}
										alt='send button'
										className='bg-pallete-electric-indigo'
									/>
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
