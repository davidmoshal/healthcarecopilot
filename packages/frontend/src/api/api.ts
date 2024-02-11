import OpenAI from "openai";

const openai = new OpenAI({apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true});

export async function query(prompt: string) {
    let output = ""
    const stream = await openai.chat.completions.create({
        model: "gpt-4-0125-preview",
        messages: [{ role: "user", content: prompt}],
        stream: true,
    });
    for await (const chunk of stream) {
        output += chunk.choices[0]?.delta?.content || "";
    }

    return output
}

