// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Provides the block_mood_survey/control module
 *
 * @package   block_mood_survey
 * @category  output
 * @copyright 2020 Veronica Bermegui
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module block_mood_survey/control
 */
define(['jquery', 'core/log', 'core/ajax'], function ($, Log, Ajax) {
    'use strict';

    /**
     * Initializes the block controls.
     */
    function init(instanceid, isstudent) {
        Log.debug('block_mood_survey/control: initializing controls of the block_mood_survey block instance ' + instanceid);

        var region = $('[data-region="block_mood_survey-instance-' + instanceid + '"]').first();

        if (!region.length) {
            Log.debug('block_mood_survey/control: wrapping region not found!');
            return;
        }

        var control = new MoodSurveyControl(region, instanceid, isstudent);
        control.main();
    }

    // Constructor.
    function MoodSurveyControl(region, instanceid, isstudent) {
        var self = this;
        self.region = region;
        self.instanceid = instanceid;
        self.isstudent = isstudent;
    }

    MoodSurveyControl.prototype.main = function () {
        var self = this;

        // Handle answer click.
        self.region.on('click', '.answer .option', function (e) {
            e.preventDefault();
            var option = $(this);
            self.saveSurveyResponse(option);
        });

        // Display more
        self.region.on('click', '.survey-more', function (e) {
            $("#answersbody").css('text-align', 'justify');
            $("#answersbody").find('a').removeAttr('data-original-title'); //remove tooltips
            $("#answersbody").find('span').css('display', 'inline'); // display label

            //Display help
            ($("#answersbody").find('.help')).css('display', 'inline');
            this.text = 'Less...';
            $(this).addClass('survey-less');
            $(this).removeClass('survey-more');
            return false; // To avoid the action of refreshing the page and going to the top.
        });

        // Display less
        self.region.on('click', '.survey-less', function (e) {
            $("#answersbody").css('text-align', 'center');
            ($("#answersbody").find('.help')).css('display', 'none');
            ($("#answersbody").find('span')).css('display', 'none');

            $("#answersbody").children().each(function (index) {
                $(this).attr('data-original-title', $(this).first().text()); //Add tooltips
            });

            this.text = 'More...';
            $(this).removeClass('survey-less');
            $(this).addClass('survey-more');
            document.getElementById("question").scrollIntoView();
            return false;
        });

        self.region.on('click', '.why-ask', function (e) {                          
            return false;
        });

     
        // Opt out
        self.region.on('click', '.survey-opt-out', function (e) {
            e.preventDefault();
            self.saveOptOut();//2 = opt out
        });
    };


    MoodSurveyControl.prototype.saveOptOut = function () {
        var self = this;

        Ajax.call([{
                methodname: 'block_mood_survey_save_opt_out',
                args: {
                },
                done: function (response) {
                    self.region.find('.survey').html('<h3>Thank you</h3>');
                    self.region.delay(2000).fadeOut(400);
                    Log.debug(response);
                },
                fail: function (reason) {
                    Log.error(reason);
                }
            }]);

    };

    MoodSurveyControl.prototype.saveSurveyResponse = function (option) {
        var self = this;

        // Check if already submiting.
        if (self.region.hasClass('submitting')) {
            return;
        }

        var question = option.closest('.question');
        var questionid = question.data('id');
        var questiontitle = question.data('title');
        var response = option.data('value');
        // Remove tooltip
        $('body').find('.tooltip').css('display', 'none');

        if (questionid === null || questiontitle === null || response === null) {
            return;
        }

        self.region.addClass('submitting');
        question.addClass('submitting');
        option.addClass('submitting');

        Ajax.call([{
                methodname: 'block_mood_survey_save_survey_response',
                args: {
                    questionid: questionid,
                    questiontitle: questiontitle,
                    response: response
                },
                done: function (response) {
                    if (response.completed) {
                        self.region.find('.survey').html(response.message);
                        self.region.delay(2000).fadeOut(400);
                    }
                },
                fail: function (reason) {
                    self.region.find('.survey').html('<h3>Error: Failed to save survey response.</h3>');
                    Log.error(reason);
                }
            }]);
    };

    return {
        init: init
    };
});
