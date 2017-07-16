let string = () => {
    let language = {
        ru: {
            //общие слова
            save: "Сохранить",

            //preview
            open_form_preview: "Открыть форму записи",
            preview_title: "Это одностраничник",
            preview_text: "Красивая страница на весь экран, которая поражает своей красотой"
        }
    };
    return language.ru;
};
module.exports = string();