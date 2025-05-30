import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

function DecryptionForm({ cryptoService, toast }) {
    const [algorithm, setAlgorithm] = useState('AES')
    const [ciphertext, setCiphertext] = useState('')
    const [key, setKey] = useState('')
    const [plaintext, setPlaintext] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleDecrypt = async () => {
        setIsLoading(true)
        try {
            let result
            if (algorithm === 'AES') {
                result = cryptoService.decryptAES(ciphertext, key)
            } else if (algorithm === 'TripleDES') {
                result = cryptoService.decryptTripleDES(ciphertext, key)
            } else if (algorithm === 'RSA') {
                result = cryptoService.decryptRSA(ciphertext, key)
            }
            setPlaintext(result)
            toast.success('Decryption successful!')
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(plaintext)
        toast.success('Plaintext copied to clipboard!')
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Decrypt</h2>
            <div className="space-y-4">
                <div>
                    <label className="block mb-1 text-gray-300" htmlFor="algorithm">Algorithm</label>
                    <select
                        id="algorithm"
                        className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        value={algorithm}
                        onChange={(e) => setAlgorithm(e.target.value)}
                        aria-label="Select decryption algorithm"
                    >
                        <option value="AES">AES</option>
                        <option value="TripleDES">Triple DES</option>
                        <option value="RSA">RSA</option>
                    </select>
                </div>
                <div>
                    <label className="block mb-1 text-gray-300" htmlFor="ciphertext">Ciphertext</label>
                    <textarea
                        id="ciphertext"
                        className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                        value={ciphertext}
                        onChange={(e) => setCiphertext(e.target.value)}
                        placeholder="Enter ciphertext"
                        aria-label="Ciphertext input"
                    />
                </div>
                <div>
                    <label className="block mb-1 text-gray-300" htmlFor="key">
                        {algorithm === 'AES' ? 'Key (min 16 chars)' : algorithm === 'TripleDES' ? 'Key (min 24 chars)' : 'Private Key'}
                    </label>
                    <textarea
                        id="key"
                        className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
                        rows="4"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder={algorithm === 'AES' ? 'Enter AES key' : algorithm === 'TripleDES' ? 'Enter Triple DES key' : 'Enter RSA private key'}
                        aria-label={algorithm === 'AES' ? 'AES key input' : algorithm === 'TripleDES' ? 'Triple DES key input' : 'RSA private key input'}
                    />
                </div>
                <button
                    className="bg-green-500 text-gray-900 px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
                    onClick={handleDecrypt}
                    disabled={isLoading}
                    aria-label="Decrypt data"
                >
                    {isLoading ? (
                        <span className="flex items-center">
                            <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Decrypting...
                        </span>
                    ) : (
                        'Decrypt'
                    )}
                </button>
                {plaintext && (
                    <motion.div
                        className="mt-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium text-gray-100">Plaintext</h3>
                            <button
                                className="text-green-400 hover:text-green-300"
                                onClick={copyToClipboard}
                                aria-label="Copy plaintext"
                            >
                                Copy
                            </button>
                        </div>
                        <textarea
                            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md resize-none"
                            rows="4"
                            value={plaintext}
                            readOnly
                            aria-label="Decrypted plaintext output"
                        />
                    </motion.div>
                )}
            </div>
        </motion.div>
    )
}

export default DecryptionForm
