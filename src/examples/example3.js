async function example3() {
    const schema = {
        pages: [{
            fields: [
                {
                    type: "text",
                    name: "name",
                    placeholder: "John Doe",
                    caption: "Enter your name"
                },
                { // adding extra fields
                    type: "multiline",
                    caption: "Your comments",
                    autogrow: true
                },
                { 
                    type: "switch",
                    name: "switch",
                    caption: "On"
                    
                }
            ]
        }]
    };
    return await xo.form.run(schema, {
        on: {
            post: e => {
                alert(JSON.stringify(e.detail.postData, null, 2))
            }
        }
    })
}

export default {n: "More fields ", f: example3};