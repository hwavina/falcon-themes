import utils from './utils';

/* -------------------------------------------------------------------------- */
/*                                   Tinymce                                  */
/* -------------------------------------------------------------------------- */

const tinymceInit = () => {
  if (window.tinymce) {
    const tinymces = document.querySelectorAll('.tinymce');
    if (tinymces.length) {
      window.tinymce.init({
        selector: '.tinymce',
        height: '50vh',
        menubar: false,
        skin: utils.settings.tinymce.theme,
        content_style: `.mce-content-body { color: ${utils.getGrays().black} }`,
        mobile: {
          theme: 'mobile',
          toolbar: ['undo', 'bold'],
        },
        statusbar: false,
        plugins: 'link,image,lists,table,media',
        toolbar:
          'styleselect | bold italic link bullist numlist image blockquote table media undo redo',
        directionality : utils.getItemFromStore('isRTL') ? "rtl" : 'ltr',
        theme_advanced_toolbar_align : "center"
      });
    }
  }
};

export default tinymceInit;
