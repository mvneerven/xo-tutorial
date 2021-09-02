async function example7() {
    const schema = {
        pages: [{
            fields: [
                {
                    type: "name",
                    name: "name",
                    caption: "Enter your name",
                    info: "Please provide first and last name for our records"
                },
                {
                    type: "multiline",
                    caption: "Your comments",
                    autogrow: true
                }
            ]
        },
        {
            fields: [
                {
                    type: "tags",
                    name: "tags",
                    caption: "Add interests",
                    value: ["Travel", "Reading", "Netflix"]
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

export default { n: "Information", f: example7 };