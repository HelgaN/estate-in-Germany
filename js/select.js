  // Select
  $('.slct').click(function() {
    /* Заносим выпадающий список в переменную */
    var dropBlock = $(this).parent().find('.drop');

    /* Делаем проверку: Если выпадающий блок скрыт то делаем его видимым*/
    if (dropBlock.is(':hidden')) {
      dropBlock.slideDown();

      /* Выделяем ссылку открывающую select */
      $(this).addClass('active');

      /* Работаем с событием клика по элементам выпадающего списка */
      $('.drop').find('li').click(function() {

        /* Заносим в переменную HTML код элемента
        списка по которому кликнули */
        var selectResult = $(this).html();

        /* Находим наш скрытый инпут и передаем в него
        значение из переменной selectResult */
        $(this).parent().parent().find('input').val(selectResult);

        /* Передаем значение переменной selectResult в ссылку которая
        открывает наш выпадающий список и удаляем активность */
        $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);

        /* Скрываем выпадающий блок */
        dropBlock.slideUp();
      });

      /* Продолжаем проверку: Если выпадающий блок не скрыт то скрываем его */
    } else {
      $(this).removeClass('active');
      dropBlock.slideUp();
    }

    $(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $(".drop"); // тут указываем ID элемента
		  if (!div.is(e.target) // если клик был не по нашему блоку
		      && div.has(e.target).length === 0) { // и не по его дочерним элементам
			  div.hide(); // скрываем его
		  }
	  });

    /* Предотвращаем обычное поведение ссылки при клике */
    return false;
  });
