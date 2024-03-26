$(document).ready(function() {

    var quiz = {
        questions: [

            {
                text: 'Легко ли добраться до офиса?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1707947533.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/office-managers-business-people-commute-work-1707947533" target="_blank">Gorodenkoff</a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Очень легко, офис расположен в 5-10 минутах от метро',
                       comment: 'В среднем российский офисный работник проводит в пути на работу около 47 минут. Чтобы провести время в дороге с пользой, можно не только играть в таймкиллеры на телефоне, но и послушать эпизоды образовательного подкаста, главу аудиокниги или просто приятную музыку, которая настроит на рабочий лад или поможет расслабиться. Кроме того, в общественном транспорте можно выполнять рутинные задачи: например, вносить показания счетчика или отвечать на рабочие письма.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1918997663.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/elektrozavodskaya-subway-station-moscow-metro-on-1918997663" target="_blank">JoyNik</a>/Shutterstock',
                       type: 'A',
                    },
                    2: {
                       text: 'Достаточно легко — до бизнес-центра ходит бесплатный транспорт',
                       comment: 'В среднем российский офисный работник проводит в пути на работу около 47 минут. Чтобы провести время в дороге с пользой, можно не только играть в таймкиллеры на телефоне, но и послушать эпизоды образовательного подкаста, главу аудиокниги или просто приятную музыку, которая настроит на рабочий лад или поможет расслабиться. Кроме того, в общественном транспорте можно выполнять рутинные задачи: например, вносить показания счетчика или отвечать на рабочие письма.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1760803538.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/copenhagen-denmark-0725-minibus-corporate-transportation-1760803538" target="_blank">alexfan32</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'Проблематично — офис далеко от метро, приходится пересаживаться на наземный транспорт, а потом идти дворами или через промзону',
                       comment: 'В среднем российский офисный работник проводит в пути на работу около 47 минут. Чтобы провести время в дороге с пользой, можно не только играть в таймкиллеры на телефоне, но и послушать эпизоды образовательного подкаста, главу аудиокниги или просто приятную музыку, которая настроит на рабочий лад или поможет расслабиться. Кроме того, в общественном транспорте можно выполнять рутинные задачи: например, вносить показания счетчика или отвечать на рабочие письма.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1707947335.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/close-leg-shot-businessman-suit-commuting-1707947335" target="_blank">Gorodenkoff</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Хватает ли места всем в офисе?',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F1.png',
                picsrc: 'Фото: предоставлено компанией',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Просторный офис, всем коллегам хватает места',
                       comment: 'Не все любят работать в большой и шумной компании. Помочь уединиться могут наушники с хорошей звукоизоляцией, а повысить комфорт позволят небольшие подушки для шеи и поясницы.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_1.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/people-working-modern-creative-work-environment-640286563" target="_blank">Photographee.eu</a>/Shutterstock',
                       type: 'A',
                    },
                    2: {
                       text: 'Офис небольшой, но если заранее договариваться и бронировать переговорки, проблем не возникает',
                       comment: 'Не все любят работать в большой и шумной компании. Помочь уединиться могут наушники с хорошей звукоизоляцией, а повысить комфорт позволят небольшие подушки для шеи и поясницы.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_640286563.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/copenhagen-denmark-0725-minibus-corporate-transportation-1760803538" target="_blank">alexfan32</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'Делим крохотный open space и одну переговорную комнату на 30 человек',
                       comment: 'Не все любят работать в большой и шумной компании. Помочь уединиться могут наушники с хорошей звукоизоляцией, а повысить комфорт позволят небольшие подушки для шеи и поясницы.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_3_leon-vbxyfxlgpjm-unsplash.jpg',
                       comment_pic_src: 'Фото: <a href="https://unsplash.com/photos/vbxyFxlgpjM" target="_blank">Leon</a>/Unsplash',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Насколько чисто в туалетных комнатах?',
                pic: 'https://media.rbcdn.ru/media/rb_test/glavnaya-nfguab11serpentine01sept1310383204preview-1.jpg',
                picsrc: 'Фото: предоставлено компанией',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Профессиональная уборка каждый день, бесконтактные дозаторы, краны и сушилки для рук',
                       comment: 'Комфорт в туалетной комнате напрямую влияет на настроение и самочувствие сотрудников. Один из способов обеспечить его — установить удобные бесконтактные сушилки для рук (например, <a target="_blank" href="https://www.dyson.com.ru/hand-dryers.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_" targer="_blank">Dyson Airblade™</a>, оснащенные HEPA-фильтром и подающие на руки чистый воздух). Такая техника не только делает туалетную комнату чище и защищает сотрудников, но и повышает экологичность офиса за счет отказа от бумажных салфеток и полотенец.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_1_%D1%81_%D1%80%D0%B5%D1%82%D1%83%D1%88%D1%8C%D1%8E.png',
                       comment_pic_src: 'Фото: предоставлено компанией',
                       type: 'A',
                    },
                    2: {
                       text: 'Есть кнопочные дозаторы мыла и сушилки для рук, уборка проводится несколько раз в неделю',
                       comment: 'Комфорт в туалетной комнате напрямую влияет на настроение и самочувствие сотрудников. Один из способов обеспечить его — установить удобные бесконтактные сушилки для рук (например, <a target="_blank" href="https://www.dyson.com.ru/hand-dryers.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_" targer="_blank">Dyson Airblade™</a>, оснащенные HEPA-фильтром и подающие на руки чистый воздух). Такая техника не только делает туалетную комнату чище и защищает сотрудников, но и повышает экологичность офиса за счет отказа от бумажных салфеток и полотенец.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1735923656.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/moscow-citymay-07-2020-interior-photography-1735923656" target="_blank">aleksandr vodovozov</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'Уборка раз в неделю, один кусок мыла на всех, руки вытираем салфетками',
                       comment: 'Комфорт в туалетной комнате напрямую влияет на настроение и самочувствие сотрудников. Один из способов обеспечить его — установить удобные бесконтактные сушилки для рук (например, <a target="_blank" href="https://www.dyson.com.ru/hand-dryers.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_" targer="_blank">Dyson Airblade™</a>, оснащенные HEPA-фильтром и подающие на руки чистый воздух). Такая техника не только делает туалетную комнату чище и защищает сотрудников, но и повышает экологичность офиса за счет отказа от бумажных салфеток и полотенец.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1519638218.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/hygiene-concept-washing-hands-soap-under-1519638218" target="_blank">KonstantinChristian</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Есть ли в вашем офисе пространство для отдыха?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1197402031.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/rest-area-front-desk-modern-office-1197402031" target="_blank">luchunyu</a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Большая зона с гамаками и капсулами для отдыха',
                       comment: 'Небольшой отдых помогает лучше сконцентрироваться на рабочих задачах. Старайтесь делать небольшие паузы в течение дня: так у вас получится меньше уставать и лучше выполнять не только те задачи, которые приходят к вам первыми. Не во всех офисах есть возможность сделать отдельное помещение для отдыха &mdash; но пара кресел-груш и приставка помогут организовать зону релаксации в любом помещении.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1793344006.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/creative-room-coworking-space-cushions-chairs-1793344006" target="_blank">Mumemories</a>/Shutterstock',
                       type: 'A',
                    },
                    2: {
                       text: 'Нет, но можно отдохнуть в кафетерии или соседнем парке',
                       comment: 'Небольшой отдых помогает лучше сконцентрироваться на рабочих задачах. Старайтесь делать небольшие паузы в течение дня: так у вас получится меньше уставать и лучше выполнять не только те задачи, которые приходят к вам первыми. Не во всех офисах есть возможность сделать отдельное помещение для отдыха &mdash; но пара кресел-груш и приставка помогут организовать зону релаксации в любом помещении.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_2_daan-evers-tkn1wxrzq3s-unsplash.jpg',
                       comment_pic_src: 'Фото:&nbsp;<a href="https://unsplash.com/photos/tKN1WXrzQ3s" target="_blank">daan evers</a>/Unsplash',
                       type: 'B',
                    },
                    3: {
                       text: 'Нет, мы находимся в промзоне и отдохнуть можно только в курилке на улице',
                       comment: 'Небольшой отдых помогает лучше сконцентрироваться на рабочих задачах. Старайтесь делать небольшие паузы в течение дня: так у вас получится меньше уставать и лучше выполнять не только те задачи, которые приходят к вам первыми. Не во всех офисах есть возможность сделать отдельное помещение для отдыха &mdash; но пара кресел-груш и приставка помогут организовать зону релаксации в любом помещении.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1580509603.jpg',
                       comment_pic_src: 'Фото:&nbsp;<a href="https://www.shutterstock.com/ru/image-photo/smoking-area-sign-symbol-seat-smoker-1580509603" target="_blank">SURKED</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Достаточно ли света в вашем рабочем помещении?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1924208063.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-illustration/modern-eco-style-interior-design-open-1924208063" target="_blank">Who is Danny</a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Да, большие панорамные окна, а в темное время суток включаем мягкий свет',
                       comment: 'От нехватки света или неестественного яркого освещения может разболеться голова. По возможности старайтесь работать рядом с окном или поставьте рядом с собой настольную лампу с мягким светом.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_1_nfgu_cl02_01a2_cmyk.jpg',
                       comment_pic_src: 'Фото: предоставлено компанией',
                       type: 'A',
                    },
                    2: {
                       text: 'Окна небольшие, поэтому днем бывает темно. Часто используем искусственное освещение',
                       comment: 'От нехватки света или неестественного яркого освещения может разболеться голова. По возможности старайтесь работать рядом с окном или поставьте рядом с собой настольную лампу с мягким светом.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_167274185.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/working-office-business-center-167274185" target="_blank">Pavel L Photo and Video</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'В офисе темно, постоянно включен очень яркий свет',
                       comment: 'От нехватки света или неестественного яркого освещения может разболеться голова. По возможности старайтесь работать рядом с окном или поставьте рядом с собой настольную лампу с мягким светом.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1056664226.jpg',
                       comment_pic_src: 'Фото <a href="https://www.shutterstock.com/ru/image-photo/empty-startup-office-interior-modern-computers-1056664226" target="_blank">dotshock</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Сухой ли у вас воздух в офисе?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1381274423.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/minimalist-home-office-desk-workspace-laptop-1381274423" target="_blank">Floral Deco</a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Нет. Мы пользуемся увлажнителями воздуха',
                       comment: 'Идеальным решением станет увлажнитель-очиститель воздуха <a href="https://www.dyson.com.ru/dyson-fans-and-heaters/purifier-humidifier/dyson-pure-humidify-cool/overview-row.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&amp;utm_medium=&amp;utm_source=_rb_&amp;utm_content=_" target="_blank">Dyson PH01</a>, который задерживает мелкодисперсные частицы и поддерживает нужный уровень влажности в помещении. Несколько увлажнителей в офисе сделают работу комфортной для всех.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_1_pro_work-2020_026-rgb-boardroom-tp04-frontleft-purecoolairflow-a2_mix.jpg',
                       comment_pic_src: 'Фото: предоставлено компанией',
                       type: 'A',
                    },
                    2: {
                       text: 'Не замечал, вроде бы проблем нет',
                       comment: 'Идеальным решением станет увлажнитель-очиститель воздуха <a href="https://www.dyson.com.ru/dyson-fans-and-heaters/purifier-humidifier/dyson-pure-humidify-cool/overview-row.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&amp;utm_medium=&amp;utm_source=_rb_&amp;utm_content=_" target="_blank">Dyson PH01</a>, который задерживает мелкодисперсные частицы и поддерживает нужный уровень влажности в помещении. Несколько увлажнителей в офисе сделают работу комфортной для всех.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_583591807.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/successful-team-group-young-business-people-583591807" target="_blank">G-Stock Studio</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'Очень сухой и пыльный воздух. Бывает трудно дышать, пересыхают глаза и горло',
                       comment: 'Идеальным решением станет увлажнитель-очиститель воздуха <a href="https://www.dyson.com.ru/dyson-fans-and-heaters/purifier-humidifier/dyson-pure-humidify-cool/overview-row.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&amp;utm_medium=&amp;utm_source=_rb_&amp;utm_content=_" target="_blank">Dyson PH01</a>, который задерживает мелкодисперсные частицы и поддерживает нужный уровень влажности в помещении. Несколько увлажнителей в офисе сделают работу комфортной для всех.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1550086250.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/young-sick-businesswoman-sneezing-tissue-while-1550086250" target="_blank">Drazen Zigic</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Насколько шумно в вашем офисе?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1545934913.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/leader-sharing-creative-ideas-business-team-1545934913" target="_blank">antoniodiaz<a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'У нас хорошая шумоизоляция от звуков с улицы, а внутри мы всегда соблюдаем тишину',
                       comment: 'Постоянный шум в офисе негативно влияет на производительность сотрудников и финансовые показатели компании. Если там, где вы работаете, слишком шумно, хорошим решением станут наушники с внешним шумоподавлением.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_1_hAq5R8c.jpg',
                       comment_pic_src: 'Фото: предоставлено компанией',
                       type: 'A',
                    },
                    2: {
                       text: 'Умеренно шумно — доносятся звуки разговоров коллег по телефону и из соседних помещений',
                       comment: 'Постоянный шум в офисе негативно влияет на производительность сотрудников и финансовые показатели компании. Если там, где вы работаете, слишком шумно, хорошим решением станут наушники с внешним шумоподавлением.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1242292033.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/confident-diligent-serious-positive-businessman-concentrated-1242292033" target="_blank">Iakov Filimonov</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'Шумно. Рядом расположен ресторан с громкой музыкой. Стены тонкие, слышим коллег из переговорной',
                       comment: 'Постоянный шум в офисе негативно влияет на производительность сотрудников и финансовые показатели компании. Если там, где вы работаете, слишком шумно, хорошим решением станут наушники с внешним шумоподавлением.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1065757577.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/multiracial-people-different-age-working-on-1065757577" target="_blank">fizkes</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'А что с охраной?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1008333013.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/male-security-guard-using-radio-transmitter-1008333013" target="_blank">Africa Studio</a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'У нас профессиональные и дружелюбные охранники, электронная пропускная система',
                       comment: 'Офис, в который не попадают посторонние люди, в том числе коммивояжеры, позволяет сотрудникам чувствовать себя защищенными.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_675099115.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/entrance-corridor-intelligent-equipment-modern-office-675099115" target="_blank">zhu difeng</a>/Shutterstock',
                       type: 'A',
                    },
                    2: {
                       text: 'Есть один охранник на входе в бизнес-центр',
                       comment: 'Офис, в который не попадают посторонние люди, в том числе коммивояжеры, позволяет сотрудникам чувствовать себя защищенными.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1612695859.jpg',
                       comment_pic_src: 'Фото:&nbsp;<a href="https://www.shutterstock.com/ru/image-photo/security-guard-walking-building-perimeter-flashlight-1612695859" target="_blank">Andrey_Popov</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'Мы сами себя защищаем и ничего не боимся',
                       comment: 'Офис, в который не попадают посторонние люди, в том числе коммивояжеры, позволяет сотрудникам чувствовать себя защищенными.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1245856660.jpg',
                       comment_pic_src: 'Фото:&nbsp;<a href="https://www.shutterstock.com/ru/image-photo/excited-multiracial-office-workers-team-giving-1245856660" target="_blank">fizkes</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Как вы боретесь с неожиданными загрязнениями (много крошек в переговорке, разбили горшок с землей, грязный ковролин после дождя)?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1102049252.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/rear-view-group-business-people-working-1102049252" target="_blank">DGLimages</a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Не ждем уборщицу, а используем ручной пылесос при возникновении загрязнения',
                       comment: 'Даже профессиональная уборка не спасет от инцидентов во время рабочего дня: пролитого кофе, перевернутого цветочного горшка или упавшего на ковер куска торта. Чтобы не сидеть весь день в грязном офисе, можно задействовать ручной пылесос (например, <a href="https://www.dyson.com.ru/vacuums/cordless/dyson-v15.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&amp;utm_medium=&amp;utm_source=_rb_&amp;utm_content=_" target="_blank">Dyson V15 Detect</a>), который справится с задачей быстро и почти бесшумно. А если он ещё и не требует подключения к розетке, то управляться с ним будет удобно и нетрудно.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_1_pro_work2021_013-rgb-realworld-grdflr-entrancereceptiomarea-sv22-cd06-a3_mix.png',
                       comment_pic_src: 'Фото: предоставлено компанией',
                       type: 'A',
                    },
                    2: {
                       text: 'Сразу же вызываем клининг',
                       comment: 'Даже профессиональная уборка не спасет от инцидентов во время рабочего дня: пролитого кофе, перевернутого цветочного горшка или упавшего на ковер куска торта. Чтобы не сидеть весь день в грязном офисе, можно задействовать ручной пылесос (например, <a href="https://www.dyson.com.ru/vacuums/cordless/dyson-v15.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&amp;utm_medium=&amp;utm_source=_rb_&amp;utm_content=_" target="_blank">Dyson V15 Detect</a>), который справится с задачей быстро и почти бесшумно. А если он ещё и не требует подключения к розетке, то управляться с ним будет удобно и нетрудно.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1612689220.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/happy-young-man-cleaning-floor-mop-1612689220" target="_blank">Andrey_Popov</a>/Shutterstock',
                       type: 'B',
                    },
                    3: {
                       text: 'Стараемся не мусорить, ждем уборщицу, сами не убираем',
                       comment: 'Даже профессиональная уборка не спасет от инцидентов во время рабочего дня: пролитого кофе, перевернутого цветочного горшка или упавшего на ковер куска торта. Чтобы не сидеть весь день в грязном офисе, можно задействовать ручной пылесос (например, <a href="https://www.dyson.com.ru/vacuums/cordless/dyson-v15.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&amp;utm_medium=&amp;utm_source=_rb_&amp;utm_content=_" target="_blank">Dyson V15 Detect</a>), который справится с задачей быстро и почти бесшумно. А если он ещё и не требует подключения к розетке, то управляться с ним будет удобно и нетрудно.',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_133578779.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/office-garbage-metal-basket-133578779" target="_blank">Shutter_M</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },

            {
                text: 'Чего, на ваш взгляд, не хватает в вашем офисе?',
                pic: 'https://media.rbcdn.ru/media/rb_test/shutterstock1338779402.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/moscow-russia-0203-working-place-on-1338779402" target="_blank">Dimaris</a>/Shutterstock',
                piclink: 'https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_',
                answers: {
                    1: {
                       text: 'Ничего, мой офис идеален',
                       comment: '',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1735925873.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/moscow-citymay-07-2020-office-interior-1735925873" target="_blank">aleksandr vodovozov</a>/Shutterstock',
                       type: 'A',
                    },
                    2: {
                       text: 'Хотелось бы сделать его чище и современнее: например, добавить более удобные сушилки для рук, новые лампы, очиститель воздуха или что-то похожее',
                       comment: '',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/%D0%B2%D0%B0%D1%80%D0%B8%D0%B0%D0%BD%D1%82_2.png',
                       comment_pic_src: 'Фото: предоставлено компанией',
                       type: 'B',
                    },
                    3: {
                       text: 'Добавить комнату для отдыха',
                       comment: '',
                       comment_pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1653946390.jpg',
                       comment_pic_src: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/moscow-russia-february-23-2020-acoustic-1653946390" target="_blank">Pili Greem</a>/Shutterstock',
                       type: 'C',
                    },
                },
            },
        ],
        results: [
            {
                title: 'Офис мечты',
                text: 'Вам очень повезло — руководство по-настоящему заботится о своих сотрудниках и окружающей среде и делает все, чтобы обеспечить вам комфортную обстановку для работы, не упуская мелочей. В ваш офис хочется возвращаться снова и снова.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1259412769.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-illustration/modern-office-interior-design-loft-concept-1259412769" target="_blank">Zastolskiy Victor</a>/Shutterstock',
                type: 'a',
            },
            {
                title: 'Рабочее место стандартное',
                text: 'Возможно, ваш офис и не назовешь особенно удобным или уютным, но в нем можно продуктивно работать, не слишком сильно отвлекаясь на раздражающие факторы. Вполне достойный результат, но если вы хотите сделать офис еще лучше, можете воспользоваться советами RB.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1718050765.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-illustration/modern-office-interior-3d-rendering-1718050765" target="_blank">tangyan</a>/Shutterstock',
                type: 'b',
            },
            {
                title: 'Адская канцелярия',
                text: 'Возможно, ваша компания только начала работу и не смогла найти места лучше. А может, начальство просто не слишком озабочено такими мелочами, как комфорт собственных сотрудников. Если вам удается продуктивно работать в такой обстановке вы заслуживаете премию, а то и не одну. Но вы всегда можете проявить инициативу и улучшить рабочее место, воспользовавшись нашими советами.',
                pic: 'https://media.rbcdn.ru/media/upload_tmp/2021/shutterstock_1130345546.jpg',
                picsrc: 'Фото: <a href="https://www.shutterstock.com/ru/image-photo/cockroach-on-office-table-eating-juice-1130345546" target="_blank">Sawangkaew</a>/Shutterstock',
                type: 'c',
            },
        ]
    };

    var mainPage = $('.main');
    var stepPage = $('.step');
    var resultPage = $('.result');
    var startTestButton = $('#start-test');
    var steps = $('.dyson__steps');
    var backButton = $('.dyson__step-back');
    var form = $('.dyson__step-form');

    var answersCount = {
        typeA: 0,
        typeB: 0,
        typeC: 0.
    }

    var typeA = 0;
    var typeB = 0;
    var typeC = 0;

    for (var i = 0; i < quiz.questions.length; i++) {
        steps.append( "<div class='dyson__steps-step'></div>" );
    }

    $('.dyson__step-cube2').text(quiz.questions.length);
    var stepCount = 0;

    var showResult = function() {
        stepPage.hide();

        var resultName = 0;
        var resultCount = 0;

        if (answersCount.typeA > resultCount) {
            resultName = 0;
            resultCount = answersCount.typeA;
        }

        if (answersCount.typeB > resultCount) {
            resultName = 1;
            resultCount = answersCount.typeB;
        }

        if (answersCount.typeC > resultCount) {
            resultName = 2;
            resultCount = answersCount.typeC;
        }

        var result = quiz.results[resultName];

        var pixUrl = 'url("' + result.pic + '")';

        resultPage.find('.dyson__main-img').css('background-image', pixUrl);
        resultPage.find('.dyson__main-imgsrc').html(result.picsrc);
        resultPage.find('.dyson__main-title').html(result.title);
        resultPage.find('.dyson__main-text').text(result.text);
        resultPage.find('.dyson__main-img2 img').attr('src', result.pic);
        resultPage.find('.dyson__main-img2src').html(result.picsrc);
        resultPage.css('display', 'flex');

          $('.dyson__res__start').click(function() {
            answersCount = {
                typeA: 0,
                typeB: 0,
                typeC: 0.
            }
            stepCount = 0
            resultPage.hide();
            mainPage.css('display', 'flex');
            steps.find('.dyson__steps-step').removeClass('active').removeClass('passed');
          });
    }

    var answerToHtml = function(answer, index, isLast) {
        var letter = '';
        var buttonText = 'Следующий вопрос';
        var buttonClass = '';

        if (isLast) {
            buttonText = 'Перейти к итогам теста';
            buttonClass = 'dyson__step__start__last';
        }
        switch (index) {
          case '1':
            letter = 'A';
            break;
          case '2':
            letter = 'B';
            break;
          case '3':
            letter = 'C';
            break;
          default:
            letter = 'D';
        }

        var tmpl = '';
        tmpl += '<div class="dyson__step-answer">';
        tmpl += '    <input type="radio" id="answer' + index +'" class="dyson__step-answer-input" data-type="'+ answer.type + '">';
        tmpl += '    <label class="dyson__step-label" for="answer' + index + '">';
        tmpl += '        <div class="dyson__step-label-circle">' + letter + '</div>';
        tmpl += '        <div class="dyson__step-label-text">' + answer.text+ '</div>';
        tmpl += '    </label>';
        tmpl += '    <div class="dyson__step-comment">';
        tmpl += '        <a href="https://www.dyson.com.ru/office.aspx?utm_campaign=ru_ru_ab_af_tactical_see_awareness_21q3_&utm_medium=&utm_source=_rb_&utm_content=_" target="_blank">';
        tmpl += '            <div class="dyson__step-comment-img" style="background-image: url(' + answer.comment_pic + ');"></div>';
        tmpl += '        </a>';
        tmpl += '        <div class="dyson__step-comment-picsrc">' + answer.comment_pic_src +'</div>';
        tmpl += '        <div class="dyson__step-comment-text">'+ answer.comment + '</div>';
        tmpl += '        <button class="dyson__step__start ' + buttonClass + '">' + buttonText + '</button>';
        tmpl += '    </div>';
        tmpl += '</div>';
        return $(tmpl);
    }

    var updateStep = function() {
        var isLast = false;
        stepCount++;

        if ((stepCount + 1) > quiz.questions.length) {
            isLast = true;
        }

        $('.dyson__step-cube1').text(stepCount);
        form.empty();
        steps.find('.dyson__steps-step').removeClass('active');
        steps.find('.dyson__steps-step').eq(stepCount - 1).addClass('active').addClass('passed');

        // if (stepCount > 1) {
        //     backButton.show();
        // } else {
        //     backButton.hide();
        // }

        backButton.hide();
        var question = quiz.questions[stepCount - 1];

        $('.dyson__main-title').text(question.text);
        var picUrl = 'url("' + question.pic + '")';
        $('.dyson__step-img').css('background-image', picUrl);
        $('.dyson__step-img').attr('src', question.pic);
        $('.dyson__step-imgsrc').html(question.picsrc);
        $('.dyson__step-img2 img').attr('src', question.pic);
        $('.dyson__step-img2src').html(question.picsrc);
        $.each(question.answers, function (index, answer) {
            var $answer_html = answerToHtml(answer, index, isLast);
            form.append($answer_html);
        });

        form.change(function (e) {
            form.off();
            e.preventDefault();
            var inputChecked = form.find('input').filter(':checked');
            var type = inputChecked.attr('data-type').toLowerCase();;

            switch (type) {
              case 'a':
                answersCount.typeA++;
                break;
              case 'b':
                answersCount.typeB++;
                break;
              case 'c':
                answersCount.typeC++;
                break;
            }

            form.find('input').attr('disabled', true);
            inputChecked.parent().find('.dyson__step-comment').slideDown();

        });

        $('.dyson__step__start').click(function(event) {
            event.preventDefault();
            if (isLast) {
                showResult();
                return
            }
            updateStep();
        })
    }

    startTestButton.click(function() {
        mainPage.hide();
        updateStep();
        stepPage.css('display', 'flex');
    });
});