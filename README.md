# Mood Survey Block

A block to display a mood survey.
Based on the Markoff block (https://github.com/cgs-ets/moodle-block_markoff.git)

# Author

Veronica V. Bermegui  <veronica.v.bermegui@gmail.com>

# Demo
![](/images/AnswerVersion.gif)


![](/images/ExtendedVersion.gif)


# Installation

## Clone
* Clone the repository into the block folder and rename it to mood_survey.\
The following  command does both steps: \
git clone https://github.com/cgs-ets/moodle-block_mood_survey.git mood_survey
* Log into Moodle as administrator.\
Open the administration area (http://your-moodle-site/admin) to start the installation automatically.

## Configuraiton
Open the  block's configuration form and  write the html code for your survey.

Here is an example :


`<a class="option" href="#" data-value="1-Struggling to engage, unmotivated, overwhelmed" data-toggle="tooltip" data-placement="top" data-original-title="Struggling to engage, unmotivated, overwhelmed">
    <img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/02_doublethumbsdown.png" alt="" width="50" height="50" role="presentation" class="atto_image_button_text-bottom">
    <span class="label" data-label="1">Struggling to engage, unmotivated, overwhelmed</span>
</a>`

`<a class="option" href="#" data-value="2-Some engagement, struggling, need more support" data-toggle="tooltip" data-placement="top" data-original-title="Some engagement, struggling, need more support">
    <img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/03_thumbdown.png" alt="" width="50" height="50" role="presentation" class="atto_image_button_text-bottom">
  <span class="label" data-label="2">Some engagement, struggling, need more support</span>
</a>`

`<a class="option" href="#" data-value="3-Feeling fine, trying to engage, challenged" data-toggle="tooltip" data-placement="top" data-original-title="Feeling fine, trying to engage, challenged">
    <img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/04_neutral.png?time=1590728579399" alt=" " width="50" height="50" role="presentation" class="atto_image_button_text-bottom">
  <span class="label" data-label="3">Feeling fine, trying to engage, challenged</span>
</a>`

`<a class="option" href="#" data-value="4-Engaged and challenged, progressing well overall" data-toggle="tooltip" data-placement="top" data-original-title="Engaged and challenged, progressing well overall">
    <img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/05_thumbup.png" alt="" width="50" height="50" role="presentation" class="img-responsive atto_image_button_text-bottom">
  <span class="label" data-label="4">Engaged and challenged, progressing well overall</span>
</a>`

`<a class="option" href="#" data-value="5-Confident, motivated, coping very well" data-toggle="tooltip" data-placement="top" data-original-title="Confident, motivated, coping very well">
    <img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/06_doublethumbsup.png" alt="" width="50" height="50" role="presentation" class="img-responsive atto_image_button_text-bottom">
  <span id="lastoption" class="label" data-label="5">Confident, motivated, coping very well</span>
</a>`

`<div class="help">`
    `<h5 class="title">Need to talk to someone?</h5>`
   ` <a class="option staff"><img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/jane.jpg" alt="" width="50" height="50" role="presentation" class="img-responsive atto_image_button_text-bottom">
      <span class="label">Jane Doe. +61 x xxxx xxxx</span>
    </a>`
    `<a class="option staff"><img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/john.png.jpg" alt="" width="50" height="50" role="presentation" class="img-responsive atto_image_button_text-bottom">
      <span class="label">John Doe. +61 x xxxx xxxx</span>
    </a>`
 `   <a class="option envelope" onclick="window.location.href='mailto:some_email@account.com?subject= ';">
        <img src="http://localhost/cgs/moodle/draftfile.php/5/user/draft/615151026/07_envelope.png" alt="" width="50" height="50" role="presentation" class="img-responsive atto_image_button_text-bottom">
        <span class="label">Make an appointment</span>
    </a>`
`</div>`
