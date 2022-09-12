// ({1}Занятие)

// console.log('Hello world!')

// Пример 1. Напечатать в консоли название вашего города.
// console.log('St. Petersburg');
// Пример 2. Напечатать свое имя, затем закомментировать эту строку.
// console.log('Andrew');
// Пример 3. Напечатать несколько строк стихотворения.
// 1 способ
// console.log('Let it snow!');
// console.log('Let it snow!');
// console.log('Let it snow!');
// 2 способ
// console.log('Let it snow!\nLet it snow!\nLet it snow!');
//\n - символ переноса строки


// Переменная – это «именованное хранилище» для данных. Для создания переменной в JavaScript используют ключевое слово let (также есть const и устаревшее var). В переменную можно поместить значение с помощью оператора присваивания =. Для вывода значения переменной в консоль используется команда console.log();

// let telNumber = 123456;
// let name = 'Andrew';
// console.log(telNumber);
// console.log(name);

// Переменную можно создать, не присваивая ей значение. Например, 
//let telNumber; 
// Если не присвоить никакого значения, то в переменной будет значение undefined установлено по умолчанию.
// let telNumber;           // задаем переменную telNumber без присваивания ей значения
// telNumber = 15058768956; // значение переменной telNumber изменено  
// console.log(telNumber);  // в консоль будет выведено 15058768956

// Переменные, созданные с помощью ключевого слова let, можно переопределить, т.е. присвоить переменной новое значение. При присваивании переменной нового значения ключевое слово let использовать не надо.
// let num = 5;                   // переменной num присвоено значение 5
// console.log(num);              // в консоль будет выведено 5
// num = num + 4;                 // значение переменной num увеличено на 4
// console.log(num);              // в консоль будет выведено 9

// let str = 'Have a nice day!';  // переменной str присвоено значение 'Have a nice day!'
// str = 'Have a great day!';     // значение переменной str изменено  
// console.log(str);              // в консоль будет выведено "Have a great day!"

// Для краткости кода можно объявлять переменные в одну строку, например:
// let num = 5, newNum = 15, oldNum = 10; // переменной num присвоено значение 5, переменной newNum присвоено значение 15, переменной oldNum присвоено значение 10; перечисление переменных происходит через запятую
// console.log(num, newNum, oldNum);      // в консоль будет выведено 5, 15 и 10
//Объявление переменных в одну строку не рекомендуется, так как это затрудняет читаемость кода. Объявляйте каждую переменную в отдельной строке.

// Чтобы объявить константу, т.е. неизменяемую переменную (read only), используют const вместо let. Константы нельзя изменить. Попытка изменить константу приведёт к ошибке.
// При создании константы значение переменной присваивается сразу
// Если при создании константы не определить ее значение, это приведет к ошибке.

// Если вы не планируете изменять значение переменной в программе, используйте const. Если значение переменной в программе будет меняться – используйте let.

// Ключевые слова let и const имеют сходства и различия между собой. Переменная, заданная с их помощью, будет "читаться" на странице только в пределах блока, где эта переменная была задана.



// ----------------------------------------------------------------------
// ({2}Занятие)

// let и const имеют блочную область видимости (видны только после объявления и только в текущем блоке).

// {let a = 100;
//  const b = 200;}
// console.log(a, b); // попытка вывести значения переменных в консоль выдаст ошибку "ReferenceError"

// {let a = 100;
//  const b = 200;
//  console.log(a, b);} // в консоль будет выведено 100 и 200

// let и const нельзя объявлять повторно в одном блоке.
// {let a = 100;
//  let a = 200; // повторно объявляем переменную a 
//  console.log(a);} // при попытке вывести значение переменной a в консоль будет получена ошибка "SyntaxError"

// {let b = 100;
//  const b = 200;} // приведет к ошибке "SyntaxError"
// let b = 300;
// b = 400;
// console.log(b); // в консоль будет выведено 400 

// Переменные var не имеют блочной области видимости, они ограничены телом функции.
// {var a = 10;}
// a = 100;
// console.log(a); // в консоль будет выведено 100

