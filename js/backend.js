'use strict';
(function (){
    window.backend = {
        load: function(onLoad, onError){
            var URL = 'https://javascript.pages.academy/code-and-magick/data';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            var onXhrLoad = function(evt) {
                var error;
                switch (xhr.status) {
                    case 200:
                        onLoad(xhr.response);
                        break;
                    case 400:
                        error = 'Неверный запрос';
                        onError(error);
                        break;
                    case 401:
                        error = 'Пользователь не авторизован';
                        onError(error);
                        break;
                    case 404:
                        error = 'Ничего не найдено';
                        onError(error);
                        break;

                    default:
                        error = 'Статус ответа: ' + xhr.status + ' ' +xhr.statusText;
                        onError(error);
                        break;
                }
            }
            var onXhrError = function() {
                error = 'Статус ответа: ' + xhr.status + ' ' +xhr.statusText;
                onError(error);
            }
            var onXhrTimeout = function() {
                error = 'Время ожидания истекло';
                onError(error);
            }
            xhr.addEventListener('load', onXhrLoad);
            xhr.addEventListener('error', onXhrError);
            xhr.addEventListener('timeout', onXhrTimeout);
            xhr.open('GET', URL);
            xhr.send();
        },
        save: function(data, onLoad, onError){
            var URL = 'https://javascript.pages.academy/code-and-magick';
            var xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            var onXhrLoad = function(data, onLoad, onError){
                onLoad(xhr.response);
            }
            xhr.addEventListener('load', onXhrLoad(data, onLoad, onError));
            xhr.open('POST', URL);
            xhr.send(data);
        },
    }
})();