let string = () => {
    let language = {
        ru: {
            //общие слова
            save: "Сохранить",
            login: "Логин",
            password: "Пароль",
            singIn: "Войти",
            hello: "Привет",
            error: "Ошибка",

            //preview
            open_form_preview: "Открыть форму записи",
            preview_title: "Это одностраничник",
            preview_text: "Красивая страница на весь экран, которая поражает своей красотой",
            preview_email_pl: "Введие ваш E-mail",

            //login
            user_not_found: "Пользователь не найден"

        }
    };
    return language.ru;
};
module.exports = string();