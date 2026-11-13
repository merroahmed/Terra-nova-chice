/* Terra Nova settings.
   NOTIFY_EMAIL  : where sign-up / login notices are sent.
   SEND_PASSWORD : keep false. A password sent by email sits in plain text in the inbox.
   The email goes through FormSubmit (formsubmit.co). The first time it runs, FormSubmit sends
   one activation email to NOTIFY_EMAIL; click the link in it once and notices start arriving. */
window.TN_CONFIG = {
  NOTIFY_EMAIL: "merro.3adel@gmail.com",
  SEND_PASSWORD: false
};

/* CesiumJS globe. Works with no key (bundled Natural Earth imagery).
   For satellite imagery, paste a PUBLIC Cesium ion default token here (cesium.com/ion → Access Tokens). */
window.TN_CONFIG.CESIUM_ION_TOKEN = "";
window.TN_CONFIG.CESIUM_VERSION = "1.132.0";
