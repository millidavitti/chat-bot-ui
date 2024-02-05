import Image from "next/image";
import Link from "next/link";
import LoginForm from "./_components/login-form";

export default function LogIn() {
	return (
		<div className='flex items-center h-full'>
			<div className='flex flex-col flex-grow items-center gap-y-3 px-4'>
				<div className='w-12 h-12 rounded'>
					<Image src='/logo.svg' width={54} height={55} alt='chatbot logo' />
				</div>
				<h1 className='text-header-1 font-header-1 text-pallete-cool-grey'>
					Log In
				</h1>

				<LoginForm />

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
