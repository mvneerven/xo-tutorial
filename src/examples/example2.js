async function example2() {
    const schema = {
        pages: [{
            fields: [
                {
                    type: "text",
                    name: "name",
                    placeholder: "John Doe",
                    caption: "Enter your name"
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

export default {n: "Options", f: example2};