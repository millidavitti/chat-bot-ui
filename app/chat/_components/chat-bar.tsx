import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ChatBarProp {
	children: ReactNode;
	className?: string;
}
export default function ChatBar({ children, className }: ChatBarProp) {
	return (
		<div
			className={cn(
				"flex flex-shrink-0 items-center justify-between px-4 mt-8 w-full h-14  bg-pallete-picton-blue gap-x-12 z-51",
				className,
			)}
		>
			{children}
		</div>
	);
}
