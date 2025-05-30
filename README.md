# 🚀 CryptoAPI
🔒 A modern client-side cryptography toolkit built with React.js, providing a user-friendly interface for encryption, decryption, and hashing operations.

[![Portfolio](https://img.shields.io/badge/Portfolio-allem.pro-blue)](https://allem.pro/)
[![Contact](https://img.shields.io/badge/Gmail-allemhamed98%40gmail.com-red)](mailto:allemhamed98@gmail.com)

## 👋 About Me
Hi! I'm [Allem Abdelaziz](https://github.com/C4ll-0f-Du5ty), a full-stack developer specializing in React.js and secure web development. I built CryptoAPI to provide developers with an intuitive interface for cryptographic operations while maintaining security best practices.

## 🎯 Key Features
🔑 **Encryption & Decryption**
- Symmetric encryption: AES (CBC mode, min 16-char key), Triple DES (min 24-char key)
- Asymmetric encryption: RSA (2048-bit key pairs)

📊 **Hashing Algorithms**
- SHA-256 and SHA-512 (Web Crypto API)
- MD5 (educational purposes)

⚙️ **Security Features**
- Client-side processing to eliminate server-side vulnerabilities
- Input validation for key lengths and RSA key formats
- Secure RSA key pair generation
- Error handling with toast notifications

🌟 **User Experience**
- Modern dark gray theme with green accents, inspired by VS Code
- Smooth animations powered by Framer Motion
- Loading spinners during operations (react-spinners)
- Responsive design for all screen sizes
- Accessibility features (ARIA labels, focus states)
- Copy-to-clipboard for keys, ciphertexts, plaintexts, and hashes

## 🛠️ Tech Stack
🧩 **Frontend**
- React.js
- Tailwind CSS
- Framer Motion

🔒 **Cryptography**
- crypto-js (AES, Triple DES)
- jsencrypt (RSA)
- Web Crypto API (SHA-256, SHA-512)

💻 **Development Tools**
- Vite
- react-toastify (notifications)
- react-spinners (loading effects)

## 📁 Project Structure
```plaintext
.
├── src/
│   ├── assets/
│   │   └── favicon.svg           # Optional favicon (e.g., lock icon)
│   ├── components/
│   │   ├── KeyPairGenerator.jsx  # RSA key pair generation
│   │   ├── EncryptionForm.jsx    # Encryption form
│   │   ├── DecryptionForm.jsx    # Decryption form
│   │   └── HashingForm.jsx       # Hashing form
│   ├── services/
│   │   └── cryptoService.js      # Cryptographic operations
│   ├── App.jsx                   # Main app component
│   ├── main.jsx                  # React entry point
│   └── index.css                 # Tailwind CSS styles
├── index.html                    # HTML entry point
├── package.json                  # Dependencies and scripts
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
└── README.md                     # Project documentation
```

## ⚡ Environment Setup
```bash
# Clone repository
git clone https://github.com/C4ll-0f-Du5ty/cryptoapi.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎮 Usage Guide
### Encryption Operations
1. Select encryption type (symmetric/asymmetric)
2. Enter your data
3. Provide required keys/passwords
4. Click encrypt/decrypt
5. Copy results using the copy button

### Hash Generation
1. Paste text to hash
2. Select hashing algorithm
3. View generated hash
4. Copy hash using copy button

## 🧩 Core Components
### SymmetricEncryption Component
```jsx
import { useState } from 'react';
import CryptoJS from 'crypto-js';

const SymmetricEncryption = () => {
  const [data, setData] = useState('');
  const [key, setKey] = useState('');

  const handleEncrypt = () => {
    // Implementation using crypto-js
  };

  return (
    <div className="space-y-4">
      {/* Component UI */}
    </div>
  );
};
```

## 🔒 Security Considerations
🛡️ **Input Validation**
- Minimum key lengths enforced
- Key format validation
- Error handling for invalid inputs

🔒 **Data Protection**
- Client-side processing only
- Secure random number generation
- Proper cleanup of sensitive data

⚠️ **Limitations**
- MD5 implementation is for educational purposes only
- Key storage is handled client-side
- Browser compatibility requirements

## 👥 Contributing
Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Submit a pull request
4. Include tests for new features

## 🔨 Extensibility
Add new algorithms by extending the crypto service:

```javascript
// src/services/cryptoService.js
export const addAlgorithm = (algorithmName, implementation) => {
  // Add new algorithm implementation
};

// Example usage:
addAlgorithm('newHash', async (data) => {
  // Custom implementation
});
```

## 📜 License
MIT © [Allem Abdelaziz](https://github.com/C4ll-0f-Du5ty)

## 📫 Contact
[![GitHub](https://img.shields.io/badge/GitHub-C4ll-0f-Du5ty-blue)](https://github.com/C4ll-0f-Du5ty)
[![Portfolio](https://img.shields.io/badge/Portfolio-allem.pro-blue)](https://allem.pro/)
[![Email](https://img.shields.io/badge/Gmail-allemhamed98%40gmail.com-red)](mailto:allemhamed98@gmail.com)
