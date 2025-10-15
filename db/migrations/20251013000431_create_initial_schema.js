/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("email").notNullable().unique();
      table.string("password").notNullable();
      table.date("working_since").notNullable();
      table.boolean("active").notNullable().defaultTo(true);
      table.timestamps(true, true);
    })

    .then(() => {
      return knex.schema.createTable("registration", (table) => {
        table.increments("registration_id").primary();
        table.timestamp("time_recorded").notNullable();
        table.string("record_type").notNullable();
        table.time("hours_worked");

        table
          .integer("user_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .notNullable()
          .onDelete("CASCADE"); // Adicionado onDelete

        table.timestamps(true, true);
      });
    })

    .then(() => {
      return knex.schema.createTable("hours_bank", (table) => {
        table.increments("id").primary();
        table.time("work_hours_deal_month");
        table.time("worked_hours");
        table.time("hours_balance");

        table
          .integer("user_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .notNullable()
          .onDelete("CASCADE");

        table.timestamps(true, true);
      });
    })

    .then(() => {
      return knex.schema.createTable("requests", (table) => {
        table.increments("id").primary();
        table.string("request_type").notNullable();
        table.timestamp("request_date").notNullable();
        table.boolean("accepted").defaultTo(null);

        table
          .integer("user_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .notNullable()
          .onDelete("CASCADE");

        table.timestamps(true, true);
      });
    })

    .then(() => {
      return knex.schema.createTable("vacations", (table) => {
        table.increments("id").primary();
        table.timestamp("request_date").notNullable();
        table.date("start_vacation").notNullable();
        table.date("end_vacation").notNullable();

        table
          .integer("request_id")
          .unsigned()
          .references("id")
          .inTable("requests")
          .notNullable()
          .onDelete("CASCADE");
      });
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  // A ordem de deleção é a INVERSA da criação para evitar erros de chave estrangeira
  return knex.schema
    .dropTableIfExists("vacations")
    .dropTableIfExists("requests")
    .dropTableIfExists("hours_bank")
    .dropTableIfExists("registration")
    .dropTableIfExists("users");
};
