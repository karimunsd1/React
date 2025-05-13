import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import users from '../data/users.json'
import { FaGoogle, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Input = ({ type = "text", placeholder, value, onChange }) => (
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full mb-4 px-3 py-2 bg-black border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
)

const SocialIcon = ({ Icon }) => (
    <Icon className="text-white cursor-pointer hover:text-orange-500 transition-colors" />
)

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSignIn = () => {
        const user = users.find(u => u.email === email && u.password === password)
        if (user) {
            navigate('/success')
        } else {
            alert('Invalid credentials')
        }
    }

    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative">
            <div className="absolute inset-0 bg-repeat" />
            <div className="z-10 bg-[#111] p-8 rounded-md border border-yellow-500 w-full max-w-md shadow-xl">
                <h2 className="text-white text-2xl font-bold text-center mb-2">Sign In</h2>
                <p className="text-gray-400 text-center text-sm mb-6">Welcome back! Sign in to your account.</p>

                <Input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />

                <div className="flex justify-between items-center mb-4 text-sm text-gray-400">
                    <label>
                        <input type="checkbox" className="mr-2" />
                        Remember me?
                    </label>
                    <button className="text-yellow-500">Forgot Password</button>
                </div>

                <button
                    onClick={handleSignIn}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded mb-4"
                >
                    Sign In
                </button>

                <p className="text-center text-sm text-gray-400 mb-2">or sign in with other accounts?</p>

                <div className="flex justify-center gap-4 mt-2">
                    <SocialIcon Icon={FaGoogle} />
                    <SocialIcon Icon={FaFacebookF} />
                    <SocialIcon Icon={FaInstagram} />
                    <SocialIcon Icon={FaLinkedinIn} />
                </div>

                <p className="text-sm text-center text-gray-400 mt-4">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="text-yellow-500">
                        Click here to sign up.
                    </Link>
                </p>
            </div>
        </div>
    )
}
