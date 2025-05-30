# 🔒 CryptoAPI

**CryptoAPI** is a modern, client-side cryptography application built with React.js, Tailwind CSS, and Framer Motion by Allem Abdelaziz. It offers a user-friendly interface for encryption, decryption, and hashing using multiple cryptographic algorithms. Featuring a sleek, gray-themed design inspired by programming environments like VS Code, smooth animations, and loading effects, it ensures an intuitive and secure user experience.

<!-- ---

## 🌐 Live Demo

Access the deployed platform here:  
👉 [https://crypto-api.allem.pro/](https://crypto-api.allem.pro/) *(Update with actual deployment link after hosting)* -->

---

## 🚀 Key Features

- 🔐 **Symmetric Encryption/Decryption**:
  - AES (CBC mode) with user-provided keys (min 16 characters).
  - Triple DES with user-provided keys (min 24 characters).
- 🔑 **Asymmetric Encryption/Decryption**:
  - RSA with 2048-bit key pairs.
- 🔍 **Hashing**:
  - SHA-256 and SHA-512 using the Web Crypto API.
  - MD5 (for educational purposes, not secure for production).
- 🛠 **Key Generation**:
  - Generate RSA public/private key pairs with one click.
- 🎨 **User Interface**:
  - Dark gray theme with green accents, optimized for eye comfort.
  - Smooth tab transitions and result animations using Framer Motion.
  - Loading spinners during cryptographic operations.
  - Copy-to-clipboard functionality for keys, ciphertexts, plaintexts, and hashes.
  - Responsive design for desktop and mobile devices.
- 🛡️ **Security**:
  - Client-side processing eliminates server-side vulnerabilities.
  - Input validation for key lengths and RSA key formats.
  - User-friendly error handling with toast notifications.
- 📦 **Extensibility**:
  - Modular `cryptoService.js` for easy addition of new algorithms.

---

## 🛠 Tech Stack

- **Frontend:** React.js, Tailwind CSS, Framer Motion
- **Cryptography Libraries:** crypto-js (AES, Triple DES), jsencrypt (RSA)
- **Web Crypto API:** SHA-256, SHA-512
- **Notifications:** react-toastify
- **Loading Effects:** react-spinners
- **Build Tool:** Vite

---

## 📁 Project Structure

.├── src/│   ├── assets/│   │   └── favicon.svg           # Optional favicon (e.g., lock icon)│   ├── components/│   │   ├── KeyPairGenerator.jsx  # RSA key pair generation│   │   ├── EncryptionForm.jsx    # Encryption form│   │   ├── DecryptionForm.jsx    # Decryption form│   │   └── HashingForm.jsx       # Hashing form│   ├── services/│   │   └── cryptoService.js      # Cryptographic operations│   ├── App.jsx                   # Main app component│   ├── main.jsx                  # React entry point│   └── index.css                 # Tailwind CSS styles├── index.html                    # HTML entry point├── package.json                  # Dependencies and scripts├── vite.config.js                # Vite configuration├── tailwind.config.js            # Tailwind CSS configuration├── postcss.config.js             # PostCSS configuration└── README.md                     # Project documentation

---

## ⚙️ Environment Setup

### ✅ Prerequisites

- Node.js 16+ and npm

### 🔐 Configuration

No environment variables are required since this is a client-side application. All cryptographic operations are performed in the browser.

---

## ▶️ Getting Started

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/C4ll-0f-Du5ty/crypto-api.git
   cd crypto-api


Install Dependencies:
npm install


Run the Development Server:
npm run dev


Open your browser and navigate to http://localhost:5173 (or the port specified by Vite).



👤 Usage Guide



Action
Description



Generate Keys
Navigate to the "Keys" tab and click "Generate Keys" to create RSA key pairs.


Encrypt
Select AES, Triple DES, or RSA, enter plaintext and key, then click "Encrypt".


Decrypt
Select the same algorithm, enter ciphertext and key, then click "Decrypt".


Hash
Select SHA-256, SHA-512, or MD5, enter text, then click "Hash".



❗ Note: Copy results or keys using the "Copy" buttons for easy access. Store RSA private keys securely, as they cannot be recovered if lost.


📂 Core Components

KeyPairGenerator — Generates RSA public/private key pairs with copy functionality.
EncryptionForm — Handles encryption with AES, Triple DES, or RSA.
DecryptionForm — Handles decryption with AES, Triple DES, or RSA.
HashingForm — Generates hashes using SHA-256, SHA-512, or MD5.


🛡️ Security Considerations

Client-Side Processing: All operations are performed in the browser, eliminating risks like SQL injection or server-side buffer overflows.
Key Management: Users must securely store AES/Triple DES keys and RSA private keys.
Input Validation: Enforces minimum key lengths (16 for AES, 24 for Triple DES) and valid RSA keys.
RSA Limitations: Suitable for short messages only; consider hybrid encryption for longer data.
MD5 Warning: Included for educational purposes but cryptographically broken; avoid for secure applications.
Accessibility: ARIA labels and focus states ensure compatibility with screen readers and keyboard navigation.


🔍 Testing
The application has been thoroughly tested for:

Correct encryption/decryption with AES, Triple DES, and RSA.
Accurate hashing with SHA-256, SHA-512, and MD5 (e.g., SHA-256 of "test" produces 9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08).
Error handling for invalid inputs (e.g., short keys, invalid ciphertexts).
Smooth animations and loading spinners during operations.
Responsive design across desktop and mobile devices.
Accessibility with screen readers and keyboard navigation.

To test manually:

Generate RSA keys and verify encryption/decryption.
Test AES and Triple DES with various key lengths.
Compare hash outputs with known values.
Ensure copy-to-clipboard and animations work as expected.


📦 Extensibility
To add a new algorithm:

Update cryptoService.js with new encryption/decryption or hashing methods.
Add the algorithm to dropdowns in EncryptionForm.jsx, DecryptionForm.jsx, or HashingForm.jsx.
Update UI to handle any specific input requirements.


🤝 Contributing
Pull requests are welcome. For large changes, please open an issue first to discuss your ideas and goals.

📄 License
This project is licensed under the MIT License.

📬 Contact
Developed by Allem Abdelaziz📧 Email: allemhamed98@gmail.com🔗 GitHub: https://github.com/C4ll-0f-Du5ty💼 Portfolio: https://allem.pro/```
