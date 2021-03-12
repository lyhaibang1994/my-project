<template>
  <div>
    <section id="values">
        <div class="container">
            <div class="row">
                <div class="col s12 l12 center-align">
                    <h4>Contact us</h4>
                    <hr class="hrTitle">
                </div>
            </div>
            <div class="row">
                <form class="contact-form col l4 offset-l2 s12" action="mailer.php" id="ajax-contact" method="post">
                    <div class="row rowForm">
                        <div class="input-field col s6">
                            <input id="name" name="contactName" type="text" class="validate">
                            <label for="name">Name</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                        <div class="input-field col s6">
                            <input id="email" name="contactEmail" type="email" class="validate">
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                    </div>
                    <div class="row rowForm">
                        <div class="input-field col s12">
                            <input id="subject" name="contactSubject" type="text" class="validate">
                            <label for="subject">Subject</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                    </div>
                    <div class="row rowForm">
                        <div class="input-field noPaddingRight col s12">
                            <textarea id="message" name="contactMessage" class="materialize-textarea validate" style="height: 45px;"></textarea>
                            <label for="message">Message</label>
                            <span class="helper-text" data-error="This field is required" data-success=""></span>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col l12 s12">
                            <button class="btnSend">send</button>
                            <div class="row" id="form-messages" style="font-size: 18px; margin: 12px 2px"></div>
                            <div class="status-message status-success" style="display:none">Your message has been sent!</div>
                            <div class="status-message status-failure" style="display:none">Error: Your message has not been sent. Please try again or contact us at <a href="info@element-alpha.com">info@element-alpha.com</a>.</div>
                        </div>
                    </div>
                </form>
                <div class="col s12 l6">
                  <address>
                    <p>VIET HAUS LTD.</p>
                    <p><br>Office: A5.08 Sky Center, 5B Pho Quang, Ward 2<br>Tan Binh District, Ho Chi Minh City, Vietnam.</p>
                    
                    <p>Tel: <a href="tel:+84 28 6273 9408">(+84) 28 6273 9408</a><br>For inquiries, please contact:<br>
                        Ngan Nguyen (Ms.)
                        <a href="tel:+84 9 0307 1408">(+84) 9 0307 1408</a>
                        <br>
                    <a href="mailto:ngan@viet-haus.com">
                        ngan@viet-haus.com
                    </a></p>
                  </address>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script>
export default {
  name: 'contact'
}
</script>
<script src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
<script src="assets/js/jquery.js"></script>
<script src="assets/js/materialize.min.js"></script>
<script type="text/javascript" src="assets/js/parallax.js"></script>
<script src="assets/js/init.js"></script>
<script type="text/javascript"></script>
<style src="@/assets/css/materialize.min.css" scoped></style>
<style src="@/assets/css/style.css" scoped></style>
