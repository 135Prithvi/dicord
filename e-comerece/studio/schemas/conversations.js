export const conversations = {
    name:"conversations",
    type:"document",
    title:"Conversations",
    fields:[
        {
                name:"roomName",
                type:"string",
                title:"Room name",
        }, 
        {
                name:"roomId",
                type:"string",
                title:"Room id",
        },
        {
                name:"image", 
                type:"image",
                title:"Image",
        }, 
        {
                name:"isDM",
                type:"boolean",
                title:"Is DM?",
        }, 
        {
                name:"userReference",
                type:"reference",
                to:[{type:"users"}],
        }, 
    ]
 }