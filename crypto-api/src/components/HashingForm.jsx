import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

function HashingForm({ cryptoService, toast }) {
    const [algorithm, setAlgorithm] = useState('SHA-256')
    const [input, setInput] = useState('')
    const [hash, setHash] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleHash = async () => {
        setIsLoading(true)
        try {
            const result = await cryptoService.hash(algorithm, input)
            setHash(result)
            toast.success('Hashing successful!')
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(hash)
        toast.success('Hash copied to clipboard!')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Hash</h2>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-300" htmlFor="algorithm">Algorithm</label>
                    <select
                        id="algorithm"
                        className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={algorithm}
                        onChange={(e) => setAlgorithm(e.target.value)}
                        aria-label="Select hashing algorithm"
                    >
                        <option value="SHA-256">SHA-256</option>
                        <option value="SHA-512">SHA-512</option>
                        <option value="MD5">MD5</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-gray-300" htmlFor="input">Input</label>
                    <textarea
                        id="input"
                        className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter text to hash"
                        aria-label="Input text for hashing"
                    />
                </div>
                <button
                    className="bg-green-500 text-gray-900 px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
                    onClick={handleHash}
                    disabled={isLoading}
                    aria-label="Generate hash"
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Hashing...
                        </span>
                    ) : (
                        'Hash'
                    )}
                </button>
                {hash && (
                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium text-gray-100">Hash</h3>
                            <button
                                className="text-green-400 hover:text-green-300"
                                onClick={copyToClipboard}
                                aria-label="Copy hash"
                            >
                                Copy
                            </button>
                        </div>
                        <textarea
                            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md resize-none"
                            rows="4"
                            value={hash}
                            readOnly
                            aria-label="Hash output"
                        />
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default HashingForm
