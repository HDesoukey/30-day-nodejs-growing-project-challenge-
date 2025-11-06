# 🧩 30-Day-Growing Project Challenge

[![Made with Node.js](https://img.shields.io/badge/Made%20with-Node.js-green?style=for-the-badge&logo=node.js)]()
[![Express.js](https://img.shields.io/badge/Powered%20by-Express.js-black?style=for-the-badge&logo=express)]()
[![Days](https://img.shields.io/badge/Challenge-30%20Days-blueviolet?style=for-the-badge)]()

---

## 🎯 Goal  
Learn how backend applications handle and *store* secrets and encrypted data in real projects, so I become fluent at 
1. building secure systems
2. recognising weak designs during *authorized* security testing later.

This challenge is about **understanding developer-side encryption patterns** (what devs usually implement), common mistakes, and secure alternatives — not about exploiting others. The aim is to improve both development skills and the ability to assess systems safely and ethically.

---

## ⚖️ Ethical notice
All experiments and tests are **local only**. Never attempt to probe, attack, or exploit systems you do not own or have explicit permission to test. The goal here is defensive learning: build knowledge so you can **harden** systems and, when authorized, responsibly report findings.

---

## 🧠 Concept  
Each challenge adds a new piece — logic, security, or structure — to the same evolving backend app.  
The goal is to **practice real backend development thinking**, preparing for **bug hunting and security testing** later.

---

## 🧠 Learning objectives (what I want to understand)
- **Encryption basics:** symmetric vs asymmetric encryption — when developers use each.  
- **Hashing vs encryption:** what to store (password hashes) and common mistakes (reversible vs irreversible storage).  
- **Key management:** where keys are kept, risks of hard-coded keys, and secure storage patterns (env vars, vaults).  
- **Transport security:** role of TLS, common misconfigurations, and certificate handling in development.  
- **Tokens & signing:** how JWTs and signed tokens are created and validated (lifetimes, algorithms, key rotation).  
- **Common developer mistakes:** fixed IVs, reused keys, weak randomness, storing secrets in repos or public files.  
- **Safe defaults & libraries:** sensible libraries/patterns devs should use to avoid mistakes.

---

## 🛠️ Tech Stack  
- **Node.js**
- **Express.js**
- **express-validator**
- *(more tools and libraries will be added as the system evolves)*

---

## 🔬 How this shapes the project workflow
Each upcoming mini-challenge will intentionally focus on **one small encryption/secret-handling concept**:
- Stage A: intentionally simple examples showing *how developers usually implement it* (e.g., a toy encryption endpoint, a JWT issuer).  
- Stage B: document the **signals** that would indicate a weak implementation (what to look for during recon).  
- Stage C: replace the toy example with a **hardened** alternative and note why it’s better.

At no point will vulnerable services be deployed publicly without access controls. Everything will be local or behind restricted access.

---

## ✅ What I will record for each mini-exercise
- short description of the pattern implemented (what devs typically do)  
- one reconnaissance signal to look for (e.g., presence of `X-App-Version`, hard-coded key in source)  
- why the pattern is weak or acceptable (short bullet)  
- a safe hardening recommendation (what to do instead)  
- time spent

---

## 📚 Starter resources (for quick reading)
- Intro to symmetric vs asymmetric encryption (search: “symmetric vs asymmetric cryptography explainer”)  
- OWASP Cryptographic Storage Cheat Sheet (search: “OWASP cryptographic storage best practices”)  
- JWT security pitfalls (search: “JWT none alg attack explanation” for conceptual history only)  
- Key management basics (search: “secure key management env vars vs vaults”)

---

## 📋 Current Progress – Challenge 3  
### 🧩 Input Validation & Basic API Hardening
This part focuses on validating user input and hiding sensitive backend information.

**Endpoints:**
- `/` – basic hello world  
- `/login` – simulated login route  
- `/submit` – accepts and validates input (email & password)

**Security Enhancements:**
```js
app.disable('x-powered-by') // hides Express header
```
ذ
## 🚀 How to Run
```js
npm init -y
npm install express express-validator
node app.js
```

---

## 🗓30-Day-Growing Project Challenge Roadmap  
_The goal: build practical backend security skills while improving my own project step-by-step._

| Day | Challenge | Focus Area | Description |
|-----|------------|-------------|--------------|
| 1 | Setup basic Express server | Backend Basics | Create a simple server and learn route handling. |
| 2 | Add environment variables | Key Management | Store secrets (API keys, DB credentials) in `.env`. |
| 3 | Implement input validation | Security Basics | Sanitize and validate user inputs to prevent injections. |
| 4 | Build registration route | Authentication | Create `/register` endpoint and store user data safely. |
| 5 | Add bcrypt hashing | Hashing | Hash passwords before saving to the database. |
| 6 | Create login route | Authentication | Verify user credentials securely. |
| 7 | Generate JWT tokens | Token & Signing | Learn how JWTs are created, signed, and verified. |
| 8 | Protect routes with middleware | Access Control | Use middleware to require JWT authentication. |
| 9 | Learn token expiration | Token Lifetime | Handle token expiry and refresh logic. |
| 10 | Add logout functionality | Token Revocation | Invalidate JWT tokens on logout. |
| 11 | Study encryption basics | Encryption | Understand symmetric vs asymmetric encryption. |
| 12 | Encrypt sensitive fields | Data Protection | Try encrypting data like email or address. |
| 13 | Handle AES encryption | Symmetric Encryption | Use AES to encrypt/decrypt short data. |
| 14 | Experiment with RSA | Asymmetric Encryption | Generate RSA keys and use them for encryption. |
| 15 | Store keys securely | Key Management | Move private keys outside the repo. |
| 16 | Setup HTTPS locally | Transport Security | Learn TLS certificates and self-signed certs. |
| 17 | Handle JWT signature algorithms | Token Security | Compare HS256 vs RS256 and their risks. |
| 18 | Add rate limiting | DoS Protection | Prevent brute force attacks on login routes. |
| 19 | Use helmet middleware | Secure Headers | Add security headers for Express apps. |
| 20 | Implement request logging | Monitoring | Track API activity for debugging & security. |
| 21 | Add compression | Performance | Optimize response size with gzip. |
| 22 | Learn about IV & randomness | Crypto Theory | Avoid reusing IVs or weak random values. |
| 23 | Study hash collisions | Crypto Theory | Learn how collisions affect password security. |
| 24 | Add 2FA mockup | Authentication | Implement basic two-factor authentication logic. |
| 25 | Build small report tool | Practice | Log encryption/decryption actions in a JSON file. |
| 26 | Review code for secrets | Secure Coding | Detect hard-coded secrets and remove them. |
| 27 | Add error handling | Stability | Create global error middleware for Express. |
| 28 | Secure CORS policy | Access Control | Allow only trusted origins. |
| 29 | Deploy to test server | Deployment | Host on a safe test environment. |
| 30 | Final review | Recap | Write README update summarizing what you learned. |

---

## Next step
I’ll add these focused mini-exercises into the README file so each day teaches one concrete encryption/secret-handling idea according to the roadmap.

---
