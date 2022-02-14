import './style.sass';
import { SiteClient } from 'datocms-client';

window.DatoCmsPlugin.init(async (plugin) => {
  plugin.startAutoResizer();

  const initialHideField = plugin.field.attributes.api_key.startsWith('value_');
  plugin.toggleField(plugin.fieldPath, initialHideField);

  // Hide this explicitly by name because Dato doesn't actually allow adding
  // plugins to PDF-type fields. But we seem to be able to toggle it anyway.
  // This stupidly runs for each field that loads this plugin, even though
  // we really only need it to run once.
  plugin.toggleField('value_pdf', false);

  const client = new SiteClient(plugin.parameters.global.datoCmsApiToken);

  const fieldType = await client.items.find(plugin.item.attributes.field_type);

  if (!fieldType) {
    return;
  }

  // As with the above explicit call, we are using this plugin instance to check to see
  // if this is a PDF field, in which case we should show that input editor.
  if (fieldType.fieldFormat.toLowerCase() === 'pdf') {
    plugin.toggleField('value_pdf', true);
    return;
  }

  // Otherwise, show the field type editor of the field type (other than a pdf)
  const showField = plugin.fieldPath === `value_${fieldType.fieldFormat.toLowerCase()}`;
  plugin.toggleField(plugin.fieldPath, showField);
});
