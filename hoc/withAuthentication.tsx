"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import { LocalStorageManager } from "@/state/localStorageManager";

export default function withAuthentication(Component: any) {
	return function (props: any) {
		useEffect(() => {
			const isAuthenticated = new LocalStorageManager(
				"chat_session",
			).getState();
			if (!isAuthenticated) redirect("/");
		}, []);

		return <Component {...props} />;
	};
}
