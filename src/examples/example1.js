async function example1() {
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
    return await xo.form.run(schema)
}

export default {n: "Starter Form", f: example1};