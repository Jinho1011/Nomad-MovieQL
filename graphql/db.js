export const people = [
    {
        id: 1,
        name: "jinho",
        age: 20,
        gender: "male"
    },
    {
        id: 2,
        name: "minna",
        age: 20,
        gender: "female"
    },
    {
        id: 3,
        name: "hyojin",
        age: 20,
        gender: "female"
    },
    {
        id: 4,
        name: "mingyeong",
        age: 20,
        gender: "female"
    },
    {
        id: 5,
        name: "sumin",
        age: 20,
        gender: "female"
    }
]

export const getById = id => {
    const filteredPeople = people.filter(x => x.id === id)
    return filteredPeople[0]
}