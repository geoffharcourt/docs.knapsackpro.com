const headTags = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-JPGP34N3JJ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-JPGP34N3JJ');
</script>

<script defer data-domain="docs.knapsackpro.com" src="https://plausible.io/js/script.js"></script>`

const postBodyTags = `
<style>
  #js-cookies-message{padding: 0.5rem 1rem; display: none; opacity: 90%; text-align: center; position: fixed; bottom: 0; width: 100%; background: #efefef;}
</style>

<div id="js-cookies-message">
  <p>
    This site uses cookies. By staying here you accept them. See our <a href="https://knapsackpro.com/cookies", target="_blank">Cookie Policy</a> for details.<br>
    For more information on how to turn off the use of cookies, please <a href="https://knapsackpro.com/cookies#turning-off-cookies", target="_blank">see this</a>.<br>
    To refuse the use of cookies, please leave the page (more details <a href="https://knapsackpro.com/cookies#withdrawing-consent", target="_blank">here</a>).
  </p>
  <p>
    <a href="#" id="js-cookies-close"><button class="button--primary">I Agree</button></a>
  </p>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var cookieName = 'cookies_consent_docs'

    if (document.cookie.includes(cookieName)) {
      // no-op
    } else {
      document.getElementById('js-cookies-message').style.display = 'block';
    };

    document.getElementById("js-cookies-close").addEventListener('click', function(e) {
      e.preventDefault()

      document.getElementById("js-cookies-message").style.display = 'none';

      var date = new Date();
      date.setMonth(date.getMonth() + 12);
      var dateString = date.toUTCString();

      document.cookie = cookieName + "=true;expires=" + dateString + ";path=/"

      gtag('event', 'Cookie consent - I agree', {});
    });
  });
</script>`

async function googleAnalyticsPlugin() {
  return {
    name: 'knapsackpro-google-analytics-plugin',

    injectHtmlTags() {
      return {
        headTags,
        postBodyTags,
      }
    },
  };
}

module.exports = googleAnalyticsPlugin;
