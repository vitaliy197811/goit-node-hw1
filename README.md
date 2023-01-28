# Получаем и выводим весь список контактов в виде таблицы (console.table)
node index.js --action list
https://monosnap.com/file/pwwnPknhbVqYec6W5nWfxvpi5VvEAI

# Получаем контакт по id
node index.js --action get --id 5
https://monosnap.com/file/FFvCCxTWRpKRyblHkm2smdjinM861v

# Добавялем контакт
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
https://monosnap.com/file/1WfZFCTAV83OU4DUunY437if1A5COz

# Удаляем контакт
node index.js --action remove --id=3
https://monosnap.com/file/w0ikJv1NyUJQ6YuJSFFeyziUiPsNFl