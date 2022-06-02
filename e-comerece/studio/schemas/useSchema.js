export const userSchema = {
    name:"users",
    type:"document",
    title:"Users",
    fields:[
        {
                name:"name",
                type:"string",
                title:"Name",
        },
        {
                name:"walletaddress",
                type:"string",
                title:"Wallet Address",
        },
        {
                name:"profileimage",
                type:"image",
                title:"Profile Image",
        },
        
    ]
}