/**
 * Created by Fans on 2017/7/3.
 */
const initalpoststate = [];

const initaluserstate = {
    isLogin: false,
    userData: []
};

const posts = (state = initalpoststate,action) => {
    Switch(action.type)
    {
        case
            CREATE_POST:
                return [...state, action.data];
                break;
        case
            DELETE_POST:
                return state.filter((prop) => {
                    return post.id != action.id
                });
                break;
        default;
    }
}