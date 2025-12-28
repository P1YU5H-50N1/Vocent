# Vocent

## Overview

Vocent is a voice-based email sending application. It allows users to compose and send emails using voice commands. The application uses the Web Speech API for voice recognition and synthesis. The backend is a Flask server that sends emails using SMTP.

## Tech Stack

*   **Frontend:** HTML, CSS, JavaScript, Axios
*   **Backend:** Flask (Python)
*   **Dependencies:**
    *   `flask`: Web framework for Python.
    *   `axios`: Promise-based HTTP client for the browser.

## Features

*   Voice-based email composition and sending.
*   Email address validation.
*   Voice responses to guide the user.

## Project Structure

```
/Users/Piyush/Desktop/Projects/RepoRevamper/Vocent/
├───app.py
├───CONSTANTS.py
├───index.css
├───index.html
├───index.js
├───Pipfile
├───Pipfile.lock
└───.git/...
```

## Getting Started

### Prerequisites

*   Python 3.8
*   `pipenv`

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    ```
2.  Install Python dependencies:
    ```bash
    pipenv install
    ```

### Configuration

1.  In `CONSTANTS.py`, configure the following variables:
    *   `SMTP_SERVER`: Your SMTP server address.
    *   `SMTP_PORT`: Your SMTP server port.
    *   `CONVEYOR_EMAIL`: Your email address for sending emails.
    *   `PASSWORD`: Your email password.

### Usage

1.  Start the Flask server:
    ```bash
    pipenv run python app.py
    ```
2.  Open `http://127.0.0.1:5000/` in your web browser (preferably Chrome).
