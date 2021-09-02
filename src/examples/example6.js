async function example6() {
    const schema = {
        progress: "steps",
        pages: [{
            legend: "Basics",
            fields: [
                {
                    type: "name",
                    name: "name",
                    caption: "Enter your name"
                },
                { 
                    type: "multiline",
                    caption: "Your comments",
                    autogrow: true
                }
            ]
        },
        {
            legend: "Interests",
            fields: [
                {
                    type: "tags",
                    name: "tags",
                    caption: "Add interests",
                    value: ["Travel", "Reading", "Netflix"]
                }
            ]
        },
        {
            legend: "Final",
            fields: [
                {
                    type: "radiobuttonlist",
                    name: "role",
                    caption: "Select role",
                    items: ["Developer", "Product Owner", "Tester", "CTO", "UX"]
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

export default {n: "Paging & progress", f: example6};