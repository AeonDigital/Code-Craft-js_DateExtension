 Code Craft - DateExtension
============================

> [Aeon Digital](http://www.aeondigital.com.br)
>
> rianna@aeondigital.com.br


**Code Craft** é um conjunto de soluções front-end e outras server-side para a construção de aplicações web.
Tais soluções aqui apresentadas são a minha forma de compartilhar com a `comunidade online` parte do que aprendi 
(e continuo aprendendo) nos foruns, sites, blogs, livros e etc. assim como na experiência adquirida no contato
direto com profissionais e estudantes que, como eu, amam o universo `Web Developer` e nunca se dão por satisfeitos 
com seu nível atual de conhecimento.


## C.C. - DateExtension

A seguinte bibliotéca extende as funcionalidades do objeto `Date` adicionando opções ou, variações
de manipulação percebidas como necessárias para facilitar o processo de lidar com estes objetos
em javascript.


### Novos membros estáticos

* `DayOfWeek`               : Enumerador dos dias da semana.
* `IsLeapYear`              : Identifica quando um ano é bissexto.
* `DaysInMonth`             : Retorna o número de dias no ano e mês especificado.
* `DifferenceInDays`        : Retorna a diferença em dias entre as 2 instâncias Date.
* `Limit`                   : Traz métodos para testar os limites de cada parte de um objeto Date.
** `Limit.Year`             : Corrige um valor que esteja fora do limite definido (entre 1-9999).
** `Limit.Month`            : Corrige um valor que esteja fora do limite definido (entre 0-11).
** `Limit.Day`              : Corrige um valor que esteja fora do limite definido (entre 1-31).
** `Limit.Hour`             : Corrige um valor que esteja fora do limite definido (entre 0-23).
** `Limit.Minute`           : Corrige um valor que esteja fora do limite definido (entre 0-59).
** `Limit.Second`           : Corrige um valor que esteja fora do limite definido (entre 0-59).
** `Limit.Millisecond`      : Corrige um valor que esteja fora do limite definido (entre 0-999).


### Extenções do prototype Date

* `Clone`                   : Clona um objeto Date.
* `DayOfWeek`               : Retorna o dia da semana em formato string "en".
* `SetYear`                 : Seta o ano da instância mantendo-a dentro do range válido.
* `AddYears`                : Adiciona "y" ao ano da instância atual.
* `SetMonth`                : Seta o mês da instância mantendo-a dentro do range válido.
* `AddMonths`               : Adiciona "m" ao mês da instância atual.
* `SetDay`                  : Seta o dia da instância mantendo-a dentro do range válido.
* `AddDays`                 : Adiciona "d" ao dia da instância atual.
* `SetHour`                 : Seta a Hora da instância mantendo-a dentro do range válido.
* `AddHours`                : Adiciona "h" à hora da instância atual.
* `SetMinute`               : Seta o minuto da instância mantendo-a dentro do range válido.
* `AddMinutes`              : Adiciona "m" aos minutos da instância atual.
* `SetSecond`               : Seta o segundo da instância mantendo-a dentro do range válido.
* `AddSeconds`              : Adiciona "s" aos segundos da instância atual.
* `SetMillisecond`          : Seta o millisegundo da instância mantendo-a dentro do range válido.
* `AddMilliseconds`         : Adiciona "m" aos millesegundos da instância atual.
* `SetDate`                 : Altera os Atributos de Data da Instância Date.
* `SetTime`                 : Altera os Atributos de Hora da Instância Date
* `FirstWorkDayInMonth`     : Retorna o Date setado para o primeiro dia útil do mês.
* `FirstDayOfWeekInMonth`   : Retorna o Date setado para o primeiro dia da semana do tipo indicado dentro do mês corrente.
* `FirstWorkDayInYear`      : Retorna o Date setado para o primeiro dia útil do ano.
* `FirstDayOfWeekInYear`    : Retorna o Date setado para o primeiro dia da semana do tipo indicado dentro do ano corrente.
* `LastWorkDayInMonth`      : Retorna o Date setado para o último dia útil do mês corrente.
* `LastDayOfWeekInMonth`    : Retorna o Date setado para o último dia da semana do tipo indicado dentro do mês corrente.
* `LastWorkDayInYear`       : Retorna o Date setado para o último dia útil do ano corrente.
* `LastDayOfWeekInYear`     : Retorna o Date setado para o último dia da semana do tipo indicado dentro do ano corrente.
* `ClosestWorkDay`          : Retorna o Date setado para o dia útil mais próximo da data atual.
* `NextWorkDay`             : Retorna o Date setado para o próximo dia útil.
* `IsHoliday_Brasil`        : Retorna true quando a a data atual é um dos feriados nacionais.
* `NextWorkDay_Brasil`      : Retorna o Date setado para o próximo dia útil levando em conta os feriados nacionais.


### Extenções específicas.

* `BeginningOfDay`          : Retorna o Date com a Hora setada para 0:0:0:0 .
* `BeginningOfWeek`         : Retorna o Date setado para a segunda-feira da semana corrente.
* `BeginningOfMonth`        : Retorna o Date setado para o primeiro dia do mês corrente.
* `BeginningOfYear`         : Retorna o Date setado para o primeiro dia do ano corrente.
* `EndOfDay`                : Retorna o Date com a Hora setada para 23:59:59:999 .
* `EndOfMonth`              : Retorna o Date setado para o último dia do mês corrente.
* `EndOfYear`               : Retorna o Date setado para o último dia do ano corrente.


**Importante**

Tenha em mente que em algumas vezes, neste e em outros projetos **Code Craft** optou-se de forma consciênte em 
não utilizar uma ou outra *regra de otimização* dos artefatos de software quando foi percebida uma maior vantagem para
a equipe de desenvolvimento em flexibilizar tal ponto do que extritamente seguir todas as regras de otimização.


### Compatibilidade

Não é intenção deste nem de outros projetos do conjunto de soluções **Code Craft** em manter 
compatibilidade com navegadores antigos (IE8<).


________________________________________________________________________________________________________________________



## Licença

Para este e outros projetos **Code Craft** é utilizada a [Licença GNUv3](LICENCE.md).
