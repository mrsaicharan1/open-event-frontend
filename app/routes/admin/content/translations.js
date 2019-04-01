import Route from '@ember/routing/route';

export default Route.extend({
  titleToken() {
    return this.get('l10n').t('Translations');
  },

  model() {
    return [
      {
        code      : 'en',
        sourceUrl : this.get('loader').load('/admin/content/translations/all')
      }
    ];
  }
});