// {var a = 10;
//  let b = 100;
//  const c = 1000;}
//  let b = 500;
//  const c = 700;
//  console.log(a, b, c); // в консоль будет выведено 10, 500 и 700

// Обычно var не используется в современных скриптах.
// Блочная область видимости – это удобно. Поэтому много лет назад let и const были введены в стандарт и сейчас являются основным способом объявления переменных.

// На разных проектах правила именования переменных могут слегка варьироваться, но основные требования, обеспечивающие лучшую "читаемость кода" следующие:
// 1) Осмысленное название, отображающее суть данных, хранящихся в переменной.
// 2) Использование имен в стиле camelCase - стиль написания составных слов, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри фразы пишется с прописной буквы. Стиль получил название camelCase, поскольку прописные буквы внутри слова напоминают горбы верблюда.
// 3) Использование английского языка (не транслита!), цифр (но не в начале имени!), знака подчеркивания _ и доллара $.
// 4) Нелатинские буквы разрешены, но не рекомендуются. Можно использовать любой язык, включая кириллицу. Имена с использованием русских букв разрешены, но есть международная традиция использовать английский язык в именах переменных.
// 5) Существует также список зарезервированных слов в JavaScript, которые нельзя употреблять в качестве имен переменных. Взять хотя бы ключевое слово let.Примеры неправильного именования переменных:
		// const const;              // const - зарезервированное слово, его нельзя использовать в качестве переменной
		// const null = 0;           // null - зарезервированное слово, его нельзя использовать в качестве переменной 
		// let var = 100.99;         // var - зарезервированное слово, его нельзя использовать в качестве переменной 
		// let knigi = 500;          // нельзя использовать транслит в названии переменной
		// let 12month = 'December'; // нельзя начинать имя переменной с цифры
		// let sumofnumbers = a + b; // должен применяться стиль camelCase: когда после первого слова каждое последующее слово пишется с прописной буквы 
		// let tov = 100 ;           // давайте переменной понятное имя, таким образом другим разработчикам будет удобно работать с вашим кодом

// в переменную можно поместить значение с помощью оператора присваивания – знака "равно" (=). Сначала выполняется правая часть кода, затем – левая (присваивание значения переменной):

// Например:
// let a = 5;       // переменной a присвоено значение 5
// a = a + 5;       // значение переменной a увеличено на 5
// a = a * 5;       // значение переменной a увеличено в 5 раз
// a = a / 10 + 20; // значение переменной a уменьшилось в 10 раз, затем увеличилось на 20
// console.log(a);  // в итоге всех изменений в консоль будет выведено 25

// let str = 'Hello';      // переменной str присвоено значение 'Hello'
// str = str + ' world!';  // значение переменной str изменено
// console.log(str);       // в консоль будет выведено "Hello world!"



// ----------------------------------------------------------------------
// ({3}Занятие)

// Переменная в JavaScript может содержать любые данные. В один момент там может быть строка, а в другой – число:
// let message = 'Hello';
// message = 123456;
// При создании переменной тип переменной не указывается. Языки программирования, в которых такое возможно, называются «динамически типизированными». Это значит, что типы данных есть, но переменные не привязаны ни к одному из них.
// Оператор typeof a или typeof(a) позволяет узнать, какой тип данных содержится в переменной а.

// let c = a + b; 
// console.log(typeof c);          // "number"
// c = a < b; 
// console.log(typeof(c));         // "boolean"
// console.log(typeof typeof(c));  // "string"
// c = 'QA Basics'; 
// console.log(typeof(c));         // "string"

// console.log(typeof 'Hello!');        // "string"
// console.log(typeof null);            // "object", это официально признанная ошибка в JavaScript
// let arr = [];
// console.log(typeof arr);             // "object"
// let functionForAll = ()=>{};
// console.log(typeof functionForAll);  // "function"
// let newObj = {};
// console.log(typeof(newObj));         // "object"


