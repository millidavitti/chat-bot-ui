"use client";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import ConversationItem from "./conversation-item";
import ChatBar from "./chat-bar";
import ConversationsBar from "./conversations-bar";
import { ConverationSheet } from "./conversation-sheet";
import { GlobalStateContext } from "@/state/global.state";
import ChatOption from "./chat-option";
import withAuthentication from "@/hoc/withAuthentication";
import ChatBotResponse from "./chat-bot-response";
import UserChatRequest from "./user-chat-request";
import { ThreeDots } from "react-loader-spinner";
import pipeline from "@/lib/pipeline";
import getFormattedDate from "@/lib/get-formatted-date";

function Chatbot() {
	const [container, setContainer] = useState(null);
	const ref = useRef(null);
	const {
		globalRuntimeState: {
			isConversationSheetOpen,
			chatHistory,
			isGeneratingResponse,
		},
		globalDispatch,
	} = useContext(GlobalStateContext);

	useEffect(() => {
		setContainer(ref.current);
	}, []);

	return (
		<div className='flex flex-col items-center gap-y-2 h-full lg:px-2 py-2'>
			<div className='flex h-full w-full gap-x-6'>
				<div className='hidden lg:flex flex-col w-[350px] gap-y-2 bg-pallete-seasalt rounded-lg overflow-hidden'>
					{/* Converations Bar */}
					<ChatBar className='mt-0'>
						<ConversationsBar className='w-full' />
					</ChatBar>

					{/* Conversations */}
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
							{getFormattedDate()}
						</p>

						{/* Requests and Response */}
						<div className='flex flex-col self-stretch gap-y-4 overflow-y-auto h-full'>
							{chatHistory.map((data) =>
								data.type === "ChatBotResponseProp" && "response" in data ? (
									<ChatBotResponse
										key={data.id}
										data={
											Array.isArray(data.response)
												? data.response
												: [data.response]
										}
									/>
								) : data.type === "UserChatRequestProp" && "request" in data ? (
									<UserChatRequest key={data.id}>
										{data.request}
									</UserChatRequest>
								) : null,
							)}
							{isGeneratingResponse && (
								<ChatBotResponse>
									<ThreeDots height={30} width={40} color='rgb(21, 171, 255)' />
								</ChatBotResponse>
							)}
						</div>

						{/* Options & chat bar*/}
						<div className='flex flex-col flex-shrink-0 w-full justify-end gap-y-3 px-4'>
							{/* Options */}
							<div className='flex flex-wrap gap-3'>
								<ChatOption id='A'>Option A</ChatOption>
								<ChatOption id='B'>Option B</ChatOption>
								<ChatOption id='C'>Option C</ChatOption>
								<ChatOption id='D'>Option D</ChatOption>
							</div>

							{/* Form Input */}
							<form
								onSubmit={(e) => {
									e.preventDefault();
									const formData = new FormData(e.target as HTMLFormElement);
									if (!formData.get("user_input")) return;
									globalDispatch({
										type: "chat_request",
										request: formData.get("user_input"),
									});
									pipeline(
										globalDispatch,
										formData.get("user_input") as string,
									);
								}}
								className='h-14 flex items-center justify-between gap-x-3 px-3 lg:outline rounded-full outline-1 outline-pallete-platinum overflow-hidden'
							>
								<input
									className='flex-grow text-[#9095A1] text-base p-4 outline-none bg-transparent'
									placeholder='Reply to Chatbot'
									name='user_input'
								/>
								<button
									className='overflow-hidden rounded-full active:scale-95 transition'
									type='submit'
								>
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

export interface ChatBotResponseProp {
	id: string;
	response: string | string[];
	type: string;
}

export interface UserChatRequestProp {
	id: string;
	request: string;
	type: string;
}

export default withAuthentication(Chatbot);
