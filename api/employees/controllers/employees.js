'use strict';
const { sanitizeEntity } = require('strapi-utils');
const { convertRestQueryParams } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {

    async searchForEmployees(ctx){
        let employees = "vacio";
        if(ctx.word !== undefined){
            employees = await strapi.connections.default.raw(`
            SELECT *   
            FROM employees
            WHERE 
              name LIKE '%${ctx.word}%' OR
              last_name LIKE '%${ctx.word}%' OR
              email Like '%${ctx.word}%' OR
              email Like '%${ctx.word}%' OR 
              nationality  Like '%${ctx.word}%' OR 
            phone  Like '%${ctx.word}%' OR 
            civil_status  Like '%${ctx.word}%' OR 
            birthday  Like '%${ctx.word}%' ; `);
            return employees[0];
        }else{
            return employees;
        }
    },
};