// К числовому типу данных (number) относятся целые и дробные, положительные и отрицательные числа, ноль, а также "специальные" числовые значения: Infinity, -Infinity и NaN. Infinity представляет собой математическую бесконечность. Мы можем получить ее в результате деления на ноль. NaN означает вычислительную ошибку. Это результат неправильной или неопределённой математической операции, например:
// console.log( 'Money' / 2 );         // NaN
// console.log(typeof( 'Money' / 2) ); // "number"

// % остаток от деления:
// a = a % 2; // переменной а присваиваем значение остатка от деления а на 2

// ** возведение в степень:
// a = a ** 3;  // значение переменной a возвели в 3-ю степень

// ++ инкремент (увеличение на 1):
// a++; // значение переменной a увеличилось на 1
// ++a; // значение переменной a увеличилось на 1

// -- декремент (уменьшение на 1):
// a--; // значение переменной a уменьшилось на 1
// --a; // значение переменной a уменьшилось на 1


// Строка (string) в JavaScript должна быть заключена в кавычки. В JavaScript существует три типа кавычек.
// let str ='Hello world';
// let str2 = "World"; 
// let str3 = `Sum  ${1+2}`;
// Двойные или одинарные кавычки являются «простыми», между ними нет разницы в JavaScript. Обратные кавычки же имеют «расширенный функционал». Они позволяют нам встраивать выражения в строку, заключая их в ${…}. Например,
// let price = 30;
// let count = 15;
// console.log(`Price of ${count} toys is ${price * count} dollars`); // выведет "Price of 15 toys is 450 dollars"

// Свойство length позволяет вычислить длину строки, т.е. количество символов в строке. str.length — это числовое свойство, а не функция, добавлять скобки не нужно. !!!Нумерация символов в строке начинается с нуля.!!!
// Обратиться к конкретному символу строки можно по его индексу. Например, str[0] - символ строки str по индексу 0.

// Со строками можно выполнять операцию слияния (операцию конкатенации), которая обозначается знаком +. 

// Иногда бывает необходимо в строку вставить специальные символы, такие как перевод строки, кавычки и т.п. Все специальные символы начинаются с обратного слеша, \ — так называемого «символа экранирования». Примеры специальных символов:
// \n - перевод строки
// \", \' - кавычки
// \t - знак табуляции
// \\ - обратный слеш

// Содержимое строки в JavaScript нельзя изменить. Нельзя взять символ посередине и заменить его. Как только строка создана — она такая навсегда. Строки в JavaScript иммутабельны. Все методы работы со строками предоставляют возможности либо только для чтения, либо возвращают новую строку. Иммутабельность предполагает, что после создания строки она не может быть изменена.



// ----------------------------------------------------------------------
// ({4}Занятие)


// Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь). Булевые значения также могут быть результатом сравнений:
// let a = 56;                 
// let b = 23;                 
// let comparison = a > b; 
// console.log( comparison );  // в консоль будет выведено true
// console.log ( a === b );    // в консоль будет выведено false

// let bulbOn = 'true';
// let ceilingIsEmpty = true;
// let bulbOff = false;
// let numberOfBulds = 1;
// console.log( bulbOn !== bulbOff );        // в консоль будет выведено true
// console.log( ceilingIsEmpty === numberOfBulds ); // в консоль будет выведено false
// console.log( bulbOn === ceilingIsEmpty );   // в консоль будет выведено false

// Специальное значение undefined означает, что «значение не было присвоено». Если переменная объявлена, но ей не присвоено никакого значения, то её значением будет undefined.
// Сравнение undefined с другими значениями вернет следующие результаты:
// 		console.log(undefined === undefined); // true
// 		console.log(undefined === null);      // false
// 		console.log(undefined == null);       // true
// 		console.log(undefined > 0);           // false
// 		console.log(undefined <= 0);          // false
// Обычно undefined используется для проверок, была ли переменная назначена. Специальное значение null означает «ничего», «пусто» или «значение намеренно отсутствует».

