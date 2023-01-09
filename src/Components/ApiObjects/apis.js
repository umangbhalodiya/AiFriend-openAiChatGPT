export const apis = [
    {
        name: {
            title: "Q&A",
            desc: "Answer questions based on existing knowledge."
        },
        props: {
            model: "text-davinci-003",
            temperature: 0,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }

    },
    {
        name: {
            title: "Chat",
            desc: "Open ended conversation with an AI assistant."
        },
        props: {
            model: "text-davinci-003",
            temperature: 0.9,
            max_tokens: 500,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0.6,
            stop: [" Human:", " AI:"],
        }
    },
    {
        name: {
            title: "Grammer Correction",
            desc: "Corrects sentences into standard English."
        },
        props: {
            model: "text-davinci-003",
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        }
    },
    {
        name: {
            title: "Explain Code",
            desc: "Explain a complicated piece of code."
        },
        props: {
            model: "code-davinci-002", temperature: 0,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
            stop: ["\"\"\""],
        }
    },
]