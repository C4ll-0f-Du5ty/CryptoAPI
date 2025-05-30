import { useState } from 'react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

function KeyPairGenerator({ cryptoService, toast }) {
    const [keyPair, setKeyPair] = useState({ privateKey: '', publicKey: '' })
    const [isLoading, setIsLoading] = useState(false)

    const generateKeys = async () => {
        setIsLoading(true)
        try {
            const { privateKey, publicKey } = cryptoService.generateRSAKeyPair()
            setKeyPair({ privateKey, publicKey })
            toast.success('RSA key pair generated successfully!')
        } catch (error) {
            toast.error(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    const copyToClipboard = (text, label) => {
        navigator.clipboard.writeText(text)
        toast.success(`${label} copied to clipboard!`)
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <h2 className="text-2xl font-semibold mb-4 text-gray-100">Generate RSA Key Pair</h2>
            <button
                className="bg-green-500 text-gray-900 px-4 py-2 rounded-md hover:bg-green-600 transition-colors disabled:opacity-50"
                onClick={generateKeys}
                disabled={isLoading}
                aria-label="Generate RSA key pair"
            >
                {isLoading ? (
                    <span className="flex items-center">
                        <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Generating...
                    </span>
                ) : (
                    'Generate Keys'
                )}
            </button>
            {keyPair.publicKey && (
                <div className="mt-4 space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium text-gray-100">Public Key</h3>
                            <button
                                className="text-green-400 hover:text-green-300"
                                onClick={() => copyToClipboard(keyPair.publicKey, 'Public Key')}
                                aria-label="Copy public key"
                            >
                                Copy
                            </button>
                        </div>
                        <textarea
                            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md resize-none"
                            rows="6"
                            value={keyPair.publicKey}
                            readOnly
                            aria-label="RSA Public Key"
                        />
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-medium text-gray-100">Private Key</h3>
                            <button
                                className="text-green-400 hover:text-green-300"
                                onClick={() => copyToClipboard(keyPair.privateKey, 'Private Key')}
                                aria-label="Copy private key"
                            >
                                Copy
                            </button>
                        </div>
                        <textarea
                            className="w-full p-3 bg-gray-700 text-gray-200 border border-gray-600 rounded-md resize-none"
                            rows="6"
                            value={keyPair.privateKey}
                            readOnly
                            aria-label="RSA Private Key"
                        />
                    </div>
                </div>
            )}
        </motion.div>
    )
}

export default KeyPairGenerator
