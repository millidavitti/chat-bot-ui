import Image from "next/image";
import Link from "next/link";

export default function ResetPassword() {
	return (
		<div className='flex items-center lg:h-full'>
			<div className='flex flex-col flex-grow items-center gap-y-3 px-4'>
				<Link href='/'>
					<div className='w-12 h-12 rounded'>
						<Image src='/logo.svg' width={54} height={55} alt='chatbot logo' />
					</div>
				</Link>
				<h1 className='text-header-1 font-header-1 text-pallete-cool-grey'>
					Reset Password
				</h1>

				<form className='flex flex-col gap-y-3 self-stretch'>
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
					<button className='h-11 mt-8 bg-pallete-picton-blue rounded-[4px] text-base text-white'>
						Reset Password
					</button>
				</form>
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
