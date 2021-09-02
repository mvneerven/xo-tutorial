async function example4() {
    const schema = {
        pages: [{
            fields: [
                {
                    type: "name",
                    name: "name",
                    caption: "Enter your name",
                    required: true // adding validation
                },
                { 
                    type: "multiline",
                    caption: "Your comments",
                    autogrow: true
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

export default {n: "Validation", f: example4};