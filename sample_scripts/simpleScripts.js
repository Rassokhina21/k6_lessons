import http from "k6/http"

/* Запуск скрипта командой k6 run ./simpleScripts.js */
/* Запуск  параметризированного скрипта  командой k6 run --vu 10 --duration 30s ./simpleScripts.js */

// /* Простой скрипт GET запроса */
export default function(){
    let res =  http.get("https://product-segments.21vek.dev/product-segments/admin/product-segments");
    console.log(JSON.stringify(res.headers));
    console.log("Get запрос на получение списка  Сегментов выполнен");
}