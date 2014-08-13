/**
* @package Code Craft
* @pdesc Conjunto de soluções front-end.
*
* @module Date
* @file Expanções de funcionalidades para o objeto Date.
*
* @author Rianna Cantarelli <rianna.aeon@gmail.com>
*/





/**
* Objeto Date do javascript.
*
* @class Date
*
* @static
*
* @global
*/





/**
* Enumerador dos dias da semana.
*
* @readonly
*
* @memberof Date
*
* @enum DayOfWeek
*
* @type {String}
*/
 Date.DayOfWeek = {
    /**
    * Domingo. 
    *
    * @memberof DayOfWeek
    */
	Sunday : 'Sunday',
    /**
    * Segunda. 
    *
    * @memberof DayOfWeek
    */
	Monday : 'Monday',
    /**
    * Terça. 
    *
    * @memberof DayOfWeek
    */
	Tuesday : 'Tuesday',
    /**
    * Quarta. 
    *
    * @memberof DayOfWeek
    */
	Wednesday : 'Wednesday',
    /**
    * Quinta. 
    *
    * @memberof DayOfWeek
    */
	Thursday : 'Thursday',
    /**
    * Sexta. 
    *
    * @memberof DayOfWeek
    */
	Friday : 'Friday',
    /**
    * Sábado. 
    *
    * @memberof DayOfWeek
    */
	Saturday : 'Saturday'
};

/**
* Identifica quando um ano é bissexto.
* 
* @function IsLeapYear
*
* @memberof Date
*
* @static
*
* @param {Integer}          y           Ano que será testado.
*
* @return {Boolean}
*/
Date.IsLeapYear = function(y) {
	if(y % 4 == 0 && (y % 100 != 0 || y % 400 == 0)) { return true; }
	return false;
};

/**
* Retorna o número de dias no ano e mês especificado.
* 
* @function DaysInMonth
*
* @memberof Date
*
* @static
*
* @param {Integer}          y           Ano.
* @return {Integer}         m           Mês.
*
* @return {Integer}
*/
Date.DaysInMonth = function (y, m) {
    var oD = new Date(y, (m + 1), 1);
    oD.setDate(oD.getDate() - 1);
    return oD.getDate();
};

/**
* Retorna a diferença em dias entre as 2 instâncias Date.
* 
* @function DifferenceInDays
*
* @memberof Date
*
* @static
*
* @param {Date}         d1      Primeira data.
* @param {Date}         d2      Segunda data.
*
* @return {Integer}
*/
Date.DifferenceInDays = function(d1, d2) {
	return Math.round(Math.abs(d1 - d2) / 86400000); 
};

/**
* Traz métodos para testar os limites de cada parte de um objeto Date.
*
* @class Date.Limit
*
* @static
*
* @type {Object}
*/
Date.Limit = {
    /**
    * Corrige um valor que esteja fora do limite definido (entre 1-9999).
    * 
    * @function Year
    *
    * @memberof Date.Limit
    *
    * @static
    *
    * @param {Integer}          y           Ano.
    *
    * @return {Integer}
    */
	Year : function(y) {
        y = (y > 9999) ? 9999 : y;
		return (y < 1) ? 1 : y;
	},
    /**
    * Corrige um valor que esteja fora do limite definido (entre 0-11).
    * 
    * @function Month
    *
    * @memberof Date.Limit
    *
    * @static
    *
    * @param {Integer}          m           Mês.
    *
    * @return {Integer}
    */
	Month : function(m) {
        m = (m > 11) ? 11 : m;
		return (m < 0) ? 0 : m;
	},
    /**
    * Corrige um valor que esteja fora do limite definido (entre 1-31).
    * 
    * @function Day
    *
    * @memberof Date.Limit
    *
    * @static
    *
    * @param {Integer}          d           Dia.
    * @param {Integer}          m           Mês.
    * @param {Integer}          y           Ano.
    *
    * @return {Integer}
    */
	Day : function(d, m, y) {
		var mD = Date.DaysInMonth(y, m);
        d = (d > mD) ? mD : d;
		return (d < 1) ? 1 : d;
	},
    /**
    * Corrige um valor que esteja fora do limite definido (entre 0-23).
    * 
    * @function Hour
    *
    * @memberof Date.Limit
    *
    * @static
    *
    * @param {Integer}          h           Hora.
    *
    * @return {Integer}
    */
	Hour : function(h) {
        h = (h > 23) ? 23 : h;
        return (h < 0) ? 0 : h;
	},
    /**
    * Corrige um valor que esteja fora do limite definido (entre 0-59).
    * 
    * @function Minute
    *
    * @memberof Date.Limit
    *
    * @static
    *
    * @param {Integer}          m           Minuto.
    *
    * @return {Integer}
    */
	Minute : function(m) {
        m = (m > 59) ? 59 : m;
        return (m < 0) ? 0 : m;
	},
    /**
    * Corrige um valor que esteja fora do limite definido (entre 0-59).
    * 
    * @function Second
    *
    * @memberof Date.Limit
    *
    * @static
    *
    * @param {Integer}          s           Segundo.
    *
    * @return {Integer}
    */
	Second : function(s) {
        s = (s > 59) ? 59 : s;
        return (s < 0) ? 0 : s;
	},
    /**
    * Corrige um valor que esteja fora do limite definido (entre 0-999).
    * 
    * @function Millisecond
    *
    * @memberof Date.Limit
    *
    * @static
    *
    * @param {Integer}          m           Milessegundo.
    *
    * @return {Integer}
    */
	Millisecond : function(m) {
        m = (m > 999) ? 999 : m;
        return (m < 0) ? 0 : m;
	}
};




















