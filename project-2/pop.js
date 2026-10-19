//change 5 to the total number of questions
var total=8
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()
var feedback=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Wahoo!"
compliments[1]="Super!"
compliments[2]="Amazing!"
compliments[3]="AWESOME."
compliments[4]="Perfect!"
compliments[5]="Yippee!"
compliments[6]="Yessss!"
compliments[7]="You're on FIRE!"
compliments[8]="FABULOUS!"
compliments[9]="You ROCK!"
compliments[10]="Yabadabadoo!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which statement best describes how generative AI tools such as ChatGPT produce responses?"
choice1[1]="They search large collections of information and combine relevant content into a response."
choice1[2]="They generate responses by predicting patterns based on training data and the context of the user's prompt."
choice1[3]="They retrieve information from their training data and reorganize it into new sentences."
choice1[4]="They compare potential responses against reliable sources before selecting the most accurate answer."

question[2]="Which statement best describes an AI hallucination?"
choice2[1]="An AI system generates a response that reflects biases present in its training data."
choice2[2]="An AI system misinterprets a prompt and produces information unrelated to the user's intended question."
choice2[3]="An AI system combines information from multiple sources without identifying where the information originated."
choice2[4]="An AI system generates information that appears credible but is factually inaccurate or fabricated."

question[3]="A student asks ChatGPT to recommend peer-reviewed articles for a research paper. The AI provides a citation with an author, article title, journal name, and DOI. What is the most appropriate next step?"
choice3[1]="Search for the article through a library database, scholarly search engine, or publisher's website and confirm that the citation details match the actual publication."
choice3[2]="Enter the DOI into a DOI resolver and assume the citation is accurate if it leads to a published article."
choice3[3]="Ask ChatGPT to verify the citation against its original sources and provide a link to the article."
choice3[4]="Search for the article title online and consider the citation verified if the title appears in scholarly search results."

question[4]="A student asks a generative AI tool to describe the characteristics of an effective leader. The response emphasizes traits commonly associated with Western business culture while overlooking leadership approaches valued in other cultures. What does this example most clearly illustrate?"
choice4[1]="The AI system is deliberately prioritizing Western leadership models because they are more widely accepted."
choice4[2]="The AI system is personalizing its response based on the student's cultural background and likely expectations."
choice4[3]="The AI system may reproduce cultural biases and perspectives represented disproportionately in its training data."
choice4[4]="The AI system is providing an objective summary because it has identified the most frequently discussed leadership characteristics."

question[5]="A student is using a generative AI tool to help organize notes from a group project. The notes include classmates' names, contact information, and personal comments about their contributions. What is the most appropriate way to use AI while protecting their privacy?"
choice5[1]="Remove classmates' names before uploading the notes, since anonymizing the document eliminates privacy concerns."
choice5[2]="Upload the notes using a paid AI account because paid subscriptions provide greater protection for personal information."
choice5[3]="Remove identifying and sensitive information, including details that could indirectly identify classmates, before using the AI tool."
choice5[4]="Upload the notes but delete the conversation afterward to prevent the information from being retained."

question[6]="An instructor allows students to use generative AI for brainstorming and developing an outline but prohibits AI-generated text in the final paper. A student uses ChatGPT to develop an outline and then asks it to draft several paragraphs, which the student substantially revises before submitting. How should this use of AI be evaluated?"
choice6[1]="The student followed the policy because substantial revisions transformed the AI-generated paragraphs into original work."
choice6[2]="The student violated the policy because using AI to generate draft paragraphs exceeded the permitted brainstorming and outlining activities."
choice6[3]="The student followed the policy as long as the final submission accurately reflects their own ideas and arguments."
choice6[4]="The student violated the policy only if the AI-generated paragraphs were submitted without acknowledging ChatGPT's contribution."

question[7]="A student uses ChatGPT to brainstorm ideas, organize an outline, and suggest revisions to a research paper. The instructor permits these activities but requires students to disclose how they used AI. Which approach best fulfills this requirement?"
choice7[1]="Include ChatGPT in the reference list using the appropriate citation format, since citing the tool provides sufficient disclosure."
choice7[2]="Add a statement indicating that ChatGPT was used during the writing process without identifying the specific tasks it supported."
choice7[3]="Describe the use of ChatGPT only if its suggested wording appears directly in the final submitted paper."
choice7[4]="Provide a statement identifying the AI tool and explaining how it was used for brainstorming, outlining, and revision, following the instructor's disclosure guidelines."

question[8]="A student uses generative AI to help draft a research paper. After submitting the assignment, the instructor identifies several inaccurate claims and a fabricated citation. The student explains that the information came from the AI tool. Which statement best describes the student's responsibility?"
choice8[1]="The student remains responsible for verifying the accuracy of AI-generated content and citations before submitting the assignment."
choice8[2]="The student's responsibility depends on whether the instructor explicitly required verification of AI-generated information."
choice8[3]="The student shares responsibility with the AI provider because the inaccuracies originated from the tool rather than the student's research."
choice8[4]="The student has fulfilled their responsibility if they disclose their AI use and correct the inaccuracies after the instructor identifies them."



solution[1]="b"
solution[2]="d"
solution[3]="a"
solution[4]="c"
solution[5]="c"
solution[6]="b"
solution[7]="d"
solution[8]="a"

feedback[1]="Generative AI models learn patterns from training data and use those patterns, along with the context of a prompt, to generate responses. They do not automatically verify the accuracy of the information they produce."
feedback[2]="An AI hallucination occurs when a generative AI system produces information that is inaccurate or fabricated, even though it may sound convincing. This is why AI-generated information should be verified using reliable sources."
feedback[3]="AI-generated citations may contain fabricated or incorrect details, even when they include a DOI. Students should locate the actual publication through a library database, scholarly search engine, or publisher's website and verify that the author, title, journal, and DOI match."
feedback[4]="Generative AI systems can reproduce cultural biases and perspectives that are overrepresented in their training data. Responses may appear neutral while overlooking alternative viewpoints, making it important to critically evaluate the information presented."
feedback[5]="Protecting privacy requires removing both direct identifiers, such as names and contact information, and details that could indirectly identify individuals. Paid subscriptions or deleting conversations do not automatically eliminate privacy risks."
feedback[6]="Students must follow the specific AI-use guidelines established for each assignment. Permission to use AI for brainstorming or outlining does not automatically extend to drafting. Substantially revising AI-generated text or disclosing its use does not override assignment restrictions."
feedback[7]="When AI disclosure is required, students should identify the tool used and explain how it contributed to their work. A general acknowledgment or citation alone may not satisfy an instructor's requirements. Students should follow the specific disclosure guidelines provided."
feedback[8]="Students remain responsible for the accuracy, integrity, and quality of their submitted work, including AI-assisted content. They should verify claims and citations before submission rather than relying on AI-generated information or correcting errors only after an instructor identifies them."

