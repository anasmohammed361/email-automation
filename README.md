# Email Automation

## **Setup**

### **Prerequisites**

Make sure you have Node.js and **`pnpm`** installed on your system.

### **Installation**

1. Clone this repository:
    
    ```bash
    git clone https://github.com/anasmohammed361/email-automation.git
    ```
    
2. Navigate to the project directory:
    
    ```bash
    cd email-automation
    ```
    
3. Install dependencies using **`pnpm`**:
    
    ```bash
    pnpm install
    ```
    

### **Environment Variables**

Before running the project, make sure to set up the following environment variables:

- **`EMAIL_SMTP_PASSWORD`**: Password for the SMTP server ( Google App Password ).
- **`EMAIL_USER`**: Email address to send emails from.
- **`EMAIL_FROM`**: Sender name/email address.

You can set these environment variables either directly in your system or by creating a **`.env`** file in the root directory of the project and adding them there.

Example **`.env`** file:

```

EMAIL_SMTP_PASSWORD=your_smtp_password
EMAIL_USER=your_email@example.com
EMAIL_FROM=Your Name <your_email@example.com>
```

## **Usage**

### **Development Mode**

To run the project in development mode, execute the following command:

```bash
pnpm dev
```

This command will start the development server with live reloading enabled.

### **Building**

To build the project, execute:

```bash
pnpm build
```

### **Running**

After building the project, you can run the built version using:

```bash
pnpm start
```

This command will start the project from the built files.

## **Contributors**

- [anasmohammed361](https://github.com/anasmohammed361/)

## **License**

This project is licensed under the MIT License - see the LICENSE file for details.