async function example10() {
    const schema = {
        model: {
            instance: {
                person: {
                    name: {
                        first: "John",
                        last: "Doe"
                    },
                    birthdate: "1972-08-12"
                }
            }
        },
        pages: [
            {
                legend: "Model Binding Form",
                intro: "This form shows how to manage a bound datamodel using ExoForm, using the 'bind' property",
                fields: [
                    {
                        name: "name",
                        type: "name",
                        caption: "Name",
                        bind: "instance.person.name"
                    },
                    {
                        name: "birthdate",
                        type: "date",
                        caption: "Your birthdate please, @instance.person.name.first",
                        bind: "instance.person.birthdate",
                        min: "1910-01-01",
                        max: "2005-01-01"
                    }
                    
                ]
            }
        ]
    }
    return await xo.form.run(schema, {
        on: {
            post: e => {
                alert(JSON.stringify(e.detail.postData, null, 2))
            }
        }
    })
}

export default { n: "Model Binding", f: example10 };