// Задача 1. Вывести заголовки статей без тега test

db.articles.find(
    {tags: {$ne: "test"}}, 
    {title: 1, _id: 0}
)
 
// Задача 2. Вывести статьи у которых есть теги spring и joy (оба тега)

db.articles.find(
    {tags: {$all: ["spring", "joy"]}}, 
    {title: 1, _id: 0}
)
 
// Задача 3. Удалить у всех статей теги test1 и test2
db.articles.updateMany(
    {}, 
    {$pull: {tags: {$in: ["test1", "test2"]}}}
)
 
// Задача 4. Добавить к статьям с тегом spring тег awesome и поле is_checked со значением true - arguments->filter->action

db.articles.updateMany(
    {tags: "spring"}, 
    {$set: {is_checked: true, tags: {$addtoSet: ["awesome"]}}}
)