/**
* Clona um objeto Date.
* 
* @function Clone
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.Clone = function() {
	return new Date(this.getTime());
};

/**
* Retorna o dia da semana em formato string "en".
* 
* @function DayOfWeek
*
* @memberof Date
*
* @return {String}
*/
Date.prototype.DayOfWeek = function () {
    var dW = Date.DayOfWeek;
    var r = null;
    switch (this.getDay()) {
        case 0: r = dW.Sunday; break;
        case 1: r = dW.Monday; break;
        case 2: r = dW.Tuesday; break;
        case 3: r = dW.Wednesday; break;
        case 4: r = dW.Thursday; break;
        case 5: r = dW.Friday; break;
        case 6: r = dW.Saturday; break;
    }
    return r;
};

/**
* Seta o ano da instância mantendo-a dentro do range válido.
* Pode alterar os demais atributos da instância atual.
* 
* @function SetYear
*
* @memberof Date
*
* @param {Integer}          y           Ano.
*
* @return {Date}
*/
Date.prototype.SetYear = function(y) {
	var o = this.Clone();
	o.setFullYear(Date.Limit.Year(y));
	return o;
};

/**
* Adiciona "y" ao ano da instância atual.
* Pode alterar os demais atributos da instância atual.
* 
* @function AddYears
*
* @memberof Date
*
* @param {Integer}          y           Ano.
*
* @return {Date}
*/
Date.prototype.AddYears = function(y) {
	var o = this.Clone();
	o.setFullYear(o.getFullYear() + y);
	return o;
};

/**
* Seta o mês da instância mantendo-a dentro do range válido.
* Pode alterar os demais atributos da instância atual.
* 
* @function SetMonth
*
* @memberof Date
*
* @param {Integer}          m           Mês.
*
* @return {Date}
*/
Date.prototype.SetMonth = function(m) {
	var o = this.Clone();
	o.setMonth(Date.Limit.Month(m));
	return o;
};

/**
* Adiciona "m" ao mês da instância atual.
* Pode alterar os demais atributos da instância atual.
* 
* @function AddMonths
*
* @memberof Date
*
* @param {Integer}          m           Mês.
*
* @return {Date}
*/
Date.prototype.AddMonths = function(m) {
	var o = this.Clone();
	o.setMonth(this.getMonth() + m);
	return o;
};

/**
* Seta o dia da instância mantendo-a dentro do range válido.
* Pode alterar os demais atributos da instância atual.
* 
* @function SetDay
*
* @memberof Date
*
* @param {Integer}          d           Dia.
*
* @return {Date}
*/
Date.prototype.SetDay = function(d) {
	var o = this.Clone();
	o.setDate(Date.Limit.Day(d, o.getMonth(), o.getFullYear()));
	return o;
};

