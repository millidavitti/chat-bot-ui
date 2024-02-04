"use client";
import { Dispatch, createContext, useReducer } from "react";
import { LocalStorageManager } from "./localStorageManager";

export interface GlobalState {
	isConversationSheetOpen: boolean;
	currentConversation: string;
	chatOption: string;
}

const globalState = new LocalStorageManager<GlobalState>("global");

globalState.initState({
	isConversationSheetOpen: false,
	currentConversation: "",
	chatOption: "A",
});

export function globalStateReducer(
	state: GlobalState,
	action: any,
): GlobalState {
	switch (action.type) {
		case "toggle_conversation_sheet": {
			return globalState.setState({
				...state,
				isConversationSheetOpen: !state.isConversationSheetOpen,
			});
		}
		case "select_conversation": {
			return globalState.setState({
				...state,
				currentConversation: action.id,
			});
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
