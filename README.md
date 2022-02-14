# VoteAmerica Conditional Fields DatoCMS plugin

Show/hide field value fields based on the associated field type model.

## Configuration

This plugin requires a DatoCMS API Key global variable so it can look up the FieldType record
that is associated with a InformationField record. For simplicity, we also need to
add a global FieldType model ID variable to enable that lookup. These variables are added on the
plugin settings page.

## Development

Install all the project dependencies with:

```
yarn install
```

Add this plugin in development mode to one of your DatoCMS project with:

```
yarn addToProject
```

Start the local development server with:

```
yarn start
```

The plugin will be served from [http://localhost:5000/](http://localhost:5000/). Insert this URL as the plugin [Entry point URL](https://www.datocms.com/docs/plugins/creating-a-new-plugin/).

## Publishing

Before publishing this plugin, make sure:

* you've properly described any configuration parameters in this README file;
* you've properly compiled this project's `package.json` following the [official rules](https://www.datocms.com/docs/plugins/publishing/);
* you've added a cover image (`cover.png`) and a preview GIF (`preview.gif`) into the `docs` folder.

When everything's ready, just run:

```
yarn publish
```
