async function queryOpenAI(prompt) {
    const apiKey = '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';
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            prompt: prompt,
            temperature: 0,
           // max_tokens: 150
            // Add other parameters as needed
        })
    });
    const data = await response.json();
    return data;
}

queryOpenAI('Once upon a time, in a land far, far away...')
    .then(result => {
        console.log(result.choices[0].text);
    })
    .catch(error => {
        console.error('Error querying OpenAI API:', error);
    });
