import { useState } from "react"
import emailjs from 'emailjs-com';


const ContactForm = ({
        submitEmail,
        handleChange,
        name,
        email,
        message,
        formSubmitStatus
    }) => {
    
    return (
        <form onSubmit={submitEmail} className='flex flex-col space-y-4 py-5 w-full px-10 max-w-lg'>
            <div className="font-fullstack flex flex-col">
                <label 
                htmlFor="name"
                className="text-lg text-zinc-100">
                    Your name or company name{name === '' && <sup className="text-red-600">*</sup>}</label>
                <input 
                    className="px-3 py-1 bg-white/40 backdrop-blur text-zinc-500"
                    required 
                    type='text'
                    name="name" 
                    placeholder="Company name"
                    value={name}
                    onChange={handleChange}
                    />
            </div>
            <div className="font-fullstack flex flex-col">
                <label 
                htmlFor="email"
                className="text-lg text-zinc-100">
                    Your email{email === '' && <sup className="text-red-600">*</sup>}</label>
                <input 
                    className="px-3 py-1 bg-white/40 backdrop-blur text-zinc-500"
                    required 
                    type='email'
                    name="email" 
                    placeholder="your@email.com"
                    value={email}
                    onChange={handleChange}
                    />
            </div>
            <div className="font-fullstack flex flex-col">
                <label 
                htmlFor="name"
                className="text-lg text-zinc-100">
                    Quick Message</label>
                <input 
                    className="px-3 py-1 bg-white/40 backdrop-blur text-zinc-500"
                    type='text'
                    name="message" 
                    placeholder="Your message here..."
                    value={message}
                    onChange={handleChange}
                    />
            </div>

            <button className={`${formSubmitStatus === 'submitted' && 'hidden'} hover:scale-105 transition duration-150 ease-in-out text-zinc-50 bg-zinc-500/40 rounded-md h-10 w-3/4 backdrop-blur text-xl self-end`}>
                    {formSubmitStatus === 'notSubmitted' && <p className=' font-fullstack'>Send</p>}
                    {formSubmitStatus === 'loading' && <FormSpinner />}
            </button>
            {formSubmitStatus === 'submitted' && <FormSubmitted />}
        </form>
    )
}

const FormSubmitted = () => (
    <div className='py-2 bg-gradient-to-l from-zinc-300/20 to-zinc-50 text-xl text-center font-fullstack rounded-md w-full px-3 '>
        <p>Thank you, I will be in touch soon!</p>
    </div>  
)

const FormSpinner = () => (
    <div className="flex flex-row items-center mx-auto space-x-2 px-3">
        <div className="animate-spin w-5 h-5 rounded-full border-2 border-b-zinc-700/30 border-slate-50"></div>
        <p className="font-fullstack">Sending Message</p>
    </div>
)

export default function() {
    // initial input
    const formInputs = { 
        name: '',
        email: '',
        message: ''
    }

    const [ contactForm, setContactForm ] = useState(formInputs);
    const [ formSubmitStatus, setFormSubmitStatus ] = useState('notSubmitted');
    
    const handleChange = e => {
        const { name, value } = e.target;
        setContactForm( prevInput => ({ ...prevInput, [name]: value}) )
    }

    const submitEmail = async e => {
        e.preventDefault();
        setFormSubmitStatus('loading');

        emailjs
            .send(process.env.NEXT_PUBLIC_EMAILJS_SERVICE, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE, contactForm,  process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
            .then(() => {
                setFormSubmitStatus('submitted')
            })
            .catch(err => new Error(err))
    }

    const { name, email, message } = contactForm;


    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p className="text-2xl font-software text-zinc-50">Contact Me</p>
            <ContactForm 
                submitEmail={submitEmail}
                handleChange={handleChange}
                name={name}
                email={email}
                message={message}
                formSubmitStatus={formSubmitStatus}
            />
        </div>
    )
}