/**
* Adiciona "d" ao dia da instância atual.
* Pode alterar os demais atributos da instância atual.
* 
* @function AddDays
*
* @memberof Date
*
* @param {Integer}          d           Dia.
*
* @return {Date}
*/
Date.prototype.AddDays = function(d) {
	var o = this.Clone();
	o.setDate(this.getDate() + d);
	return o;
};

/**
* Seta a Hora da instância mantendo-a dentro do range válido.
* Pode alterar os demais atributos da instância atual.
* 
* @function SetHour
*
* @memberof Date
*
* @param {Integer}          h           Hora.
*
* @return {Date}
*/
Date.prototype.SetHour = function(h) {
	var o = this.Clone();	
	o.setHours(Date.Limit.Hour(h));
	return o;
};

/**
* Adiciona "h" à hora da instância atual.
* Pode alterar os demais atributos da instância atual.
* 
* @function AddHours
*
* @memberof Date
*
* @param {Integer}          h           Hora.
*
* @return {Date}
*/
Date.prototype.AddHours = function(h) {
	var o = this.Clone();
	o.setHours(this.getHours() + h);
	return o;
};

/**
* Seta o minuto da instância mantendo-a dentro do range válido.
* Pode alterar os demais atributos da instância atual.
* 
* @function SetMinute
*
* @memberof Date
*
* @param {Integer}          m           Minuto.
*
* @return {Date}
*/
Date.prototype.SetMinute = function(m) {
	var o = this.Clone();
	o.setMinutes(Date.Limit.Minute(m));
	return o;
};

/**
* Adiciona "m" aos minutos da instância atual.
* Pode alterar os demais atributos da instância atual.
* 
* @function AddMinutes
*
* @memberof Date
*
* @param {Integer}          m           Minuto.
*
* @return {Date}
*/
Date.prototype.AddMinutes = function(m) {
	var o = this.Clone();
	o.setMinutes(this.getMinutes() + m);
	return o;
};

/**
* Seta o segundo da instância mantendo-a dentro do range válido.
* Pode alterar os demais atributos da instância atual.
* 
* @function SetSecond
*
* @memberof Date
*
* @param {Integer}          s           Segundo.
*
* @return {Date}
*/
Date.prototype.SetSecond = function(s) {
	var o = this.Clone();
	o.setSeconds(Date.Limit.Second(s));
	return o;
};

/**
* Adiciona "s" aos segundos da instância atual.
* Pode alterar os demais atributos da instância atual.
* 
* @function AddSeconds
*
* @memberof Date
*
* @param {Integer}          s           Segundo.
*
* @return {Date}
*/
Date.prototype.AddSeconds = function(s) {
	var o = this.Clone();
	o.setSeconds(this.getSeconds() + s);
	return o;
};

/**
* Seta o millisegundo da instância mantendo-a dentro do range válido.
* Pode alterar os demais atributos da instância atual.
* 
* @function SetMillisecond
*
* @memberof Date
*
* @param {Integer}          m           Milessegundo.
*
* @return {Date}
*/
Date.prototype.SetMillisecond = function(m) {
	var o = this.Clone();
	o.setMilliseconds(Date.Limit.Millisecond(m));
	return o;
};

/**
* Adiciona "m" aos millesegundos da instância atual.
* Pode alterar os demais atributos da instância atual.
* 
* @function AddMilliseconds
*
* @memberof Date
*
* @param {Integer}          m           Milessegundo.
*
* @return {Date}
*/
Date.prototype.AddMilliseconds = function(n) {
	var o = this.Clone();
	o.setMilliseconds(this.getMilliseconds() + n);
	return o;
};

/**
* Altera os Atributos de Data da Instância Date.
* 
* @function SetDate
*
* @memberof Date
*
* @param {Integer}          y           Ano.
* @param {Integer}          m           Mês.
* @param {Integer}          d           Dia.
*
* @return {Date}
*/
Date.prototype.SetDate = function(y, m, d) {
	y = Date.Limit.Year(y);
	m = Date.Limit.Month(m);
	d = Date.Limit.Day(d, y, m);

	return new Date(y, m, d, 
            this.getHours(), 
            this.getMinutes(), 
            this.getSeconds(), 
            this.getMilliseconds());
};

