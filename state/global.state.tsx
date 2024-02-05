"use client";
import { v4 as uuidv4 } from "uuid";
import { Dispatch, createContext, useReducer } from "react";
import { LocalStorageManager } from "./localStorageManager";
import {
	ChatBotResponseProp,
	UserChatRequestProp,
} from "@/app/chat/_components/chat-bot";

export interface GlobalState {
	isConversationSheetOpen: boolean;
	currentConversation: string;
	chatOption: string;
	chatHistory: Array<ChatBotResponseProp | UserChatRequestProp>;
	isGeneratingResponse: boolean;
}

const globalState = new LocalStorageManager<GlobalState>("global");

globalState.initState({
	isConversationSheetOpen: false,
	currentConversation: "",
	chatOption: "A",
	chatHistory: [
		{
			id: "1",
			response: "What can I help you with?",
			type: "ChatBotResponseProp",
		},
	],
	isGeneratingResponse: false,
});

export function globalStateReducer(
	state: GlobalState,
	action: any,
): GlobalState {
	switch (action.type) {
		case "toggle_conversation_sheet": {
			return globalState
				.setState({
					...state,
					isConversationSheetOpen: !state.isConversationSheetOpen,
				})
				.getState();
		}
		case "select_conversation": {
			return globalState
				.setState({
					...state,
					currentConversation: action.id,
				})
				.getState();
		}
		case "chat_option": {
			if (action.id === state.chatOption)
				return globalState
					.setState({
						...state,
						chatHistory: [
							...state.chatHistory,
							{
								id: uuidv4(),
								request: "Option A",
								type: "UserChatRequestProp",
							},
						],
					})
					.getState();
		}
		case "is_generating_response": {
			return globalState
				.setState({
					...state,
					isGeneratingResponse: action.status,
				})
				.getState();
		}
		case "chat_response": {
			return globalState
				.setState({
					...state,
					chatHistory: [
						...state.chatHistory,
						{
							id: uuidv4(),
							response: action.response,
							type: "ChatBotResponseProp",
						},
					],
				})
				.getState();
		}
		case "chat_request": {
			return globalState
				.setState({
					...state,
					chatHistory: [
						...state.chatHistory,
						{
							id: uuidv4(),
							request: action.request,
							type: "UserChatRequestProp",
						},
					],
				})
				.getState();
		}

		default:
			return state;
	}
}

interface GlobalReducer {
	globalRuntimeState: GlobalState;
	globalDispatch: Dispatch<any>;
}

export const GlobalStateContext = createContext<GlobalReducer>({
	globalRuntimeState: {
		isConversationSheetOpen: false,
		currentConversation: "",
		chatOption: "A",
		chatHistory: [
			{
				id: "1",
				response: "What can I help you with?",
				type: "ChatBotResponseProp",
			},
		],
		isGeneratingResponse: false,
	},
	globalDispatch() {},
});

export default function GlobalStateProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [globalRuntimeState, globalDispatch] = useReducer(
		globalStateReducer,
		globalState.getState(),
	);
	return (
		<GlobalStateContext.Provider value={{ globalRuntimeState, globalDispatch }}>
			{children}
		</GlobalStateContext.Provider>
	);
}