// Значение null не относится ни к одному из типов, рассмотренных ранее, а образует свой отдельный тип, состоящий из единственного значения null. Для записи в переменную «пустого» или «неизвестного» значения используется null. В JavaScript null НЕ является «ссылкой на несуществующий объект» или «нулевым указателем», как в некоторых других языках. Это просто специальное значение, которое имеет смысл «ничего» или «значение неизвестно». Интересной особенностью этого типа данных является то, что typeof null выдает результат "object" – это официально признанная ошибка в языке, которая сохраняется для совместимости. На самом делеnull – это не объект, а отдельный тип данных. Другой особенностью этого типа данных является то, что null строго равен только самому себе и ничему больше. 
// 			При нестрогом сравнении null и undefined получаем true:
// 				console.log(null == undefined); // true
// При выполнении арифметических операций и сравнениях (>, >=, <, <=) null становится обычным нулем 0.

// В JavaScript в настоящее время существует 8 основных типов данных:
// 		"number" - для чисел любого вида: целочисленных или с плавающей запятой, целые числа ограничены ±2**53;
// 		"bigint" - целые числа произвольной длины;
// 		"string" - строка может содержать один или несколько символов, но отдельного односимвольного типа не существует;
// 		"boolean" - логическое значение true или false;
// 		null для неизвестных значений (тип, который имеет одно значение null);
// 		"undefined" - для непроинициализированных переменных (отдельный тип, который имеет одно значение undefined);
// 		"object" - объект (для более сложных структур данных);
// 		"symbol" - символ для уникальных идентификаторов.

// Обобщим и применим на практике все наши знания о примитивных типах данных.
// 	К числовому типу данных (number) относятся целые и дробные, положительные и отрицательные числа, а также «специальные числовые значения: Infinity, -Infinity и NaN.
// Тип string - последовательность символов, заключенная в кавычки.
// Булевый тип (boolean) может принимать только два значения: true (истина) и false (ложь).
// Специальное значение undefined означает, что «значение не было присвоено».
// Значение null образует свой отдельный тип, состоящий из единственного значения null. Имеет тип "object".

// ----------------------------------------------------------------------
// ({5}Занятие)

// Операторы бывают разными
// 	Унарным называется оператор, который применяется к одному операнду. Например, оператор унарный минус - меняет знак числа на противоположный.
// 	Бинарным называется оператор, который применяется к двум операндам.

// 	Сложение строк, бинарный +
// Обычно при помощи плюса + складывают числа. Операция конкатенации (слияния) строк также обозначается с помощью оператора +. Если хотя бы один операнд является строкой, то второй будет также преобразован к строке. Сложение и преобразование строк – это особенность бинарного плюса +. Другие арифметические операторы работают только с числами и всегда преобразуют операнды в числа.

// 	Преобразование к числу, унарный плюс +
// Плюс + существует в двух формах: бинарной и унарной. Унарный плюс + преобразует нечисловые значения в число. Бинарный плюс выполнит слияние строк.
// 	Инкремент ++ увеличивает на 1
// 	Декремент -- уменьшает на 1
// 	Постфиксная форма – оператор идёт после переменной: counter++.
// 	Префиксная форма – оператор идёт перед переменной: ++counter.

// Сокращённая арифметика с присваиванием
// Часто нужно применить оператор к переменной и сохранить результат в ней же, то эту запись можно укоротить при помощи совмещённых операторов += и *=
// let n = 2;
// n += 5;          //  n = n + 5
// n *= 2;          //  n = n * 2
// Аналогично -= и /=


// В выражениях, имеющих несколько операторов, порядок их выполнения определяется приоритетом.
// Первыми выполняются операторы, приоритет которых выше. Так, например, умножение выполняется раньше сложения, а использование скобок и унарный плюс выполнится даже раньше умножения. Приоритет у оператора присваивания = один из самых низких, поэтому в длинных выражениях обычно сперва выполняются все действия "справа от равно", а затем результат присваивается в переменную.В JavaScript существует целая таблица приоритетов. Ознакомиться с ней можно по ссылке: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// Иногда в JavaScript используются сокращения для некоторых комбинаций операторов:
// y = y + x; равносильно y += x;
// y = y - x; равносильно y -= x;
// y = y * x; равносильно y *= x;
// y = y / x; равносильно y /= x;
// y = y % x; равносильно y %= x;


