import { useState } from 'react'
import { motion } from 'framer-motion'
import { cryptoService } from './services/cryptoService'
import { toast } from 'react-toastify'
import KeyPairGenerator from './components/KeyPairGenerator'
import EncryptionForm from './components/EncryptionForm'
import DecryptionForm from './components/DecryptionForm'
import HashingForm from './components/HashingForm'

function App() {
  const [activeTab, setActiveTab] = useState('encrypt')

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col items-center p-4 font-mono">
      <motion.h1
        className="text-4xl font-bold mb-8 text-green-400"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        CryptoAPI
      </motion.h1>

      {/* Tabs */}
      <div className="mb-6 flex space-x-2 bg-gray-800 p-2 rounded-lg">
        {['encrypt', 'decrypt', 'hash', 'keys'].map(tab => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-md transition-colors ${activeTab === tab ? 'bg-green-500 text-gray-900' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <motion.div
        className="w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'encrypt' && <EncryptionForm cryptoService={cryptoService} toast={toast} />}
        {activeTab === 'decrypt' && <DecryptionForm cryptoService={cryptoService} toast={toast} />}
        {activeTab === 'hash' && <HashingForm cryptoService={cryptoService} toast={toast} />}
        {activeTab === 'keys' && <KeyPairGenerator cryptoService={cryptoService} toast={toast} />}
      </motion.div>
    </div>
  )
}

export default App
