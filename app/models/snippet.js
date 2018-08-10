const hljs = require('highlight.js');

const md = require('markdown-it')({
    highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
            return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>`;
        }

        return `<pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre>`;
    },
});

module.exports = (sequelize, DataTypes) => {
    const Snippet = sequelize.define(
        'Snippet',
        {
            title: DataTypes.STRING,
            content: DataTypes.TEXT,
        },
        {
            getterMethods: {
                excerpt() {
                    return this.content.length > 120
                        ? `${this.content.substring(0, this.content.lastIndexOf(' ', 120))}...`
                        : this.content;
                },
                formattedContent() {
                    return md.render(this.content);
                },
            },
        },
    );

    Snippet.associate = (models) => {
        Snippet.belongsTo(models.Category);
    };

    return Snippet;
};
