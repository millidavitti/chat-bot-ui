import Image from "next/image";
import Link from "next/link";
import ResetPasswordForm from "./_components/reset-password-form";

export default function ResetPassword() {
	return (
		<div className='flex items-center h-full'>
			<div className='flex flex-col flex-grow items-center gap-y-3 px-4'>
				<Link href='/'>
					<div className='w-12 h-12 rounded'>
						<Image src='/logo.svg' width={54} height={55} alt='chatbot logo' />
					</div>
				</Link>
				<h1 className='text-header-1 font-header-1 text-pallete-cool-grey'>
					Reset Password
				</h1>

				<ResetPasswordForm />
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
