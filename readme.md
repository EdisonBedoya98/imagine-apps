Tailwind is pretty much a design system using utility classes to make writing css easier therefore it can be pretty much used with any other ui library just make sure to disable the default styling that Tailwind inject into your default styling by disabling the preflight option in config :

module.exports = {
corePlugins: {
preflight: false,
}
}

Credentials

user: admin@imagineapps.com
password: admin123

user: external@imagineapps.com
password: external123
