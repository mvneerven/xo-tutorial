async function example9() {
    const schema = {
        pages: [{
            fields: [
                {
                    type: "email",
                    name: "email",
                    caption: "Your email address",
                    placeholder: "john@dowe.com",
                    prefix: {
                        icon: "ti-email"
                    }
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

export default { n: "Controls", f: example9 };