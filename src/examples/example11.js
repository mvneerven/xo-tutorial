
async function example11() {
    const me = this;

    // create link for two-way binding
    xo.form.link(null, instances => {
        me.person = instances.person;
    })

    const schema = {
        model: {
            instance: {
                person: {
                    name: {
                        first: "John",
                        last: "Doe"
                    },
                    birthdate: "1972-08-12",
                    description: "I'm an unknown person"
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
                        bind: "#/person/name"
                    },
                    {
                        name: "birthdate",
                        type: "date",
                        caption: "Your birthdate please, #/person/name/first",
                        bind: "#/person/birthdate",
                        min: "1910-01-01",
                        max: "2005-01-01"
                    },

                    {
                        type: "multiline",
                        name: "message",
                        caption: "Describe yourself",
                        placeholder: "Describe yourself in one or two sentences...",
                        autogrow: true,
                        bind: "#/person/description",
                        info: "This message textarea is bound to a shared model and can be changed by code outside ExoForm"
                    }

                ]
            }
        ]
    }
    let frm = await xo.form.run(schema, {
        on: {
            post: e => {
                alert(JSON.stringify(e.detail.postData, null, 2))
            }

        }
    });


    // add non-XO button to illustrate two-way binding
    const btn = document.createElement("button");
    btn.style = "position: absolute; bottom: 20px; right: 20px; font-size: x-large"
    btn.innerHTML = "Change description";
    btn.addEventListener("click", e => {

        me.person.description = "I changed the message from outside ExoForm";
    });

    frm.appendChild(btn);

    return frm;
}

export default { n: "Two Way Model Binding", f: example11 };