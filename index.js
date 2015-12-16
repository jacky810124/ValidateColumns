function Validate() {

    this.reg = {
        cell: /^09[0-9]{8}/,
        email: /^[\S]+@[\S]+\.+[\S]+$/,
        tel: /^0[0-9]{8}/
    };
}

/**
 * validation columns
 * @param  {Object} standard           standard data
 * @param  {Object} needToValidateData need to be validated data
 * @return {Object}                    result
 */
Validate.prototype.validateColumns = function(standard, needToValidateData) {

    return new Promise(function(resolve, reject) {

        var result = {
            compareResult: false,
            columns: [],
        }

        if (typeof standard == 'object' && typeof needToValidateData == 'object' && Array.isArray(standard) != true && Array.isArray(needToValidateData) != true) {

            needToValidateData = JSON.parse(JSON.stringify(needToValidateData));//let needToValidateData can use hasOwnProperty function

            for (var key in standard) {

                if (!needToValidateData.hasOwnProperty(key)) {

                    result.columns.push(key.toString());
                }
            }

            if (result.columns.length === 0) {

                result.compareResult = true;
            }

            resolve(result);
        } else {

            reject('Data type must be object');
        }
    });
};

/**
 * validate password
 * @param  {String} password               your password
 * @param  {String} needTovalidatePassword your reinput password
 * @return {Boolean}                       true or false
 */
Validate.prototype.validatePassword = function (password, needTovalidatePassword) {

    if(password === needTovalidatePassword) {

        return true;
    } else {

        return false;
    }
};

/**
 * validate email
 * @param  {String} email email address
 * @return {Boolean}      true or flase
 */
Validate.prototype.validateEmail = function (email) {

    var re = this.reg.email;

    if(re.exec(email) !== null) {

        return true;
    } else {

        return false;
    }
};

/**
 * validate tel number
 * @param  {String} tel tel number
 * @return {Boolean}    true or false
 */
Validate.prototype.validateTel = function (tel) {

    var re = this.reg.tel;

    if(re.exec(tel) !== null) {

        return true;
    } else {

        return false;
    }
};

/**
 * validate cellphone number
 * @param  {String} cell cellphone number
 * @return {Boolean}     true or false
 */
Validate.prototype.validateCell = function (cell) {

    var re = this.reg.cell;

    if(re.exec(cell) !== null) {

        return true;
    } else {

        return false;
    }
};

module.exports = new Validate();
