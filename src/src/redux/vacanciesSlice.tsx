import { createSlice } from '@reduxjs/toolkit'

export const vacanciesSlice = createSlice({
    name: 'slice',
    initialState: {
        vacancies: [
            {
                title: "vac1",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                id: 1,
                closed: false,
                english_lvl: "A",
                grade: "L1",
                tags: ["noenglish", "beginner", "noexp"],
                users: ['u1'],
                owner: 'c3'
            },
            {
                title: "vac2",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                id: 2,
                closed: false,
                english_lvl: "B",
                grade: "L2",
                tags: ["english", "beginner"],
                users: ['u1'],
                owner: 'c4'
            },
            {
                title: "vac3",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                id: 3,
                closed: false,
                english_lvl: "C",
                grade: "L3",
                tags: ["english", "expert", "license"],
                users: [],
                owner: 'c3'
            },
            {
                title: "vac4",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                id: 4,
                closed: true,
                english_lvl: "C",
                grade: "L3",
                tags: ["english", "expert", "license"],
                users: ['u1'],
                owner: 'c3'
            },
            {
                title: "vac5",
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                id: 5,
                closed: false,
                english_lvl: "C",
                grade: "L3",
                tags: ["english", "expert", "license"],
                users: [],
                owner: 'c3'
            }
        ],
        users: {
            current: '',
            data: [
                {
                    name: '123',
                    id: 'u1',
                    password: '123'
                },
                {
                    name: 'second',
                    id: 'u2'
                },
                {
                    name: '321',
                    id: 'c3',
                    password: '321'
                },
                {
                    name: 'comp2',
                    id: 'c4'
                }
            ]
        },
    },
    reducers: {
        add_vacancy: (state, action) => {
            state.vacancies.push(action.payload)
        },
        response: (state, action) => {
            state.vacancies.map(e => {
                if (Number(e.id) === Number(action.payload) && !e.users.includes(state.users.current)) {
                    e.users.push(state.users.current);
                }
                return e;
            })

        },
        close_vacancy: (state, action) => {
            state.vacancies.map(e => {
                if (Number(e.id) === Number(action.payload)) e.closed = !e.closed;
                return e;
            })
        },
        logout: state => {
            state.users.current = ''
        },
        login: (state, action) => {
            const usr = state.users.data.find(e => e.name === action.payload.user)
            if (usr) {
                if (usr.password === action.payload.password) {
                    state.users.current = usr.id
                }
            }
        },
        add_user: (state, action) => {
            state.users.data.push(action.payload)
        }
    }
})

export const { add_vacancy, response, close_vacancy,
    logout, login, add_user } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
