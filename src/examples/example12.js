async function example12() {

    /*
        In this example, age is checked based on entered birth date
    */

    const schema = {
        model: {
            instance: {
                state: {
                    legal: false,
                },
                data: {
                    name: "Marc",
                    date: "",
                    isChecked: false
                }
            }
        },
        pages: [
            {
                legend: "Continue to liquor store",
                fields: [
                    {
                        type: "date",
                        bind: "#/data/date",
                        caption: "Enter your birthday",
                        actions: [
                            {
                                if: {
                                    over18: true
                                },
                                do: {
                                    set: ["#/state/legal", true]
                                },
                                else: {
                                    set: ["#/state/legal", false]
                                }
                            }
                        ]
                    },
                    {
                        type: "checkbox",
                        caption: "I confirm that I'm over 18",
                        bind: "#/data/isChecked",
                        actions: [
                            {
                                do: {
                                    enable: ["#/state/legal"]
                                }
                            },
                            {
                                if: {
                                    is: true
                                },
                                do: {
                                    toLiquorStore: []
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
    
    let frm = await xo.form.run(schema, {
        on: {
            ruleContextReady: e => {
                this.ruleContext = e.detail.context
            }
        },
        rules: {
            actions: {
                toLiquorStore: (a, b) => {
                    document.location.href = "https://en.wikipedia.org/wiki/Liquor_store"
                }
            },
            operators: {
                over18: (a, b) => {
                    b = this.ruleContext.var(b);
                    let age = xo.core.calcAge(b);
                    if (!isNaN(age))
                        return age >= 18 === a;
                }
            }
        }
    });
    

    return frm;
}

export default { n: "Rules Engine", f: example12 };