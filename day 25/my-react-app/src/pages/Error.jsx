import { useNavigate } from 'react-router-dom';
import Error from '../assets/error.png'; // Adjust the path as necessary

export default function ErrorPage() {
    const navigate = useNavigate();

    const handleBackToHome = () => {
        navigate('/dashboard');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#111] text-white px-4">
            <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Image on the left, slightly pushed down */}
                <div className="mt-6 md:mt-12">
                    <img
                        src={Error}
                        alt="Error Illustration"
                        className="w-64 h-64"
                    />
                </div>

                {/* Text on the right */}
                <div className="text-center md:text-left max-w-md">
                    <h1 className="text-9xl font-bold mb-4">404</h1>
                    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                    <p className="text-gray-400 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis viverra laoreet lorem diam sed egestas tincidunt dolor.
                    </p>

                    {/* Centered Button */}
                    <div className="flex justify-center md:justify-start">
                        <button
                            onClick={handleBackToHome}
                            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded"
                        >
                            Back to home
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}
