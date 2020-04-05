import md5 from 'md5';
export const defaultState = {
    session:{
        authenticate:false
    },
    users:[
        {
            id:"U1",
            name:"madhu",
            passwordHash:md5('msd')
        },
        {
            id:"U2",
            name:"chandu",
            passwordHash:md5('cgd')
        },
        {
            id:"U3",
            name:"chethu"
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
        owner:"U2",
        group:"G1",
        isComplete:false
    },
    {
        name:"Coding",
        id:"T3",
        owner:"U3",
        group:"G2",
        isComplete:false
    },
    {
        name:"Do Exercise",
        id:"T4",
        owner:"U1",
        group:"G3",
        isComplete:true
    }],
    comments:[{
        owner:"U1",
        id:"C1",
        task:"T1",
        content:"Great Work!"
    },
    {
        owner:"U2",
        id:"C1",
        task:"T2",
        content:"Not goood Work!"
    },
    {
        owner:"U3",
        id:"C1",
        task:"T3",
        content:"Not bad Work!"
    }]
}