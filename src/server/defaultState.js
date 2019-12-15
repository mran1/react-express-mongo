export const defaultState = {
    users:[
        {
            id:"U1",
            name:"Dev"
        },
        {
            id:"U2",
            name:"Honey"
        },
        {
            id:"U3",
            name:"Madhu"
        }
    ],
    groups:[
        {
            name:"To Do",
            id:"G1",
            owner:"U1"
        },
        {
            name:"Doing",
            id:"G2",
            owner:"U3"
        },
        {
            name:"Done",
            id:"G3",
            owner:"U2"
        }
    ],
    tasks:[{
        name:"play cricket",
        id:"T1",
        owner:"U1",
        group:"G1",
        isComplete:false
    },
    {
        name:"wash clothes",
        id:"T2",
        owner:"U1",
        group:"G1",
        isComplete:false
    },
    {
        name:"Coding",
        id:"T3",
        owner:"U2",
        group:"G2",
        isComplete:false
    },
    {
        name:"Do Exercise",
        id:"T3",
        owner:"U2",
        group:"G3",
        isComplete:false
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great Work!"
    },
    {
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Not goood Work!"
    }]
}