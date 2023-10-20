"use strict";

/**
 * A set of functions called "actions" for `user-courses`
 */

module.exports = {
  async find(ctx) {
    const user = ctx.state.user;
    console.log(ctx);
    if (!user) {
      return ctx.unauthorized("You must be logged in to access this data.");
    }
    const data = await strapi
      .query("api::course.course")
      .findMany({ populate: ["users", "lessons"], where: { users: user.id } });
    return data;
  },
};
