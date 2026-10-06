# 🔐 Password Generator

A simple and responsive **Password Generator** built with **React.js** and **Tailwind CSS**.

The application allows users to generate secure random passwords by choosing the password length and whether to include numbers and special characters.

## 🚀 Features

* Generate random passwords
* Adjustable password length from **8 to 16 characters**
* Option to include numbers
* Option to include special characters
* One-click password copying
* Responsive UI
* Password automatically regenerates when options are changed

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **Tailwind CSS**
* **Vite**
* **React Hooks**

  * `useState`
  * `useCallback`
  * `useEffect`
  * `useRef`

## 📂 Project Structure

```text
password-generator/
│
├── public/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

Go to the project directory:

```bash
cd password-generator
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in your terminal, usually:

```text
http://localhost:5173
```

## 🎯 How It Works

The password generator uses React state to manage:

* Password length
* Number inclusion
* Special character inclusion
* Generated password

`useCallback` is used to memoize the password generation function, while `useEffect` automatically generates a new password whenever the selected options change.

## 📋 Example

If the user selects:

```text
Length: 12
Numbers: ✓
Special Characters: ✓
```

The application may generate a password such as:

```text
aB7@xK2#mP9!
```

Every generated password is random.

## 🔮 Future Improvements

* Add password strength indicator
* Add uppercase/lowercase customization
* Add exclude-character option
* Add password history
* Add dark/light mode
* Add deployment with Vercel

## 👨‍💻 Author

**Ashish Patel**

Computer Science Engineering Student
IIIT Kalyani

---

⭐ If you found this project useful, consider giving it a star!
