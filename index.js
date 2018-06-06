import tarteaucitron from './tarteaucitron.js';

tarteaucitron.init({
    "hashtag": "#tarteaucitron",
    /* Ouverture automatique du panel avec le hashtag */
    "highPrivacy": false,
    /* désactiver le consentement implicite (en naviguant) ? */
    "orientation": "top",
    /* le bandeau doit être en haut (top) ou en bas (bottom) ? */
    "adblocker": false,
    /* Afficher un message si un adblocker est détecté */
    "showAlertSmall": true,
    /* afficher le petit bandeau en bas à droite ? */
    "cookieslist": true,
    /* Afficher la liste des cookies installés ? */
    "removeCredit": false,
    /* supprimer le lien vers la source ? */
    //"cookieDomain": ".my-multisite-domaine.fr" /* Nom de domaine sur lequel sera posé le cookie - pour les multisites / sous-domaines - Facultatif */
});



tarteaucitron.user.analyticsUa = 'UA-XXXXXXXX-X';
tarteaucitron.user.analyticsMore = function () { /* add here your optionnal ga.push() */ };
(tarteaucitron.job = tarteaucitron.job || []).push('analytics');