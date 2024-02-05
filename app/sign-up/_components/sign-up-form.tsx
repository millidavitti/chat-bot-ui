"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignUpForm() {
	const router = useRouter();
	return (
		<form
			className='flex flex-col gap-y-3 self-stretch'
			onSubmit={(e) => {
				e.preventDefault();
				toast.success(
					"Success! You’ve signed up. You can now log into your account!",
				);
				router.push("/");
			}}
		>
			<label htmlFor='email' className='text-fuschia-100'>
				Email
			</label>
			<input
				type='text'
				id='email'
				defaultValue='adamantcode'
				className='outline outline-1 outline-border h-[47px] px-2 rounded-[4px] text-pallete-grey-100'
			/>
			<label htmlFor='name' className='text-fuschia-100'>
				Name
			</label>
			<input
				type='text'
				id='name'
				defaultValue='Donald Abua'
				className='outline outline-1 outline-border h-[47px] px-2 rounded-[4px] text-pallete-grey-100'
			/>
			<label htmlFor='password' className='text-fuschia-100'>
				Password
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

			<button className='h-11 bg-pallete-picton-blue rounded-[4px] text-base text-white'>
				Sign Up
			</button>
		</form>
	);
}
