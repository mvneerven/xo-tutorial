async function example9() {
    const schema = {
        model: {
            instance: {
                data: {
                    email: ""
                }
            }
        },
        pages: [{
            fields: [
                {
                    type: "email",
                    name: "email",
                    bind: "#/data/email",
                    caption: "Your email address",
                    placeholder: "john@dowe.com",
                    prefix: {
                        icon: "ti-email"
                    },
                    invalidmessage: "That's not a correct email address",
                    info: "Please use a business email address",
                    tooltip: "Enter your email address",
                    remark: "This is an email control",
                    disabled: false,
                    actions: [
                        {
                            do: {
                                convert: ["#/data/email", "low"]
                            }
                        }
                    ]

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

export default { n: "Standard control properties", f: example9 };