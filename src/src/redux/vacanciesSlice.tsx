import { createSlice } from '@reduxjs/toolkit'

export const vacanciesSlice = createSlice({
    name: 'slice',
    initialState: {
        vacancies: [
            {
                title: "Sales office manager",
                description: "Our candidate more than once skillfully built a team of like-minded people who broke sales records, he feels people, is ready to help them, knows how to give competent confirmations, which was reflected in the lack of turnover in the department.\nOwns management tools and uses them competently.\nOf course he himself is a fan of sales! He likes complex negotiations, he knows how to adapt to any client and hear his needs.\nOur ROP does not have limiting beliefs - he looks at the situation, sees limitations and sees opportunities to overcome them.",
                id: 1,
                closed: false,
                english_lvl: "C",
                grade: "250,000 - 350,000 rub.",
                tags: ["noenglish", "expert", "excessive", "tags", "just", "for", "testing", "purporses"],
                users: ['u1'],
                owner: 'c3'
            },
            {
                title: "Sales Manager",
                description: "We sell only one service, the purpose of which is to help people get out of a difficult financial situation. We accompany clients on the path of debt relief in a transparent and legal way ( FZ No. 127-FZ On Insolvency ( Bankruptcy )  .\nWe are growing! Yesterday there were 3 people in the sales department - and today we have 2 sales departments with a staff of 20 employees!",
                id: 2,
                closed: false,
                english_lvl: "B",
                grade: "100 000 rub.",
                tags: ["english", "middle"],
                users: ['u1'],
                owner: 'c4'
            },
            {
                title: "Marketplace Manager",
                description: "For a new large project (goods for construction and repair), we are looking for managers to work with marketplaces (Wildberries, Ozon, Avito).\nWork with reviews, questions, product cards.\nWith or without experience!\n(for beginners there is training, for professionals we will offer the best conditions on the market)\nRemote work, flexible work schedule\nStable salary 2 times a month!",
                id: 3,
                closed: false,
                english_lvl: "A",
                grade: "75,000 rub",
                tags: ["english", "beginner"],
                users: [],
                owner: 'c3'
            },
            {
                title: "Purchasing manager",
                description: "B1 Group (formerly EY in Russia) offers a full range of professional services, including audit, tax, legal, strategy, transactions and consulting services. B1 is a leading provider of risk management services for banks, insurance companies, asset management companies, and large corporate companies. Development of an operational strategy and business transformation projects for clients - the largest international and Russian companies from industries: oil & gas, mining, metals, consumer products and others",
                id: 4,
                closed: true,
                english_lvl: "A",
                grade: "55,000 rub",
                tags: ["english", "expert", "license"],
                users: ['u1'],
                owner: 'c3'
            },
            {
                title: "Berry picker (strawberry)",
                description: "WATCH WITH ACCOMMODATION AND FOOD STAFF IS REQUIRED FOR PICKING BERRIES WITH WEEKLY PAYMENTS                CONDITIONS:                                No work experience                WATCH 20/30/40/45 shifts and above, schedule 6/1; 7/0                Rate per shift 2,300 - 2,700 rubles with a further increase to 3,000 - 3,500 rubles                STABLE PAYMENT WEEKLY ON FRIDAYS                SETTLEMENT ON THE DAY OF APPLICATION                FLEXIBLE ADVANCE SYSTEM                DIRECT EMPLOYER                WE PROVIDE:                                FREE STAY IN A GREAT HOSTEL",
                id: 5,
                closed: false,
                english_lvl: "A",
                grade: "25,000 rub",
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
                if (Number(e.id) === Number(action.payload)) {
                    if (!e.users.includes(state.users.current)) {
                        e.users.push(state.users.current);
                    } else {
                        e.users = [...e.users.filter(e => e !== state.users.current)]
                    }
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