// Оператор взятия остатка % интересен тем, что, несмотря на обозначение, никакого отношения к процентам не имеет. Его результат a % b – это остаток от деления a на b.
//		 let num = 453;
// 	 let last = num % 10;
// 	 console.log(last);

// Если у вас есть двухзначное число, то цифры числа можно получить так:
// 	 let num = 34;
// 	 let secondDigit = num % 10;   //4
// 	 let firstDigit = (num - secondDigit) / 10;  // (34 - 4) / 10 = 3

// Также оператор взятия остатка % используется для определения делимости одного числа на другое. Число а делится на число b, если остаток от деления a на b равен нулю. Например, число а является четным, если a % 2 === 0.


// Оператор возведения в степень ** возвращает результат первого операнда в степень. Для натурального числа b результатом выражения a ** b будет a умноженное само на себя b раз. Этот оператор работает и с дробными числами. В этом случае он будет извлекать корень указанной степени. Во многих языках оператор возведения в степень ** имеет приоритет выше, чем у унарных операторов, но в JavaScript ситуация обстоит иначе. Из-за таких разночтений в JavaScript невозможно поставить унарный оператор перед базовым числом.
// 		-2 ** 2;   // Это некорректно в JavaScript
// 		-(2 ** 2); // -4 в JavaScript

// ----------------------------------------------------------------------

// ({6}Занятие)

// В программировании одной из самых частых операций является увеличение или уменьшение переменной на единицу. Более короткая запись для увеличения переменной на единицу называется инкремент и записывается в форме i++ или ++i. Обе эти формы увеличивают результат на единицу, но есть между ними и разница.

// 	"Постфиксная форма" i++:
// let x = 7;
// let y = x++;  значение x увеличивается на единицу x = 8, но возвращается старое значение y = 7 

// 	"Префиксная форма" ++i:
// let x = 7;
// let y = ++x;  значение x увеличивается на единицу x = 8, возвращается новое значение y = 8 

// Аналогично инкременту, существует более короткая запись для уменьшения переменной на единицу - декремент. "Постфиксная форма" i-- и "Префиксная форма" --i.

// // !!Необходимо отметить, что инкремент/декремент можно применить только к переменной. Код 5++ даст ошибку.


// 	Есть 7 «примитивных» типов: number, bigint, string, boolean, null, undefined, symbol и 8-й тип – объекты object. Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств. Свойство – это пара ключ: значение, где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно. Если в объекте несколько свойств, то они перечисляются через запятую. Объявляются объекты при помощи фигурных скобок {...}
// 	Пустой объект можно создать двумя способами:
// 		let user = new Object(); // "конструктор объекта"
// 		let user = {};           // "литерал объекта"

// Для обращения к свойствам используется запись «через точку»: user.name, user.age.

// Имя свойства может состоять из нескольких слов, но тогда оно должно быть заключено в кавычки:
// let user = {
//   age: 30,
//   "likes programming": true, 
// }		Для свойств, имена которых состоят из нескольких слов, доступ к значению «через точку» не работает, например, 
//console.log(user.likes programming);  // появится ошибка
// console.log(user['likes programming']);  // true

// Точка требует, чтобы ключ был именован по правилам именования переменных: не имел пробелов, не начинался с цифры и не содержал специальные символы, кроме $ и _. Если ключ начинается с цифры или содержит специальные символы, тогда используется доступ к свойствам через квадратные скобки. Такой способ сработает с любым именем свойства



// let user = { 
//   name: 'Bob',
//   age: 39,
// }

// Для изменения свойства объекта используется команда присваивания, например,
// user.name  = 'Leo',

// Для добавления свойства записывают команду присваивания, например,
// 	user.phone  = 1942223333;
// 	user.address  = {
//  	 state: 'CA',
//  	 city: 'San Diego',
// 	}
// 	console.log(user.address.city);
// Для удаления свойства можно использовать оператор delete, например,
//		 delete user.age;



// Как определить, существует ли какое-то свойство у объекта:

