import { useNavigate } from 'react-router-dom';

export default function Success() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-4xl font-bold text-green-500 mb-4">Success!</h1>
            <p className="text-sm max-w-md text-gray-300 mb-6">
                An email has been sent to <span className="text-yellow-500">your@email.com</span>. Please check<br /> for an email from
                our company and click on the included link to reset<br /> your password.
            </p>
            <button
                onClick={() => navigate('/dashboard')}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded transition"
            >
                Back to Home
            </button>
        </div>
    );
}