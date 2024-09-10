import { model } from "@/utils/constants";

export const generateQuiz = async (url) => {
  const prompt = `You are a sophisticated natural language processing AI specialized in analyzing article/blog data using its url. 
  The url link is as follows: ${url} 
  Perform the following task using the article/blog data in url:
  If the article/blog is not in English Output the following text: {"error": "I cannot comprehend this language at the moment."}
  else, Check whether the article/blog data content is educational If yes do the follwoing
  generate 10 quiz MCQs related to that data and output the quiz in following JSON format:
  { "title":"title of the quiz",
    "quizzes": [
      { 
        "question": "Question 1", 
        "options": ["Option A", "Option B", "Option C", "Option D"], 
        "correct_option": "Option A" 
      }, 
      {
        "question": "Question 2", 
        "options": ["Option A", "Option B", "Option C", "Option D"], 
        "correct_option": "Option B"
      }, ..., 
      {
        "question": "Question 10", 
        "options": ["Option A", "Option B", "Option C", "Option D"], 
        "correct_option": "Option C"
      }
    ]
  }.
  The quizz should have one question and 4 options only.`;

  const result = await model.generateContent(prompt);
  return JSON.parse(result.response.text());
};
