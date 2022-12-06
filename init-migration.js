module.exports = {
    async up(knex) {
        // Generate base pages on first start of CMS
        await knex.insert([ {
            "short_name": "hope3",
            "slug": "hope3",
            "created_at": new Date(),
            "updated_at": new Date(),
            "published_at": null,
            "created_by_id": 1,
            "updated_by_id": 1,
            "locale": "en"
        } ],['id']).into('pages')
    },
};