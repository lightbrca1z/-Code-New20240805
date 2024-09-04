import { produce } from "immer"

const state = {
    name: 'Tom',
    hobbies: ['tennis', 'soccer']
}

const newState = produce(state, draft => {
    //ミュータブル
    draft.name = 'John';
    console.log(draft)
})

console.log(state, newState);