import usersStore from "./store/users-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const UsersAPP = async( element ) => {

    element.innerHTML = 'Loading...';
    await usersStore.loadNextPage();

}