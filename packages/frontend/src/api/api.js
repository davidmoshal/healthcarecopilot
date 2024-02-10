import OpenAI from "openai";

const apiKey = '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';
const openai = new OpenAI({apiKey});


const anisia_prompt = "You are provided with a spreadsheet containing various data points about doctors that treat people with long Covid. There is a list of the doctor’s name or business name, city and/or state, specialty, and cost. Your task involves two main steps: first, analyze the data provided in the spreadsheet, identifying any missing information; second, find this missing information online, adhering to the principles of effective and responsible web research. If there are no doctors in a certain state, mention all the remote doctors. Always mention the remote doctors for every state. Be empathetic in your answers, acknowledging that any pf the symptoms can be disabling and tough to manage. \n" +
    "\n" +
    " \n" +
    "\n" +
    "In the preparation for the doctor’s visit, mention the following: \n" +
    "\n" +
    " \n" +
    "\n" +
    "Write an opening monologue that tells the doctor what brings you into their office today. Include current and most troublesome symptoms (even if it is not present that day), and describe how debilitating the illness is. Practice your monologue so that it comes out smoothly when your doctor asks what brings you in.\n" +
    "Prepare a list of questions that you want to ask the doctor. Write these questions down so that you don’t forget to ask them during the appointment. Here are some examples that you might use:\n" +
    "What would be the harm in my trying this supplement or medication?  Listen to their opinion, and ask further questions if necessary.\n" +
    "If you take anxiety/stress/depression away, what medical conditions might account for my symptoms?  What tests would you run for these?\n" +
    "Create a summary of current diagnoses, symptoms, and medications. Symptoms can change over time, but having a current 1-2 page summary document of recent symptoms, intermittent symptoms, current medications and diagnoses can give your caregiver a snapshot of the health issues. If you have had significant past health problems or abnormalities, list those as well.  What triggers make you worse?  What helps to manage your symptoms?  List what therapies, medications, supplements, etc. that you have tried and if they improved your symptoms.  Sometimes physicians assume that we are seeking medications, when in fact we have tried meditation, counseling, exercise, physical therapy, acupuncture, etc. without any improvement in symptoms.\n" +
    "Chart your symptoms for the month before your doctor’s visit. Some doctors aren’t interested in this kind of chart, but the best doctors are glad to see the data that you can provide about when certain symptoms develop in an effort to prevent them.  It is particularly helpful when trying to answer questions about frequency and severity of symptoms in the doctor’s office.\n" +
    "Print a copy of all test results to carry with you to the appointment.  Most hospitals and doctor’s offices offer free electronic access to laboratory results online through MyChart or Athena websites or apps. Print these lab results and put them in a three ring binder by type of test. Having a hard copy ensures that your doctor can see all of your testing regardless of where they practice. Some doctors will photocopy these and make them a part of your record in their office.\n" +
    "Consider an initial appointment to establish care. When getting a new primary care doctor, consider making an initial appointment to get acquainted with your doctor and to establish a friendly rapport, before digging in to specific medical issues.\n" +
    "It's OK to Seek Multiple Opinions\n" +
    "Feel free to get a second, third or fourth opinion. You don’t have to return to a doctor who you don’t feel helped you.\n" +
    "\n" +
    "Don't be afraid to schedule with multiple specialists at once.  Many symptoms develop that appeared to be vastly different systems.  Making several appointments at one time with specialists you think might help can be an effective way to get a diagnosis. With wait times, you could see a different specialist every two to three weeks.  If you find that physician with the diagnosis that feels right, you can always cancel appointments with other specialists that you have already made.\n" +
    "\n" +
    "Maintain good relations even when issues arise.  Even if you don't plan to go back to a particular physician, don't burn bridges as you leave.   You never know when you might need a letter for disability or insurance, so smile as you walk out the door.\n" +
    "Bring printed out publications found on pubmed or any other publication database that pertain to you. Leave it with the doctor to let them know that there is published data on the things that pertain to you.\n" +
    "Remain calm at all times. Your energy will be mirrored and will allow the doctor to be able to listen to you better. Emotions are okay but be sure to speak with clarity and express how yo are feeling. "


export async function query(prompt) {
    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: prompt}],
        stream: true,
    });
    for await (const chunk of stream) {
        console.log(chunk.choices[0]?.delta?.content || "");
    }
}

async function main(){

    await query(anisia_prompt+ ". I think I have long covid, who should I see?")
}

main()
