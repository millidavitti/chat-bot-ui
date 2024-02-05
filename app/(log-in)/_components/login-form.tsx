"use client";
import { LocalStorageManager } from "@/state/localStorageManager";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

export default function LoginForm() {
	const router = useRouter();

	return (
		<form
			className='flex flex-col gap-y-3 self-stretch'
			onSubmit={(e) => {
				e.preventDefault();
				const formData = new FormData(e.target as HTMLFormElement);
				if (
					formData.get("email") === "adamantcode" &&
					formData.get("password") === "password123!"
				) {
					new LocalStorageManager("chat_session").initState(formData);
					return router.push("/chat");
				}

				toast.error("Invalid Credentials");
			}}
		>
			<label htmlFor='email' className='text-fuschia-100'>
				Email
			</label>
			<input
				type='text'
				id='email'
				name='email'
				defaultValue='adamantcode'
				className='outline outline-1 outline-border h-[47px] px-2 rounded-[4px] text-pallete-grey-100'
			/>
			<label htmlFor='password' className='text-fuschia-100'>
				Password
			</label>
			<input
				type='password'
				id='password'
				name='password'
				defaultValue='password123!'
				className='outline outline-1 outline-border h-[47px] px-2 rounded-[4px] text-pallete-grey-100'
			/>
			<Link href='/reset-password' className='self-end'>
				<p className='h-5 text-pallete-picton-blue text-xs'>Forgot password</p>
			</Link>
			<button
				type='submit'
				className='h-11 bg-pallete-picton-blue rounded-[4px] text-base text-white active:scale-95 transition'
			>
				Log In
			</button>
		</form>
	);
}
