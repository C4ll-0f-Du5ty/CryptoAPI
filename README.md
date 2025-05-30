# 🚀 CryptoAPI
🔒 A modern client-side cryptography toolkit built with React.js, providing a user-friendly interface for encryption, decryption, and hashing operations.

[![Portfolio](https://img.shields.io/badge/Portfolio-allem.pro-blue)](https://allem.pro/)
[![Contact](https://img.shields.io/badge/Gmail-allemhamed98%40gmail.com-red)](mailto:allemhamed98@gmail.com)

## 👋 About Me
Hi! I'm [Allem Abdelaziz](https://github.com/C4ll-0f-Du5ty), a full-stack developer specializing in React.js and secure web development. I built CryptoAPI to provide developers with an intuitive interface for cryptographic operations while maintaining security best practices.

## 🎯 Key Features
🔑 **Encryption & Decryption**
- Symmetric encryption (AES-256 CBC mode)
- Triple DES encryption
- Asymmetric RSA encryption (2048-bit key pairs)

📊 **Hashing Algorithms**
- SHA-256 and SHA-512 (Web Crypto API)
- MD5 (educational purposes)

⚙️ **Security Features**
- Client-side processing
- Input validation
- Secure key generation
- Error handling with toast notifications

🌟 **User Experience**
- Modern dark theme with green accents
- Smooth animations powered by Framer Motion
- Responsive design
- Accessibility features (ARIA labels)
- Copy-to-clipboard functionality

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
- react-toastify
- react-spinners

## 📁 Project Structure
```plaintext
src/
├── components/
│   ├── Encryption/
│   │   ├── SymmetricEncryption.jsx
│   │   └── AsymmetricEncryption.jsx
│   ├── Hashing/
│   │   └── HashGenerator.jsx
│   └── UI/
├── services/
│   └── cryptoService.js
├── hooks/
└── utils/
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

## 🧪 Testing
```bash
# Run unit tests
npm test

# Run end-to-end tests
npm run cypress
```

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
[![GitHub](https://img.shields.io/badge/GitHub-C4ll--0f-Du5ty-blue)](https://github.com/C4ll-0f-Du5ty)
[![Portfolio](https://img.shields.io/badge/Portfolio-allem.pro-blue)](https://allem.pro/)
[![Email](https://img.shields.io/badge/Gmail-allemhamed98%40gmail.com-red)](mailto:allemhamed98@gmail.com)
