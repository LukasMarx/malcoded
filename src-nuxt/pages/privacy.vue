<template>
  <v-container grid-list-xl fluid style="flex: 1 1 auto !important;">
    <v-layout row wrap>
        <v-flex lg6 offset-lg3 md8 offset-md2 sm10 offset-sm1 xs12>
            <v-card class="card">
                <h1>Privacy Policy</h1>
                <p>Last updated: 24.05.2018</p>
                <p>This page informs you of our policies regarding the collection,
                    use and disclosure of Personal Information we receive from users
                    of the Site (malcoded.com). We use your Personal Information only
                    for providing and improving the Site. By using the Site, you agree
                    to the collection and use of information in accordance with this policy.
                </p>
                
                <h2>Data Controller</h2>
                <p>Responsible for the collection, processing and usage of you personal data
                     is malcoded.com, Lukas Marx, Adlerstraße in Rees, Germany. (Art. 4, No. 7 GDPR)
                </p>

                <h2>Hosting (Data Processor)</h2>
                <p>To serve this Site to you, we use a hosting company called <a class="link" href="https://www.digitalocean.com/security/gdpr/">
                     DigitalOcean</a>. They are
                     participant in and comply with the EU-U.S. Privacy Shield Framework. They also
                     comply with the GDPR.
                </p>

                <h2>Personal Data</h2>
                <h3>Log Data</h3>
                <p>Like many site operators, we collect information that your browser sends
                     whenever you visit our Site ("Log Data"). This Log Data may include information
                     such as your computer's Internet Protocol ("IP") address, browser type, browser version,
                     the pages of our Site that you visit, the time and date of your visit, the time spent
                     on those pages and other statistics.
                </p>
                <p>This Log Data is required to ensure the functionality of the site. With the help of
                     the Log Data, errors in the application can be detected and removed. This is our legitimate
                     interest (Art. 6, Section 1 f, GDPR).
                </p>
                <p>The Log Data is deleted regularly and is stored no longer than 30 days.</p>

                <h2>Cookies</h2>
                <p>Cookies are small text-files that many Sites place on the users computer.</p>
                <p>This Site does not set any Cookies.</p>

                <h2>External Links</h2>
                <p>We might link to revelevant content on other sites. We are not responsible for these sites or their content.
                    When you visit these sites, they might collect your personal data. We do not have any control over that.
                </p>
            </v-card>
        </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
    margin-top: 32px;
    margin-bottom: 32px;
    padding-bottom: 32px;
    word-break: break-word;
    text-align: left;
    padding: 32px;
}

.link {
    color: #c3002f;
    text-decoration: none;
    font-weight: bold;
    white-space: normal;
    word-wrap: break-word;
}
</style>
