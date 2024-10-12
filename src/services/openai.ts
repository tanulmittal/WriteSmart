import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function analyzeText(text: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an AI writing assistant. Analyze the given text and provide feedback on grammar, style, content enhancement, and tone. Format your response in plain text with clear section headers: 'Grammar and Style:', 'Content Enhancement:', and 'Tone Analysis:'. Do not use any special formatting in your response."
        },
        {
          role: "user",
          content: `Analyze the following text:\n\n${text}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    const result = response.choices[0].message.content;
    if (!result) throw new Error('No response from OpenAI');

    // Parse the plain text response into sections
    const sections = result.split(/(?=Grammar and Style:|Content Enhancement:|Tone Analysis:)/);
    const feedback = {
      grammar: sections.find(s => s.startsWith('Grammar and Style:'))?.replace('Grammar and Style:', '').trim() || 'No grammar feedback available.',
      content: sections.find(s => s.startsWith('Content Enhancement:'))?.replace('Content Enhancement:', '').trim() || 'No content enhancement suggestions available.',
      tone: sections.find(s => s.startsWith('Tone Analysis:'))?.replace('Tone Analysis:', '').trim() || 'No tone analysis available.',
    };

    return feedback;
  } catch (error) {
    console.error('Error analyzing text:', error);
    throw error;
  }
}