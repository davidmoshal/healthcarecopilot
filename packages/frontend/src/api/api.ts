import OpenAI from "openai";

const apiKey = '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';
const openai = new OpenAI({apiKey});

export async function query(prompt: string) {
    let output = ""
    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt}],
        stream: true,
    });
    for await (const chunk of stream) {
        output += chunk.choices[0]?.delta?.content || "";
    }

    return output
}

