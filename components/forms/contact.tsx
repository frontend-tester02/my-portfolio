'use client'

import { Send } from 'lucide-react'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Textarea } from '../ui/textarea'
import { toast } from 'sonner'
import { contactSchema } from '@/lib/validation.ts/validation'

function ContactForm() {
	const [isLoading, setIsLoading] = useState(false)

	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			email: '',
			message: '',
			name: '',
		},
	})

	function onSubmit(values: z.infer<typeof contactSchema>) {
		setIsLoading(true)

		const promise = fetch('/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache',
			},
			body: JSON.stringify({
				name: values.name,
				email: values.email,
				message: values.message,
			}),
		})
			.then(async res => {
				if (!res.ok) {
					const err = await res.json().catch(() => ({}))
					throw new Error(err?.error || 'Failed to send message')
				}
				form.reset()
			})
			.finally(() => setIsLoading(false))

		toast.promise(promise, {
			loading: 'Sending...',
			success: 'Message sent — I will reply soon!',
			error: 'Error sending message. Try again!',
		})
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Textarea
									className='h-32 resize-none'
									placeholder={'Ask question or just say Hi'}
									{...field}
									disabled={isLoading}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder={'Email address'}
									{...field}
									disabled={isLoading}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder={'Your name'}
									{...field}
									disabled={isLoading}
								/>
							</FormControl>

							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className='w-fit rounded-full'
					size={'lg'}
					type='submit'
					disabled={isLoading}
				>
					<span>Send</span>
					<Send className='ml-2 size-4' />
				</Button>
			</form>
		</Form>
	)
}

export default ContactForm