// 	1 способ. Неявное преобразование в булевый тип: 
// if  (user.age) console.log ('Yes');
// Здесь user.age неявно преобразуется в булевый (логический) тип, и т.к. значение user.age не равно нулю, NaN, пустой строке или undefined, то значение выражения в скобках будет true и в консоль будет выведено 'Yes'.

// 	2 способ. Преобразование в булевый тип с помощью функции Boolean().
// console.log(Boolean(user.age)); //true

	// 3 способ. Преобразование в булевый тип c помощью двойного «не»: !!
// console.log(!!(user.age));

//		4 способ. Доступ к свойствам объекта через квадратные скобки.
// console.log(!!user['age']); //true
// const a = 'age';
// console.log(!!user[a]); //true
// if  (user[a]) console.log ('Yes');  //'Yes'

// 	5 способ. Проверка существования свойства – сравнение его с undefined.
// let user = {
//  name: 'Alice',
//  age: 25,
// }
// console.log(user.address === undefined);  //true (свойства address нет)

// 	Вышеперечисленные способы не всегда работают, если свойство есть, но оно пустое (равно нулю, NaN, пустой строке или undefined). В этих случаях помогает использование метода hasOwnProperty()

// 	6 способ. Использование метода hasOwnProperty().
// Чтобы проверить, есть ли вообще свойство у объекта, воспользуемся методом hasOwnProperty(), который возвращает логическое значение, указывающее, содержит ли объект указанное свойство. Например,
// console.log(user.hasOwnProperty('age'));

// 	7 способ. Использование переменной вместо свойства.
// const a = 'age';
// console.log(user.hasOwnProperty(a));

// 	8 способ. Проверка существования свойства: "key" in obj .
// Обычно строгого сравнения "=== undefined" достаточно для проверки наличия свойства. Но есть особый случай, когда оно не подходит, и нужно использовать in. Это когда свойство существует, но содержит значение undefined:
// 	let user = {
//   	 name: 'Alice',
//  	 age: 25,
//  	 isStudent: true,
//   	 address: undefined,
// 	}
// 	console.log(user.address === undefined);  // true (свойство address есть, но его значение undefined)
// 	console.log(user.lastName === undefined); // true (свойства lastName нет)
//	   console.log('address' in user);  // true (свойство address есть)
// 	console.log('lastName' in user); // false (свойства lastName нет)

// ----------------------------------------------------------------------

// ({7}Занятие)

// 	При сравнении разных типов данных и использовании логических операторов (о них речь пойдет дальше) сравниваемые значения зачастую преобразовываются к логическим значениям. Необходимо запомнить, что значения, которые интуитивно "пусты", становятся false. Их несколько: 0, пустая строка, null, undefined и NaN. Остальное, в том числе и любые объекты – true.
// 	Логические значения, помимо получения в качестве сравнений, можно использовать и напрямую, присваивать переменным, работать с ними, как с любыми другими:
// 	let a = true; // присваивать явно
// 	let b = 3 > 4; // или как результат сравнения
// 	console.log( b ); // false
// 	console.log( a == b ); // (true == false) неверно, выведет false

// 	Три самых популярных логических оператора (на самом деле их больше):
// && (И) - логическое И,
// || (ИЛИ) - логическое ИЛИ,
// ! (НЕ) - логическое НЕ.
// 	Как и числовые операторы, логические операторы имеют разный приоритет, который влияет на последовательность их выполнения. Запомните это последовательность: оператор ! (НЕ) выполнится первым, затем && (И), последним || (ИЛИ).


// 	Логический оператор ИЛИ может применяться к значениям любого типа и возвращать также значение любого типа. Этот оператор работает следующим образом: если хотя бы один из аргументов true, то возвращает true, иначе – false.
// 	Если значение не логического типа, то оно к нему приводится в целях вычислений. Например, число 1 будет воспринято как true, а 0 – как false. Но выводиться будет результат, не приобразованный к типу boolean:
// 	console.log( 1 || 0 ); // сработает как ( true || false ) -> true 

