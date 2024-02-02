import Image from "next/image";
import Link from "next/link";

export default function LogIn() {
	return (
		<div className='flex items-center lg:h-full'>
			<div className='flex flex-col flex-grow items-center gap-y-3 px-4'>
				<div className='w-12 h-12 rounded'>
					<Image src='/logo.svg' width={54} height={55} alt='chatbot logo' />
				</div>
				<h1 className='text-header-1 font-header-1 text-pallete-cool-grey'>
					Log In
				</h1>

				<form className='flex flex-col gap-y-3 self-stretch'>
					<label htmlFor='email' className='text-fuschia-100'>
						Email
					</label>
					<input
						type='text'
						id='email'
						defaultValue='adamantcode'
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
					<Link href='/reset-password' className='self-end'>
						<p className='h-5 text-pallete-picton-blue'>Forgot password</p>{" "}
					</Link>
					<button className='h-11 bg-pallete-picton-blue rounded-[4px] text-base text-white'>
						Log In
					</button>
				</form>

				<Link href='/sign-up' className='self-start '>
					<p className='h-5 text-xs text-pallete-picton-blue cursor-pointer'>
						Don&apos;t have an account? Sign Up
					</p>
				</Link>
			</div>

			<Image
				src='/image.png'
				width={54}
				height={55}
				className='hidden lg:flex flex-grow-[2] h-full object-cover object-center'
				alt='chatbot logo'
			/>
		</div>
	);
}
