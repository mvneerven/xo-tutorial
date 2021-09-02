async function example11() {
    const me = this;
    
    me.person = {
        name: {
            first: "John",
            last: "Doe"
        },
        birthdate: "1972-08-12",
        description: "I'm an unknown person"
    };

    const schema = {
        model: {
            instance: {
                person: me.person
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
                    },

                    {
                        type: "multiline",
                        name: "message",
                        caption: "Describe yourself",
                        placeholder: "Describe yourself in one or two sentences...",
                        autogrow: true,
                        bind: "instance.person.description",
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
            },
            dataModelChange: e=> {
                
                if(e.detail.state === "ready" && e.detail.model.instance.person)
                    me.person = e.detail.model.instance.person
            }
        }
    });


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