// 	В случае, когда в примере встречается несколько операторов ИЛИ (||), вычисления производятся слева направо. При этом будет применяться "короткий цикл вычислений". НО! Как только встретится первое значение true, итоговый результат будет true, и остальные аргументы проигнорируются. При этом возвратится значение, на котором вычисления остановились, не преобразованное к логическому типу.
// console.log( 0 || false || 1 || null ); // результат = 1 (первое true)

// 	Если все значения «ложные», то || возвратит последнее из них:
// console.log(0 || false || undefined || null ); /* null


// 	Если логический оператор ИЛИ (||) "ищет" первое истинное утверждение в ряду, то логический оператор И (&&), наоборот, работает до тех пор, пока не встретит false.
// 	Аналогично работе ИЛИ (||): если значение не логического типа, то оно к нему приводится в целях вычислений. Например, число 1 будет воспринято как true, а 0 – как false. Но выводиться будет результат, не приобразованный к типу boolean:
// console.log( 1 && 0 ); // сработает, как ( true && false ) -> false 

// 	В случае, когда в примере встречается несколько операторов И (&&), вычисления также производятся слева направо. При этом будет применяться "короткий цикл вычислений". НО! Как только встретится первое значение false, итоговый результат будет false, и остальные аргументы проигнорируются. При этом возвратится значение, на котором вычисления остановились, не преобразованное к логическому типу.
// console.log( 1 && 'dah' && null && 0 ); // результат = null (первое false)

// 	Если все значения «истинные», то && возвратит последнее из них:
// console.log( 1 && 'dah' && true && 123 ); // 123, т.к. все аргументы - true

// Оператор НЕ (!) (логическое отрицание) - логический оператор, который получает только один аргумент. Как работает логическое НЕ (!):
// 1. Сначала приводит аргумент к логическому типу true/false.
// 2. Затем возвращает противоположное значение.

// 	Таким образом:
//	 	console.log( !true ); // false
// 	console.log( !0 ); // true

// 	Исходя из вышесказанного, двойное НЕ (!!) можно использовать для преобразования значений к логическому типу:
// 	console.log( !!'string' ); // true
// 	console.log( !!null ); // false
// ----------------------------------------------------------------------


// ({8}Занятие)


// 	Оператор if else используется, когда необходимо выполнить различные действия в зависимости от условия.
//		Синтаксис этой конструкции выглядит следующим образом:
//	 if (условие) {
//	   инструкция1;
//	 } else {
//	   инструкция2;
//	 }
// 	Оператор if получает условие и вычисляет его. Если результат этого вычисления - true, то выполнится инструкция1 (блок, следующий сразу за условием). Необязательный блок else и его инструкция2 выполняется, если условие неверно.

// Последовательность нескольких операторов if позволяет вернуть значение в зависимости не от одного условия, а от нескольких. В этом случае операторы else и if комбинируются и записываются следующим образом:
// 	let price = 100;
// 	if (price === 0) {
//  	 console.log('Is it free?');
// 	} else if (price > 0) {
//  	 console.log('How much?');
// 	} else { // что означает price < 0
//  	 console.log('Negative?');
// 	}
// Условия будут проверяться одно за другим сверху вниз, выполнится первое, возвращающее истинное значение, остальные проигнорируются.


// 	Оператор «вопросительный знак» называют «тернарным оператором», так как этот оператор имеет три аргумента. Синтаксис оператора:
// 	let result = условие ? значение1 : значение2;
// 	Сначала вычисляется условие: если оно истинно, тогда возвращается значение1, в противном случае – значение2.

// Например, есть команда ветвления:
// 	let isAdult;
// 	if (age > 18) {
//  	 isAdult = true;
// 	} else {
//  	 isAdult = false;
// 	}
// 	Эту команду можно переписать в более коротком виде с помощью тернарного оператора:
// 	let isAdult = (age > 18) ? true : false;
// 	Можно опустить круглые скобки вокруг age > 18. Но скобки делают код более читабельным, поэтому лучше их использовать. Вложенные тернарные операторы допускаются, но они сильно усложняют читаемость кода, поэтому в этих случаях лучше использовать команду if else.