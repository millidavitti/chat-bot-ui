"use client";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetPortal,
	SheetOverlay,
} from "@/components/ui/sheet";
import { GlobalStateContext } from "@/state/global.state";
import Image from "next/image";
import { useContext } from "react";
import ConversationItem from "./conversation-item";

interface SheetDemoProp {
	container?: any;
}
export function ConverationSheet({ container }: SheetDemoProp) {
	const {
		globalDispatch,
		globalRuntimeState: { isConversationSheetOpen },
	} = useContext(GlobalStateContext);

	return (
		<Sheet
			modal={false}
			open={isConversationSheetOpen}
			onOpenChange={() => globalDispatch({ type: "toggle_conversation_sheet" })}
		>
			<SheetTrigger className='cursor-pointer outline-none'>
				<button onClick={() => console.log("Ham clicked")}>
					<Image
						src='/ham.svg'
						width={24}
						height={24}
						alt='ham'
						className='lg:hidden'
					/>
				</button>
			</SheetTrigger>
			<SheetPortal container={container}>
				<SheetOverlay className='absolute bg-transparent' />
				<SheetContent
					onInteractOutside={(e) => e.preventDefault()}
					side='left'
					className='flex flex-col gap-y-3 bg-pallete-seasalt'
				>
					<ConversationItem id='one'>Conversation 1</ConversationItem>
					<ConversationItem id='two'>Conversation 2</ConversationItem>
					<ConversationItem id='three'>Conversation 3</ConversationItem>
				</SheetContent>
			</SheetPortal>
		</Sheet>
	);
}
