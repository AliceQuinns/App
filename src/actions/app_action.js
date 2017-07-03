/**
 * Created by Fans on 2017/7/3.
 */
const CREATE_POST = 'CREATE_POST';//创建事件
const DELETE_POST = 'DELETE_POST';//删除事件
const USER_LOGIN = 'USER_LOGIN';

let createPostAction = {
    type: CREATE_POST,
    data: {id:1,title: 'new title'}
};

let deletePostAction = {
    type: DELETE_POST,
    data: 1
};

let userLoginAction = {
    type: USER_LOGIN,
    data: {name: 'viking',email: 'viking@.com'}
};