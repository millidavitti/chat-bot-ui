import Image from "next/image";
import Link from "next/link";

export default function SignUp() {
	return (
		<div className='flex items-center lg:h-full'>
			<div className='flex flex-col flex-grow items-center gap-y-3 px-4'>
				<div className='w-fit h-fit rounded'>
					<Image src='/logo.svg' width={54} height={55} alt='chatbot logo' />
				</div>
				<h1 className='text-header-1 font-header-1 text-pallete-cool-grey'>
					Sign Up
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
						Log In
					</button>
				</form>

				<Link href='/' className='self-start '>
					<p className='h-5 text-xs text-pallete-picton-blue cursor-pointer'>
						Already have an account? Log In
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
