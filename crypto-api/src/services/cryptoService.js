import CryptoJS from 'crypto-js'
import JSEncrypt from 'jsencrypt'

export const cryptoService = {
    // Generate RSA key pair
    generateRSAKeyPair() {
        try {
            const crypt = new JSEncrypt({ default_key_size: 2048 })
            const privateKey = crypt.getPrivateKey()
            const publicKey = crypt.getPublicKey()
            return { privateKey, publicKey }
        } catch (error) {
            throw new Error('Failed to generate RSA key pair: ' + error.message)
        }
    },

    // AES Encryption
    encryptAES(plaintext, key) {
        try {
            if (!key || key.length < 16) {
                throw new Error('AES key must be at least 16 characters')
            }
            const ciphertext = CryptoJS.AES.encrypt(plaintext, key).toString()
            return ciphertext
        } catch (error) {
            throw new Error('AES Encryption failed: ' + error.message)
        }
    },

    // AES Decryption
    decryptAES(ciphertext, key) {
        try {
            if (!key || key.length < 16) {
                throw new Error('AES key must be at least 16 characters')
            }
            const bytes = CryptoJS.AES.decrypt(ciphertext, key)
            const plaintext = bytes.toString(CryptoJS.enc.Utf8)
            if (!plaintext) {
                throw new Error('Invalid ciphertext or key')
            }
            return plaintext
        } catch (error) {
            throw new Error('AES Decryption failed: ' + error.message)
        }
    },

    // Triple DES Encryption
    encryptTripleDES(plaintext, key) {
        try {
            if (!key || key.length < 24) {
                throw new Error('Triple DES key must be at least 24 characters')
            }
            const ciphertext = CryptoJS.TripleDES.encrypt(plaintext, key).toString()
            return ciphertext
        } catch (error) {
            throw new Error('Triple DES Encryption failed: ' + error.message)
        }
    },

    // Triple DES Decryption
    decryptTripleDES(ciphertext, key) {
        try {
            if (!key || key.length < 24) {
                throw new Error('Triple DES key must be at least 24 characters')
            }
            const bytes = CryptoJS.TripleDES.decrypt(ciphertext, key)
            const plaintext = bytes.toString(CryptoJS.enc.Utf8)
            if (!plaintext) {
                throw new Error('Invalid ciphertext or key')
            }
            return plaintext
        } catch (error) {
            throw new Error('Triple DES Decryption failed: ' + error.message)
        }
    },

    // RSA Encryption
    encryptRSA(plaintext, publicKey) {
        try {
            const crypt = new JSEncrypt()
            crypt.setPublicKey(publicKey)
            const ciphertext = crypt.encrypt(plaintext)
            if (!ciphertext) {
                throw new Error('Invalid public key or plaintext too long')
            }
            return ciphertext
        } catch (error) {
            throw new Error('RSA Encryption failed: ' + error.message)
        }
    },

    // RSA Decryption
    decryptRSA(ciphertext, privateKey) {
        try {
            const crypt = new JSEncrypt()
            crypt.setPrivateKey(privateKey)
            const plaintext = crypt.decrypt(ciphertext)
            if (!plaintext) {
                throw new Error('Invalid private key or ciphertext')
            }
            return plaintext
        } catch (error) {
            throw new Error('RSA Decryption failed: ' + error.message)
        }
    },

    // Hashing (SHA-256, SHA-512, MD5)
    async hash(algorithm, data) {
        try {
            if (algorithm === 'MD5') {
                const hash = CryptoJS.MD5(data).toString()
                return hash
            }
            const msgBuffer = new TextEncoder().encode(data)
            const hashBuffer = await crypto.subtle.digest(algorithm, msgBuffer)
            const hashArray = Array.from(new Uint8Array(hashBuffer))
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
            return hashHex
        } catch (error) {
            throw new Error('Hashing failed: ' + error.message)
        }
    }
}
