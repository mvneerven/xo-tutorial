import products from '../../data/products-sample.json';

async function example13() {

    /*
        In this example, advanced controls such as listview and treeview are declared
    */

    const schema = {
        model: {
            instance: {
                products: {
                    items: products
                },
                data: {
                    selectedNodes: null
                },
                settings: {
                    tree: {
                      nr: 0,
                      name: "Tree Structure",
                      children: [
                        {
                          nr: 1,
                          name: "Child with nesting",
                          children: [
                            {
                              nr: 2,
                              name: "Deep nesting"
                            }
                          ]
                        },
                        {
                          nr: 3,
                          name: "Second child"
                        },
                        {
                          nr: 4,
                          name: "Third child"
                        }
                      ]
                    }
                  }
            }
        },
        navigation: "none",
        pages: [
            {
                legend: "",
                intro: "",
                fields: [
                    {
                        name: "grid",
                        type: "listview",
                        items: "#/products/items",
                        pageSize: 6,
                        checkboxes: true,

                        bind: "#/data/item",

                        views: [
                            "grid",
                            "tiles"
                        ],
                        mappings: {
                            grid: [
                                {
                                    key: "name",
                                    height: "2rem",
                                    width: "14rem"
                                },
                                {
                                    key: "description",
                                    autoWidth: true
                                },
                                {
                                    key: "imageUri"
                                },
                                {
                                    key: "price"
                                }
                            ],
                            tiles: [
                                {
                                    key: "imageUri",
                                    height: "100px"
                                },
                                {
                                    key: "name",
                                    height: "auto"
                                },
                                {
                                    key: "price"
                                }
                            ]
                        },
                        contextMenu: {
                            direction: "left",
                            items: [
                                {
                                    tooltip: "Edit",
                                    icon: "ti-pencil",
                                    action: "edit"
                                },
                                {
                                    tooltip: "Delete",
                                    icon: "ti-close",
                                    action: "delete"
                                }
                            ]
                        },
                        properties: [
                            {
                                key: "id",
                                type: "string",
                                name: "Id",
                                edit: {
                                    type: "hidden"
                                }
                            },
                            {
                                key: "name",
                                type: "string",
                                name: "Name",
                                class: "name"
                            },
                            {
                                key: "imageUri",
                                type: "img",
                                name: "Product Image",
                                class: "small hide-xxs"

                            },
                            {
                                key: "description",
                                type: "string",
                                name: "Description",
                                class: "small hide-sm"

                            },
                            {
                                key: "price",
                                type: "number",
                                name: "Price",
                                class: "small hide-xs"
                            }
                        ]
                    },
                    {
                        type: "treeview",
                        name: "treeview",
                        bind: "#/data/selectedNodes",
                        singleSelect: false,
                        minimum: 2,
                        caption: "Treeview",
                        mappings: {
                          title: "name",
                          tooltip: "description",
                          id: "nr"
                        },
                        items: "#/settings/tree"
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

export default { n: "Advanced Controls", f: example13 };