/**
* Altera os Atributos de Hora da Instância Date.
* 
* @function SetTime
*
* @memberof Date
*
* @param {Integer}          h           Hora.
* @param {Integer}          m           Minuto.
* @param {Integer}          s           Segundo.
* @param {Integer}          [ml]        Milessegundo.
*
* @return {Date}
*/
Date.prototype.SetTime = function (h, m, s, ml) {
    var dL = Date.Limit;
    h = dL.Hour(h);
    m = dL.Minute(m);
    s = dL.Second(s);
    ml = (ml === undefined) ? this.getMilliseconds() : dL.Millisecond(ml);

    return new Date(this.getFullYear(), this.getMonth(), this.getDate(), h, m, s, ml);
};

/**
* Retorna o Date setado para o primeiro dia útil do mês.
* 
* @function FirstWorkDayInMonth
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.FirstWorkDayInMonth = function () {
    var o = this.Clone();
    o = o.SetDay(1);
    return (o.getDay() == 0) ? o.AddDays(1) : ((o.getDay() == 6) ? o.AddDays(2) : o);
};

/**
* Retorna o Date setado para o primeiro dia da semana do tipo indicado dentro do mês corrente.
* 
* @function FirstDayOfWeekInMonth
*
* @memberof Date
*
* @param {Integer}          d           Inteiro referente ao dia da semana (0=domingo; 1=segunda..., 6=sabado).
*
* @return {Date}
*/
Date.prototype.FirstDayOfWeekInMonth = function (d) {
    var o = this.Clone();
    o = o.SetDay(1);

    d = (d == 0) ? 7 : d;
    var bD = (o.getDay() == 0) ? 7 : o.getDay();
    return o.AddDays((d >= bD) ? d - bD : 7 - bD + d);
};

/**
* Retorna o Date setado para o primeiro dia útil do ano.
* 
* @function FirstWorkDayInYear
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.FirstWorkDayInYear = function() {
	var o = this.Clone();
	return o.SetMonth(0).FirstWorkDayInMonth();
};

/**
* Retorna o Date setado para o primeiro dia da semana do tipo indicado dentro do ano corrente.
* 
* @function FirstDayOfWeekInYear
*
* @memberof Date
*
* @param {Integer}          d           Inteiro referente ao dia da semana (0=domingo; 1=segunda..., 6=sabado).
*
* @return {Date}
*/
Date.prototype.FirstDayOfWeekInYear = function(d) {
	var o = this.Clone();
	return o.SetMonth(0).FirstDayOfWeekInMonth(d);
};

/**
* Retorna o Date setado para o último dia útil do mês corrente.
* 
* @function LastWorkDayInMonth
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.LastWorkDayInMonth = function () {
    var o = this.Clone();
    o = o.SetDay(Date.DaysInMonth(o.getFullYear(), o.getMonth()));
    return o.AddDays((o.getDay() == 0) ? -2 : ((o.getDay() == 6) ? -1 : 0));
};

/**
* Retorna o Date setado para o último dia da semana do tipo indicado dentro do mês corrente.
* 
* @function LastDayOfWeekInMonth
*
* @memberof Date
*
* @param {Integer}          d           Inteiro referente ao dia da semana (0=domingo; 1=segunda..., 6=sabado).
*
* @return {Date}
*/
Date.prototype.LastDayOfWeekInMonth = function (d) {
    var o = this.Clone();
    o = o.SetDay(Date.DaysInMonth(o.getFullYear(), o.getMonth()));
    d = (d == 0) ? 7 : d;

    var bD = (o.getDay() == 0) ? 7 : o.getDay();
    return o.AddDays(((bD >= d) ? (bD - d) * -1 : (7 + bD - d) * -1));
};

/**
* Retorna o Date setado para o último dia útil do ano corrente.
* 
* @function LastWorkDayInYear
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.LastWorkDayInYear = function() {
	var o = this.Clone();
	o = o.SetMonth(11);
	return o.LastWorkDayInMonth();
};

/**
* Retorna o Date setado para o último dia da semana do tipo indicado dentro do ano corrente.
* 
* @function LastDayOfWeekInYear
*
* @memberof Date
*
* @param {Integer}          d           Inteiro referente ao dia da semana (0=domingo; 1=segunda..., 6=sabado).
*
* @return {Date}
*/
Date.prototype.LastDayOfWeekInYear = function(d) {
	var o = this.Clone();
	o = o.SetMonth(11);
	return o.LastDayOfWeekInMonth(d);
};

