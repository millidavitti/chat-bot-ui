"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function ResetPasswordForm() {
	const router = useRouter();
	return (
		<form
			className='flex flex-col gap-y-3 self-stretch'
			onSubmit={(e) => {
				e.preventDefault();
				toast.success(
					"Your password has been successfully reset. You can now log in with your new password.",
				);
				router.push("/");
			}}
		>
			<label htmlFor='password' className='text-fuschia-100'>
				New Password
			</label>
			<input
				type='password'
				id='password'
				defaultValue='password123!'
				className='outline outline-1 outline-border h-[47px] px-2 rounded-[4px] text-pallete-grey-100'
			/>
			<label htmlFor='confirm-password' className='text-fuschia-100'>
				Confirm Password
			</label>
			<input
				type='password'
				id='confirm-password'
				defaultValue='password123!'
				className='outline outline-1 outline-border h-[47px] px-2 rounded-[4px] text-pallete-grey-100'
			/>

			<button className='h-11 mt-8 bg-pallete-picton-blue rounded-[4px] text-base text-white active:scale-95 transitions'>
				Reset Password
			</button>
		</form>
	);
}
