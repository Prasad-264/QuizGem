# QuizGem: A Quiz Generator App

This is a quiz generator app that takes a URL as input and generates a quiz based on the content of the URL. The quiz consists of 10 questions, with a 60-second timer for each question, and provides a scorecard at the end of the quiz. The app also includes error handling for unsupported URLs.

## Features

- **Dynamic Quiz Generation**: Enter any educational URL to generate a 10-question quiz.
- **Timed Questions**: Each question has a 60-second timer.
- **Scorecard**: Displays total score, correct/wrong answers, and time taken upon completion.
- **Loading State**: Shows a loading animation while generating the quiz.
- **Error Handling**: Gracefully handles errors when an invalid or unsupported URL is provided.
- **Try Again Option**: Users can retry with a new URL if the previous one fails.
  
## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Prasad-264/QuizGem.git
    cd QuizGem
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your Gemini API key:
      ```bash
      NEXT_PUBLIC_GEMINI_API_KEY=your-api-key-here
      ```

4. Run the app locally:
    ```bash
    npm run dev
    ```

5. Visit the app at `http://localhost:3000`.

## Usage

1. Enter a valid educational URL in the input field.
2. Click on **Generate Quiz** to start the quiz generation process.
3. The app will show a loading animation while generating the quiz.
4. Once the quiz is ready, you can answer each question within 60 seconds.
5. Upon completion, the scorecard will show your score, correct answers, wrong answers, and total time taken.
6. If the URL is unsupported or invalid, an error message will appear with a "Try Again" button to re-enter the URL.

## Environment Variables

- **NEXT_PUBLIC_GEMINI_API_KEY**: Required to interact with the Gemini API for quiz generation.

## Demo

You can view a live demo of the app [here](https://quiz-gem.vercel.app/).