/**
* Retorna o Date setado para o dia útil mais próximo da data atual.
* 
* @function ClosestWorkDay
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.ClosestWorkDay = function () {
    var o = this.Clone();
    var bD = o.getDay();
    return ((bD == 6) ? o.AddDays(-1) : ((bD == 0) ? o.AddDays(1) : o));
};

/**
* Retorna o Date setado para o próximo dia útil.
* 
* @function NextWorkDay
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.NextWorkDay = function() {
	var o = this.Clone();
	var bD = o.getDay();
	return ((bD == 6) ? o.AddDays(2) : ((bD == 0) ? o.AddDays(1) : o));
};

/**
* Retorna true quando a a data atual é um dos feriados nacionais.
* 
* @function IsHoliday_Brasil
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.IsHoliday_Brasil = function() {
	var m = this.getMonth();
	var d = this.getDate();
	
	// Caso o vencimento caia em algum feriado Federal
	if ((m == 0 && d == 1) ||	// 1º de Janeiro
		(m == 3 && d == 21) ||	// Tiradentes
		(m == 4 && d == 1) ||	// Dia dos Trabalhadores
		(m == 8 && d == 7) ||	// Dia da Independencia
		(m == 9 && d == 12) ||	// Dia das Crianças [Tambem chamado por motivo desconhecido de Nossa Senhora Aparecida]
		(m == 10 && d == 2) ||	// Finados
		(m == 10 && d == 15) ||	// Proclamação da República
		(m == 11 && d == 25))	// Natal
	{
		return true;
	}

	return false;
};

/**
* Retorna o Date setado para o próximo dia útil levando em conta os feriados nacionais.
* 
* @function NextWorkDay_Brasil
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.NextWorkDay_Brasil = function() {
	var o = this.Clone();
	
	// Caso seja um sabado, domingo ou feriado...
	while ( o.DayOfWeek() == Date.DayOfWeek.Saturday || 
            o.DayOfWeek() == Date.DayOfWeek.Sunday ||
			o.IsHoliday_Brasil())
	{
		o = o.AddDays(1);
	}

	return o;
};




















/** 
* Retorna o Date com a Hora setada para 0:0:0:0 .
* 
* @function BeginningOfDay
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.BeginningOfDay = function() {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0);
};

/**
* Retorna o Date setado para a segunda-feira da semana corrente.
* Não altera as demais propriedades.
* 
* @function BeginningOfWeek
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.BeginningOfWeek = function () {
    var o = this.Clone();
    while(o.getDay() != 1) { o.setDate(o.getDate() - 1); }
    return o;
};

/**
* Retorna o Date setado para o primeiro dia do mês corrente.
* Não altera as demais propriedades.
* 
* @function BeginningOfMonth
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.BeginningOfMonth = function() {
	return new Date(this.getFullYear(), this.getMonth(), 1, 
                    this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};

/**
* Retorna o Date setado para o primeiro dia do ano corrente.
* Não altera as demais propriedades.
* 
* @function BeginningOfYear
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.BeginningOfYear = function() {
	return new Date(this.getFullYear(), 0, 1, 
					this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};

/**
* Retorna o Date com a Hora setada para 23:59:59:999 .
* Não altera as demais propriedades.
* 
* @function EndOfDay
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.EndOfDay = function() {
	return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 23, 59, 59, 999);
};

/**
* Retorna o Date setado para o último dia do mês corrente.
* Não altera as demais propriedades.
* 
* @function EndOfMonth
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.EndOfMonth = function() {
	return new Date(this.getFullYear(), this.getMonth(), Date.DaysInMonth(this.getFullYear(), this.getMonth()), 
    				this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};

/**
* Retorna o Date setado para o último dia do ano corrente.
* Não altera as demais propriedades.
* 
* @function EndOfYear
*
* @memberof Date
*
* @return {Date}
*/
Date.prototype.EndOfYear = function() {
	return new Date(this.getFullYear(), 11, 31, 
					this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds());
};