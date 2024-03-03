import { createRouter, createWebHistory } from "vue-router";
import AppBody from "./../components/AppBody.vue"
import AppLogin from "./../components/AppLogin.vue"
import AppBooks from "./../components/AppBooks.vue";
import AppBook from "./../components/AppBook.vue";
import BooksAdmin from "./../components/BooksAdmin.vue";
import BookEdit from "./../components/BookEdit.vue";
import AppUsers from "./../components/AppUsers.vue";
import UserEdit from "./../components/UserEdit.vue";
import Security from "../components/security";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: AppBody,
    },
    {
        path: '/login',
        name: 'Login',
        component: AppLogin,
    },
    {
        path: '/books',
        name: 'Books',
        component: AppBooks,
    },
    {
        path: '/books/:bookName',
        name: 'Book',
        component: AppBook,
    },
    {
        path: '/admin/books',
        name: 'BooksAdmin',
        component: BooksAdmin,
    },
    {
        path: '/admin/books/:bookId',
        name: 'BookEdit',
        component: BookEdit,
    },
    {
        path: '/admin/users',
        name: 'AppUsers',
        component: AppUsers,
    },
    {
        path: '/admin/users/:userId',
        name: 'UserEdit',
        component: UserEdit,
    },
];

const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach(() => {
    Security.checkToken();
});
export default router;