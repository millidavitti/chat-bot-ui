import Image from "next/image";
import Link from "next/link";
import SignUpForm from "./_components/sign-up-form";

export default function SignUp() {
	return (
		<div className='flex items-center h-full'>
			<div className='flex flex-col flex-grow items-center gap-y-3 px-4'>
				<div className='w-fit h-fit rounded'>
					<Image src='/logo.svg' width={54} height={55} alt='chatbot logo' />
				</div>
				<h1 className='text-header-1 font-header-1 text-pallete-cool-grey'>
					Sign Up
				</h1>

				<SignUpForm />

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
