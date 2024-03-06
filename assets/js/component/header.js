import { is_login } from "../auth.js";
const logUI = document.querySelector("#logUI");

export const header = () => {
    console.log(logUI);
    if (is_login) {
        console.log("is_login");
        logUI.innerHTML = `
        <a class="btn ms-lg-4 mb-lg-0 mb-6 btn-outline-primary rounded-1 fs-4 col-10"
            href="member-login.html"
            type="button"
            >登出</a
        >`;
    } else if (!is_login) {
        logUI.innerHTML = `
        <a class="btn ms-lg-4 mb-lg-0 mb-6 btn-outline-primary rounded-1 fs-4 col-5"
            href="member-login.html"
            type="button"
            >登入</a
        >
        <a class="btn ms-lg-4 btn-outline-primary rounded-1 fs-4 col-5" href="register.html" type="button"
            >註冊</a
        >
        `;
    }
};